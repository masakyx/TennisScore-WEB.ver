jQuery(function($){
    "use strict"
    window.onload = function(){
      $(function(){
        $("#loading").fadeOut();
        $("#container").fadeIn();
      });
    }
  var socket = io.connect(location.host + '/');
  socket.on('allchat',function(data){
    createchat(data);
  });

  socket.on('create-chat',function(chatdata){
      chatdata.forEach(function(data){
        if(data.category == "mes"){
          createchat(data);
        }else if(data.category == "infodata"){
          creategamedatachat(data);
        }
        console.log("メッセージを更新したよ");
      });
  });
  socket.on('finish-gamedata-chat',function(data){
      console.log("試合報告がきました");
      creategamedatachat(data);
  });


  var aa1 = 0;
  var aa2 = 0;

  $("#send").click(function(){
      console.log("メッセージを送信");
      if($("#chat-name").val() == "" || $("#chat-name").val() == "名前"){
        window.alert("名前を入力してください");
      }else if($("#chat-comment").val() == "" || $("#chat-comment").val() == "コメント"){
        window.alert("コメントを入力してください");
      }else{
        var time = new Date();
        var year = time.getFullYear(),
            month = time.getMonth() + 1,
            day = time.getDate(),
            ji = time.getHours(),
            hun = time.getMinutes(),
            byo = time.getSeconds(),
            alltime = year+"年"+month+"月"+day+"日"+ji+"時"+hun+"分"+byo+"秒";
        var name = $("#chat-name").val(),
            message = $("#chat-comment").val();
        $("#chat-comment").val("");
        var category = "mes";

        socket.emit("viewer-chat",{name:name,message:message,time:alltime,year:year,month:month,day:day,category:category});
      }
  });

  $("#chat-name").click(function(){
    aa1++;
    if(aa1 == 1){
      $("#chat-name").val("");
    }
  });
  $("#chat-comment").click(function(){
    aa2++;
    if(aa2 == 1){
      $("#chat-comment").val("");
    }
  });

  socket.on('viewer-chat',function(data){
    createchat(data);
  })
var createchat = function(data){
  var id = data._id;
  var old = $('#'+id);
  if(old.length !== 0){return;}
  var element = 
  $('<div class="tennis" />')
  .attr('id',id)
  .append('<li>'+data.time+'<br>'+data.name+"さん："+data.message+'</li>'+'<hr>')

  element.hide().fadeIn();
  $("#mlist").prepend(element);
  console.log("メッセージが追加されました");
 };

  var creategamedatachat = function(data){
     var id = data._id;
     var old = $('#'+id);
     if(old.length !== 0){
       return;
     }
     var element;
     if(data.gamedata.gamep3==0 && data.gamedata.gamep4==0){
        console.log("ゲーム数は1ですよ");
        element = 
        $('<div class="tennis" />')
        .attr('id',id)
        .append('<li>'+data.time+'<br>'+data.name+'：勝者は'+data.winner+"です。"+'<br>'+"プレイヤー***"+data.username1+"---"+data.username2+"<br>"+"セットカウント"+"***"+data.gamedata.setcount1+"---"+data.gamedata.setcount2+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep1+"---"+data.gamedata.gamep2+"***"+'</li>'+'<hr>');
        element.hide().fadeIn();
        $("#mlist").prepend(element);
      }else if(data.gamedata.gamep5 ==0 && data.gamedata.gamep6 == 0){
        console.log("ゲーム数は２ですよ");
        element = 
        $('<div class="tennis" />')
        .attr('id',id)
        .append('<li>'+data.time+'<br>'+data.name+'：勝者は'+data.winner+"です。"+'<br>'+"プレイヤー***"+data.username1+"---"+data.username2+"<br>"+"セットカウント"+"***"+data.gamedata.setcount1+"---"+data.gamedata.setcount2+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep1+"---"+data.gamedata.gamep2+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep3+"---"+data.gamedata.gamep4+"***"+'</li>'+'<hr>')
        element.hide().fadeIn();
        $("#mlist").prepend(element);
      
      }else if(data.gamedata.gamep7==0 && data.gamedata.gamep8==0){
        console.log("ゲーム数は３ですよ");
        element = 
        $('<div class="tennis" />')
        .attr('id',id)
        .append('<li>'+data.time+'<br>'+data.name+'：勝者は'+data.winner+"です。"+'<br>'+"プレイヤー***"+data.username1+"---"+data.username2+"<br>"+"セットカウント"+"***"+data.gamedata.setcount1+"---"+data.gamedata.setcount2+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep1+"---"+data.gamedata.gamep2+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep3+"---"+data.gamedata.gamep4+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep5+"---"+data.gamedata.gamep6+"***"+'</li>'+'<hr>')
        element.hide().fadeIn();
        $("#mlist").prepend(element);
      }else if(data.gamedata.gamep9==0 && data.gamedata.gamep10==0){
        console.log("ゲーム数は４です");
        element = 
        $('<div class="tennis" />')
        .attr('id',id)
        .append('<li>'+data.time+'<br>'+data.name+'：勝者は'+data.winner+"です。"+'<br>'+"プレイヤー***"+data.username1+"---"+data.username2+"<br>"+"セットカウント"+"***"+data.gamedata.setcount1+"---"+data.gamedata.setcount2+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep1+"---"+data.gamedata.gamep2+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep3+"---"+data.gamedata.gamep4+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep5+"---"+data.gamedata.gamep6+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep7+"---"+data.gamedata.gamep8+"***"+'</li>'+'<hr>')
        element.hide().fadeIn();
        $("#mlist").prepend(element);
      }else{
        console.log("ゲーム数は５ですよ");
        element = 
        $('<div class="tennis" />')
        .attr('id',id)
        .append('<li>'+data.time+'<br>'+data.name+'：勝者は'+data.winner+"です。"+'<br>'+"プレイヤー***"+data.username1+"---"+data.username2+"<br>"+"セットカウント"+"***"+data.gamedata.setcount1+"---"+data.gamedata.setcount2+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep1+"---"+data.gamedata.gamep2+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep3+"---"+data.gamedata.gamep4+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep5+"---"+data.gamedata.gamep6+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep7+"---"+data.gamedata.gamep8+"***"+"<br>"+"ゲームカウント"+"***"+data.gamedata.gamep9+"---"+data.gamedata.gamep10+"***"+'</li>'+'<hr>')
        element.hide().fadeIn();
        $("#mlist").prepend(element);
      }


  };

});
