const router = require("express").Router();
const postRoutes = require("./posts.js");
const userRoutes = require("./users.js");
const commentRoutes = require("./comments.js");

// Post routes
router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/comments", commentRoutes);


module.exports = router;