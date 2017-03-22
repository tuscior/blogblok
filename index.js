const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const router = require('./router');
const AdminClass = require('./Server/models/admin')
const path = require('path');
//DB setup
mongoose.connect('mongodb://tuscior:tuscior@ds139370.mlab.com:39370/tusciordb');
mongoose.connection.once('open', function(){
  console.log('Connection to database is made');
}).on('error', function(error){
  console.log('Connection error:', error)
});
//App setup
const dir = path.join(__dirname, 'uploads');
const public = path.join(__dirname, 'public');
app.use(express.static(dir));
app.use(express.static(public));
app.use(express.static(path.join(__dirname, 'html')))
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'html')));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
router(app);
app.use(function (req, res, next) {
 res.redirect('/')
});


//Server setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
