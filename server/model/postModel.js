const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  seller: { String },
  title: String,
  message: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  price: {
    type: String,
    required: true,
  },
  user: { type: String, default: true },
});
const postModel = mongoose.model("postMessage", postSchema);

module.exports = postModel;
