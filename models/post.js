const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true},
  username: { type: String},
  category: { type: String},
  occasion: { type: String},
  address: { type: String },
  description: { type: String },
  id: { type: String},
  date: { type: Date, default: Date.now }
});

module.exports = Post = mongoose.model("posts", postSchema);

