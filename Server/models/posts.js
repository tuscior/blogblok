//
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
img: String,
title: String,
content: String,
date: String
});


const PostClass = mongoose.model('post', postSchema);
module.exports = PostClass;


//module.exports = comment;
