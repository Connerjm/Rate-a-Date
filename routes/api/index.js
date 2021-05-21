const router = require("express").Router();
const postRoutes = require("./posts.js");

// Post routes
router.use("/posts", postRoutes);

module.exports = router;