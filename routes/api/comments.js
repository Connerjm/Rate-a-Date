const router = require('express').Router();
const Comment = require('../../models/comment');

router.get('/' , (req,res) => {
    Comment.find()
        .populate('user')
        .sort({'createdAt':-1})
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json('Error' + err));
});

router.get('/:postname' , (req,res) => {
    Comment.find({post_name: req.params})
        .sort({'createdAt':-1})
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json('Error' + err));
});


router.post('/add',async (req,res) => {

    console.log(req.user);
    const comment = new Comment({

        user : req.user._id,
        content : req.body.content

    });
    try {
        const savedComment = await comment.save();
        const savedCommentWithUserData = await Comment.findById(savedComment._id).populate('user');
        res.send(savedCommentWithUserData); 
    }catch(err){
        res.status(400).send(err);
    }
})


module.exports = router;