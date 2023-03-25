const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  message: String,
  creator: {
    type: String,
    required: true,
  },
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  user: { type: String, default: true },
});
const postModel = mongoose.model("postMessage", postSchema);

module.exports = postModel;
