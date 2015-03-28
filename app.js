"use strict"
var debug = require('debug')('tennis-score');
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
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/viewer',post.viewer);
app.use('/stage2',post.stage2);
app.use('/stage3',post.stage3);
app.use('/dataview',post.dataview);

var server = http.createServer(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//connect tennis_data of localhost 3000
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/Tennis_Data');

//make chat Schema
var ChatSchema = new mongoose.Schema({
    name:String,
    message:String,
    time:String,
    year:Number,
    month:Number,
    day:Number
});


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
      point16:Number,
      point17:Number,
      point18:Number,
      point19:Number,
      point20:Number,
      point21:Number,
      point22:Number,
      point23:Number,
      point24:Number,
      point25:Number,
      point26:Number,
      point27:Number,
      spoint1:Number,
      spoint2:Number,
      spoint3:Number,
      spoint4:Number,
      spoint5:Number,
      spoint6:Number,
      spoint7:Number,
      spoint8:Number,
      spoint9:Number,
      spoint10:Number,
      spoint11:Number,
      spoint12:Number,
      spoint13:Number,
      spoint14:Number,
      spoint15:Number,
      spoint16:Number,
      spoint17:Number,
      spoint18:Number,
      spoint19:Number,
      spoint20:Number,
      spoint21:Number,
      spoint22:Number,
      spoint23:Number,
      spoint24:Number,
      spoint25:Number,
      spoint26:Number,
      spoint27:Number,
      tpoint1:Number,
      tpoint2:Number,
      tpoint3:Number,
      tpoint4:Number,
      tpoint5:Number,
      tpoint6:Number,
      tpoint7:Number,
      tpoint8:Number,
      tpoint9:Number,
      tpoint10:Number,
      tpoint11:Number,
      tpoint12:Number,
      tpoint13:Number,
      tpoint14:Number,
      tpoint15:Number,
      tpoint16:Number,
      tpoint17:Number,
      tpoint18:Number,
      tpoint19:Number,
      tpoint20:Number,
      tpoint21:Number,
      tpoint22:Number,
      tpoint23:Number,
      tpoint24:Number,
      tpoint25:Number,
      tpoint26:Number,
      tpoint27:Number,
      apoint1:Number,
      apoint2:Number,
      apoint3:Number,
      apoint4:Number,
      apoint5:Number,
      apoint6:Number,
      apoint7:Number,
      apoint8:Number,
      apoint9:Number,
      apoint10:Number,
      apoint11:Number,
      apoint12:Number,
      apoint13:Number,
      apoint14:Number,
      apoint15:Number,
      apoint16:Number,
      apoint17:Number,
      apoint18:Number,
      apoint19:Number,
      apoint20:Number,
      apoint21:Number,
      apoint22:Number,
      apoint23:Number,
      apoint24:Number,
      apoint25:Number,
      apoint26:Number,
      apoint27:Number,
    },
    pointext:{
      pointtext1:String,
      pointtext2:String,
      pointtext3:String,
      pointtext4:String,
      pointtext5:String,
      pointtext6:String
    },
    room:{
      creater:String
    },
    time:{
      year:String,
      month:String,
      day:String,
      ji:String,
      hun:String,
      byo:String,
      alltime:String
    },
    time1:{
      year:String,
      month:String,
      day:String,
      ji:String,
      hun:String,
      byo:String,
      alltime:String
    },
    user:String,
    real:String,
    finishtime:String,
    count:Number,
    winner:String
});

//generate model from schema)
var Tennis = db.model('tennis',TennisSchema);
var Chat = db.model('chat',ChatSchema);

//use soket.io
var io = require('socket.io').listen(server);
io.sockets.on('connection',function(socket){
    Tennis.find(function(err,items){
        if(err){cosole.log(err);}
        //接続したユーザーにテニスのデータをおくる
        socket.emit('create',items);
    });
    Chat.find(function(err,items){
      if(err){console.log(err);}
      socket.emit('create-chat',items);
    });

  //createイベントを受信した時、データベースにTennisを追加する。
  //tennisDataは上で書いた型
  socket.on('create',function(tennisData){
      //create instance from model
      var tennis = new Tennis(tennisData);
      //save to database
      tennis.save(function(err){
          if(err){return;}
          socket.broadcast.json.emit('create',[tennis]);
          socket.emit('create',[tennis]);
      });
  });
  socket.on('create-chat',function(chatdata){
    var chat = new Chat(chatdata);
    chat.save(function(err){
        if(err){return;}
        socket.emit('create-chat',[chatdata]);
    })
  });
  //テニスのスコアボタンが押された時にpointをアップデートする。
  socket.on('point-update',function(data){
      console.log("update of  " + data.username);
      //データベースからidが一致するものを探す。
      Tennis.findOne({user:data.username},function(err,tennis){
          if(err || data === null){
            console.log("データが見つかりません");
            return;}
          tennis.point = data.point;
          tennis.save();         
          console.log("save of " + data.username);
          //他のクライアントにイベントを伝えるためにbroadcastで送信する。
          socket.broadcast.json.emit('point-update',data);
      });
  });
  //PlayerNameが変更された時に更新する。
  socket.on('player-update',function(data){
      Tennis.findOne({user:data.username},function(err,tennis){
          if(err || tennis === null){return;}
          tennis.player = data.player;
          tennis.room = data.room;
          tennis.save();
          socket.broadcast.json.emit('player-update',data);
      });
  });
  //changed pointtext
  socket.on('pointext-update',function(data){
      Tennis.findOne({user:data.username},function(err,tennis){
          if(err || tennis == null){ return};
          tennis.pointext = data.pointext;
          tennis.save();
          socket.broadcast.json.emit('pointext-update',data);
      });
  });
  //remove
  socket.on('remove',function(data){
      Tennis.findOne({user:data.username},function(err,tennis){
          if(err || tennis == null){return};
          tennis.real = "unreal";
          tennis.time1 = data.time;
          tennis.finishtime = data.finish;
          tennis.winner = data.winplayer;
          tennis.save();
          socket.broadcast.json.emit('remove',tennis);
          console.log(tennis.user + "のゲーム終了 ");
    });
  });
  //databaseに詳細を表示させる
  socket.on('dataview-create',function(data){
      socket.join(data.dataname);
        Tennis.findOne({user:data.dataname},function(err,tennis){
            tennis.count = tennis.count + 1;
            tennis.save();
            console.log(tennis.user+"のデータが閲覧されました。");
            socket.emit("dataview-create",tennis);
        });
    });
    //応援コメントの表示
    socket.on('viewer-chat',function(data){
        //Chat.findOne(function(err,chatdata){
           // if(err || chatdata == null){return;};
        var chatdata = new Chat();
            chatdata.name = data.name;
            chatdata.message = data.message;
            chatdata.time = data.time;
            chatdata.year = data.year;
            chatdata.month = data.month;
            chatdata.day = data.day;
            chatdata.save();
            console.log("メッセージが追加されました");
            socket.emit('viewer-chat',chatdata);
            socket.broadcast.json.emit('viewer-chat',chatdata);
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

if(process.argv[1] == __filename){
  server.listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
  });
}
module.exports = app;
