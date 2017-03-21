const Post = require('../models/posts');

const Comments = require('../models/comments');

exports.postView = function(req, res){
  const id = req.params.id;

  Post.findOne({_id: id}, function(err, post){
    if(post){
    Comments.find({postid: id})
            .sort({
              _id: "desc"
            })
            .exec(function(err, comment){
              if(comment){
              res.status(200).send([comment, post]);
            }
            else{
              res.send([comment, post]);
              }
            });
    }else{
      res.status(500).redirect('/');
    }
  });
}

exports.postComments = function(req, res){
  const id = req.params.id;
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let month = date.getMonth()+1;
  const year = date.getFullYear();
  let day = date.getDate();
  day = day < 10 ? "0"+day : day;
  month = month < 10 ? "0"+month : month;
  minutes = minutes < 10 ? "0"+minutes : minutes;
  seconds = seconds < 10 ? "0"+seconds : seconds;
  hours = hours < 10 ? "0"+hours : hours;

  const time = day + '/' + month + '/' + year  + ' at ' + hours + ':' + minutes + ":" + seconds;

  const newComment = new Comments({
    postid: id,
    name:req.body.name,
    comment:req.body.comment,
    date: time
  });
  newComment.save();
}
