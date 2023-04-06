require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/connectDB");
//connection url
const PORT = process.env.PORT || 7000;

const app = express();

app.use(
  cors({
    origin: [
      "https://www.yoursite.com",
      "http://127.0.0.1:5500",
      "http://localhost:5000",
      "http://localhost:3000",
      "http://localhost:7000",

    ],
    credentials: true,
  })
);

// payload too large error occured here --> set the limit

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
//  body parse
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// connecting to the dataBase
connectDB();

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

//using routes
app.use("/posts", require("./routes/posts"));
app.use("/auth", require("./routes/userRoute"));
