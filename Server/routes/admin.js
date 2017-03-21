//const mongoose = require('mongoose');
const Post = require('../models/posts');
const fs = require('fs');

function formatAMPM(date) {
let hours = date.getHours();
let minutes = date.getMinutes();
const ampm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0'+minutes : minutes;
let strTime = hours + ':' + minutes + ' ' + ampm;
return strTime;
}

exports.test = function(req, res, next){
  res.send('dziala');
}


exports.new = function(req, res){
  console.log(req.body);
let date = new Date();
const year = date.getFullYear();
const day = date.getDate();
let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
let monthName = month[date.getMonth()];
const time = day + ' ' + monthName + ' ' +  year + ' at ' + formatAMPM(date);
console.log(req.file.filename);

const title = req.body.title;
const content = req.body.content;
const path = req.file.path;
const filename = req.file.filename;
const newPost = new Post({
  img: filename,
  filename: filename,
  title: title,
  content: content,
  date: time
});
newPost.save();
res.status(200).send('post zapisany');
}

exports.delete = function(req, res){
const id = req.params.id;
Post.findOne({_id: id}, function(err, post){
if(post) {
  post.remove();
  res.status(200).send("dziala");
} else {
  res.status(500);
}
});

}

exports.edit = function(req, res){

const id = req.params.id;
const content = req.body.content;
const title = req.body.title;
Post.findOne({_id: id}, function(err, post){
if(post){
  console.log(post.content);
  post.content = content;
  post.title = title;
  post.save();
  res.status(200).json({ res: 'dziala'});
} else {
  res.status(500).json({error: 'error'});
}
});
}

exports.sendEdit = function(req,res){
const id = req.params.id
const content = req.body.content;
const title = req.body.title;
Post.findOne({_id: id}, function(err, post){
if(post){
  res.send(post);
}else{
  res.status(500).send('nothing');
}
});
}
