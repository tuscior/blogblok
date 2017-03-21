const authentication = require('./Server/auth/auth');
const passport = require('passport');
const AuthPassport = require('./Server/auth/passport');
const requireAuth = passport.authenticate('jwt', {session: false});
const admin = require('./Server/routes/admin');
const home = require('./Server/routes/home');
const post = require('./Server/routes/post');
const multer = require('multer');
const path = require('path');
const express = require('express');

const upload = multer({ dest: 'uploads' });


module.exports = function(app) {
  app.post('/admin/new', upload.single('img'), requireAuth, admin.new);
  app.get('/', function(request, response) {
  response.sendFile(__dirname + '/html/index.html')
});
//
  app.post('/admin/edit/:id', requireAuth, admin.edit)
  app.get('/admin/edit/:id', requireAuth, admin.sendEdit)
  app.post('/admin/delete/:id', requireAuth, admin.delete)
  app.get('/admin', function(request, response) {
  response.sendFile(__dirname + '/html/index.html')
});
  

  app.post('/admin', authentication.login);
  app.get('/home', home.postHandler);
  app.get('/post/:id', post.postView);
  app.post('/post/:id', post.postComments);
}
