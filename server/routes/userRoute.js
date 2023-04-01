const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register the user
router.post("/", async (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;

    // validation
    if (!password || !email || !passwordVerify) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Please enter a password of atleast 6 characters " });
    }

    if (password !== passwordVerify) {
      return res.status(400).json({
        errorMessage: "Please enter the same password twice.",
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(401).json({ message: "User already exists" });
    }

    // hashing the password
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      email,
      password: hashPassword,
    });

    // sign in token --> when login or sign in user wi;; get a token clalled acces_token_key   --> in user's cookies this acces_token_key should be present
    // lets learn more about cookies
    // cookies are automatically send form the server to the client back and forth
    // when user signs ot logins this cookie will pe present in user's browsers cookies
    // if it is not present then is user is not authorized to the posts section/or else
    // during logout we just have to delete the cookie -> we cant delte the cookie we can set it to empty string ;

    const savedUser = await newUser.save();

    // sign in token
    const token = jwt.sign(
      { user: savedUser._id },
      process.env.ACCESS_SECRET_KEY
    );

    // now send this token in httpOnly cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// log in

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please enter all required fileds" });
    }
    const existingUser = await userModel.findOne({ email });

    if (!existingUser) {
      //it is obivious that it user has put the incorrect email
      return res.status(400).json({ message: "Wrong email or password" });
    }

    const passwordCorrect = bcrypt.compare(password, existingUser.password);

    if (!passwordCorrect) {
      res.status(400).json({ message: "Wrong email or password" });
    }

    // sign in token
    // we have to send the token when signed in or logged in

    const token = jwt.sign(
      { user: existingUser._id },
      process.env.ACCESS_SECRET_KEY
    );

    // send the token in httpOnly cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// logout -->during logout clear the cookie so that user wont be able to access the protected routes

router.get("/logout", async (req, res) => {
  try {
    // sending the empty cookie

    res
      .cookie("token", "", {
        httpOnly: true,
        sameSite: "none",
        expires: new Date(0), //setting the date in the past i.e, it is expired now
        secure: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// loggedin route  to tell whether the user is logged in or not

router.get("/loggedIn", async (req, res) => {
  try {
    // getting the cookie form the token

    const token = req.cookies.token;
    if (!token) return res.json(false);

    // if token is not verified it will throw error and we will catch it ans send just like we did it
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);

    res.json(decoded);
    console.log("loggedIN successfully");
  } catch (err) {
    res.json(false);
    console.log("LoggedIn unsuccessfull");
  }
});

module.exports = router;
