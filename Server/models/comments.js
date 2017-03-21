const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//
const commentSchema = new Schema({
  postid: String,
  name: String,
  comment: String,
  date: String
});

const CommentClass = mongoose.model('comment', commentSchema);

module.exports = CommentClass;
