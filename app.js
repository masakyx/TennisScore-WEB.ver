var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');

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

var server = http.createServer(app);

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
      point1:Number,
      point2:Number,
      point3:Number,
      point4:Number,
      point5:Number,
      point6:Number,
      point7:Number,
      point8:Number,
      point9:Number,
      point10:Number,
      point11:Number,
      point12:Number,
      point13:Number,
      point14:Number,
      point15:Number,
      point16:Number
    },
    pointext:{
      pointtext1:Number,
      pointtext2:Number,
      pointtext3:Number,
      pointtext4:Number,
      pointtext5:Number,
      pointtext6:Number
    }
});

//generate model from schema)
var Data = db.model('data',TennisSchema);

//use soket.io
var io = require('socket.io').listen(server);
io.sockets.on('connection',function(socket){
    Data.find(function(err,items){
        if(err){cosole.log(err);}
        //接続したユーザーにテニスのデータをおくる
        socket.emit('create',items);
    })
});

//createイベントを受信した時、データベースにMemoを追加する。
//tennisDataは上で書いた型
socket.on('create',function(tennisData){
    //create instance from model
    var data = new Data(tennisData);
    //save to database
    data.save(function(err){
        if(err){return;}
        socket.broadcast.json.emit('create',[data]);
        socket.emit('create',[data]);
    });
});


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
console.log('tennis server start from listening on port ' + app.get('port'));
