// Create web server
const express = require("express");
// Create router
const router = express.Router();
// Import comments controller
const commentsController = require("../controllers/commentsController");
// Import middleware
const { ensureAuthenticated } = require("../config/auth");

// @route   POST /comments
// @desc    Create a comment
// @access  Private
router.post("/", ensureAuthenticated, commentsController.createComment);

// @route   GET /comments
// @desc    Get all comments
// @access  Private
router.get("/", ensureAuthenticated, commentsController.getAllComments);

// @route   GET /comments/:id
// @desc    Get a comment by id
// @access  Private
router.get("/:id", ensureAuthenticated, commentsController.getCommentById);

// @route   PUT /comments/:id
// @desc    Update a comment by id
// @access  Private
router.put("/:id", ensureAuthenticated, commentsController.updateCommentById);

// @route   DELETE /comments/:id
// @desc    Delete a comment by id
// @access  Private
router.delete(
  "/:id",
  ensureAuthenticated,
  commentsController.deleteCommentById
);

module.exports = router;