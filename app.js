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
//更新番号の変数

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
app.use('/readme',post.readme);
app.use('/stage4',post.stage4);

var server = http.createServer(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//connect tennis_data of localhost 3000
var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://localhost/Tennis_Data');
var db = mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/Tennis_Data');

//make chat Schema
var ChatSchema = new mongoose.Schema({
    name:String,
    message:String,
    category:String,
    time:String,
    year:Number,
    month:Number,
    day:Number,
    username1:String,
    username2:String,
    winner:String,
    gamedata:{
      place:String,
      setcount1:Number,
      setcount2:Number,
      match:Number,
      gamep1:Number,
      gamep2:Number,
      gamep3:Number,
      gamep4:Number,
      gamep5:Number,
      gamep6:Number,
      gamep7:Number,
      gamep8:Number,
      gamep9:Number,
      gamep10:Number,
      tiep1:Number,
      tiep2:Number,
      tiep3:Number,
      tiep4:Number,
      tiep5:Number,
      tiep6:Number,
      tiep7:Number,
      tiep8:Number,
      tiep9:Number,
      tiep10:Number
    }
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
    pointdata:{
      point1:Number,
      point2:Number,
      gamepoint1:Number,
      gamepoint2:Number,
      setpoint1:Number,
      setpoint2:Number
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
    winner:String,
    gamedata:{
      place:String,
      setcount1:Number,
      setcount2:Number,
      match:Number,
      gamep1:Number,
      gamep2:Number,
      gamep3:Number,
      gamep4:Number,
      gamep5:Number,
      gamep6:Number,
      gamep7:Number,
      gamep8:Number,
      gamep9:Number,
      gamep10:Number,
      tiep1:Number,
      tiep2:Number,
      tiep3:Number,
      tiep4:Number,
      tiep5:Number,
      tiep6:Number,
      tiep7:Number,
      tiep8:Number,
      tiep9:Number,
      tiep10:Number
    },
    renewnumber:Number,
    actiondataID:String,
    serveplayer:Number, //0=左 1=右
    isTiebreak:Number
});

//generate model from schema)
var Tennis = db.model('tennis',TennisSchema);
var Chat = db.model('chat',ChatSchema);
var actionTennis = db.model('actionTennis',TennisSchema);

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
      var actiontennisdata = new actionTennis(tennisData);
      actiontennisdata.save();
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
      //console.log("update of  " + data.username);
      //データベースからidが一致するものを探す。
      Tennis.findOne({user:data.username},function(err,tennis){
          if(err || data === null){
            console.log("データが見つかりません");
            return;}
          tennis.point = data.point;
          tennis.serveplayer = data.serveplayer;
          tennis.isTiebreak = data.tiebreak;
          tennis.save();         
          //console.log("save of " + data.username);
          //他のクライアントにイベントを伝えるためにbroadcastで送信する。
          socket.broadcast.json.emit('point-update',data);
      });
  });
  //***********アクションデータを毎回保存する****************************
  
  socket.on('renew-action',function(data){
      console.log("更新データの保存を行いました");
      var actiondata = new actionTennis(data.action);
      actiondata.point = data.point;
      actiondata.pointext = data.pointext;
      actiondata.player = data.player;
      actiondata.user = "action-data";
      actiondata.renewnumber = data.actionnum;
      actiondata.room = data.creater;
      actiondata.pointdata = data.pointdata;
      actiondata.serveplayer = data.serveplayer;
      actiondata.isTiebreak = data.tiebreak;
      actiondata.save();
  });
  //*********************************************************************
  //****************戻るボタン********************************************
  socket.on('tennis-back-data',function(data){
      Tennis.findOne({user:data.user},function(err,tennis){
          if(data.renew != 0 ){
            actionTennis.findOne({$and:[{actiondataID:data.user},{renewnumber:data.renew}]},function(err,actiontennis){
                console.log("前のrennwwww=="+actiontennis.renewnumber);  
                actiontennis.remove();
            });
            actionTennis.findOne({$and:[{actiondataID:data.user},{renewnumber:data.renew-1}]},function(err,actiontennis){
                console.log("serve====="+actiontennis.serveplayer+":tie===="+actiontennis.isTiebreak);
                tennis.point = actiontennis.point;
                tennis.pointext = actiontennis.pointext;
                tennis.gamedata = actiontennis.gamedata;
                tennis.serveplayer = actiontennis.serveplayer;
                tennis.isTiebreak = actiontennis.isTiebreak;
                tennis.save();
                console.log("reneww=="+actiontennis.renewnumber);
                socket.emit("tennisData-update",actiontennis);
            });
          }
      });
  });

  //*********************************************************************

  /*socket.on('point-update',function(data){
      console.log("update of  " + data.username);
      //データベースからidが一致するものを探す。
      var tennisData = new Tennis(data.oldtennis);
      tennisData.point = data.point;
      tennisData.save();
      socket.broadcast.json.emit('point-update',data);
  });
  //ボタンが押されるたびに新しいデータをつくるバージョン
  socket.on('change-old-id',function(data){
      Tennis.findOne({user:data.username},function(err,tennis){
          if(err || data === null){
            return;
          }
          tennis.user = "old";
          tennis.save();
          console.log("古いデータのidを無効にしました。");
          socket.emit("finish-change-old-id",data);
      });
  });*/

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
          tennis.serveplayer = data.serveplayer;
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
          tennis.winner = data.winner;
          tennis.gamedata = data.result;
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
        console.log("試合がはじまった報告がきましたよ");
        var chatdata = new Chat();
            chatdata.name = data.name;
            chatdata.message = data.message;
            chatdata.time = data.time;
            chatdata.year = data.year;
            chatdata.month = data.month;
            chatdata.day = data.day;
            chatdata.category = data.category;
            chatdata.save();
            //console.log("メッセージが追加されました");
            socket.emit('viewer-chat',chatdata);
            socket.broadcast.json.emit('viewer-chat',chatdata);
        });
        socket.on('finish-gamedata-chat',function(data){
            console.log("試合報告がきましたよー");
            var chatdata = new Chat();
            chatdata.category = data.category;
            chatdata.name = "*試合結果報告*";
            chatdata.time = data.time;
            chatdata.year = data.year;
            chatdata.month = data.month;
            chatdata.day = data.day;
            chatdata.winner = data.winner;
            chatdata.gamedata = data.result;
            chatdata.username1 = data.usn1;
            chatdata.username2 = data.usn2;
            chatdata.save();
            socket.emit('finish-gamedata-chat',chatdata);
            socket.broadcast.json.emit('finish-gamedata-chat',chatdata);
            
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
