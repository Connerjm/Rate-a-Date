const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({

    user: { type: Schema.Types.ObjectId, ref: 'User' },
    post_name: { type: Schema.Types.ObjectId, ref: 'Post' },
    content: { type: String, required: true, trim: true },

        
},{
    timestamps : true,
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;