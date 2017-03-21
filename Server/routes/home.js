const Post = require('../models/posts');
const fs = require('fs');


exports.postHandler = function(req, res){
  var pageOptions = {
      page: req.query.page || 1,
      limit: req.query.limit || 5
  }

  Post.find({})
      .sort({
        _id: "desc"
      })
      .skip(pageOptions.page*pageOptions.limit)
      .limit(pageOptions.limit)
      .exec(function (err, post) {
          if(err) { res.status(500).redirect('/'); }
          else if(post){res.status(200).json(post)}
          else{res.redirect('/')}
      });
}
