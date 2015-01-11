var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var post = require("./routes/post");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/stage2', post.stage2);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//connect tennis_data of localhost
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/Tennis_Data');

//make Tennis_Data Schema
var TennisSchema = new mongoose.Schema({
    player:{
      player1:String,
      player2:String,
      player3:String,
      player4:String
    },
    point:{
      for(var i=0;i<16;i++){
        point[i]:Number
      }
    }
    pointext:{
      for(var i=0;i<6;i++){
        pointext[i]:String
      }
    }
});

//generate model from schema
var data = db.model('data',TennisSchema);



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
//make model from Schema
var Player = db.model('player',PlayerSchema);

module.exports = app;
app.listen(3000);
console.log('tennis server start');
