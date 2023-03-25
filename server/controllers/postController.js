const { default: mongoose } = require("mongoose");
const postModel = require("../model/postModel");

// get post
const getPost = async (req, res) => {
  try {
    const postMessages = await postModel.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// create post

const createPost = async (req, res) => {
  try {
    const { seller, title, message, price, selectedFile, user } = req.body;
    if (!seller || !user || !price || !selectedFile) {
      return res.status(400).json({ message: "Enter all credentials" });
    }
    const newPost = new postModel({
      seller,
      title,
      message,
      selectedFile,
      price,
      user,
    });
    const result = await newPost.save();

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: "Invalid Id for Post" });
    }
    const updatedPost = await postModel.findByIdAndUpdate(_id, post, {
      new: true,
    });

    res.json(updatePost);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id: _id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: "Invalid Id for Post" });
    }

    await postModel.findByIdAndRemove(_id);

    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { getPost, createPost, updatePost, deletePost };
