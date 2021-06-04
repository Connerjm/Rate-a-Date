const router = require("express").Router();
const postsController = require("../../controllers/postsController");

const Post = require("../../models/post");
// Matches with "/api/posts"
router.post("/newdateidea", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    category: req.body.category,
    occasion: req.body.occasion,
    address: req.body.address,
    description: req.body.description
  })
  newPost
  .save()
  .then(post => res.json(post))
  .catch(err => console.log(err));
})


router
  .route("/:id")
  .get(postsController.findById)
  .put(postsController.update)
  .delete(postsController.remove);

module.exports = router;
