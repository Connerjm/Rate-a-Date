const router = require("express").Router();
const postRoutes = require("./posts.js");
const userRoutes = require("./users.js");

// Post routes
router.use("/posts", postRoutes);
router.use("/users", userRoutes);

module.exports = router;