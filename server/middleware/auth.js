//we have put this middleware in vefore the createPost route so that user wont be avle to create the post if he is not authorized
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
    }
    const verified = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
    req.user = verified.user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
};

module.exports = auth;
