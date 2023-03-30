const express = require("express");
const postController = require("../controllers/postController");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", postController.getPost);

router.post("/", auth, postController.createPost);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
module.exports = router;
