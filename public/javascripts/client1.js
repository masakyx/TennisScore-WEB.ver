jQuery(function($){
  "use strict";
  var socket = io.connect('http://'+location.host + '/');
	//createイベントを受信した時、html上にメモを作成する。
	socket.on('create',function(tennisData){
      tennisData.forEach(function(data){
          if(data.real == "real"){
            createData(data);
          }else if(data.real == "unreal"){
            console.log(data.user + "のゲームは既に終了しています");
          }
		  });
    });
  socket.on('create-chat',function(chatdata){
      chatdata.forEach(function(data){
          var dayid = new Date();
          var yearid = dayid.getFullYear();
          var monthid = dayid.getMonth() + 1;
          var dateid = dayid.getDate();
          if(data.year == yearid && data.month == monthid && data.day == dateid){
          createchat(data);
          console.log("メッセージを更新したよ");
        }else{

        }
    });
  });


	//update-textイベントを受信した時、メモのテキストを更新する。
  socket.on('pointext-update',function(data){
      console.log("update of " + data.username);
		$('#'+data.username).find('.score1').text(data.pointext.pointtext1);
		$('#'+data.username).find('.score2').text(data.pointext.pointtext2);
		$('#'+data.username).find('.game1').text(data.pointext.pointtext3);
		$('#'+data.username).find('.game2').text(data.pointext.pointtext4);
		$('#'+data.username).find('.set1').text(data.pointext.pointtext5);
		$('#'+data.username).find('.set2').text(data.pointext.pointtext6);
	});
	//playernameが変更されたら変更する
  socket.on('player-update',function(data){
      console.log(data.username);
      $('#'+data.username).find('#creatername').text("CREATER : " + data.room.creater);
		$('#'+data.username).find('.player1').text(data.player.player1 + '/' + data.player.player2);
		$('#'+data.username).find('.player2').text(data.player.player3 + '/' + data.player.player4);
	});
	//removeイベントを受信した時、メモを削除する。
  socket.on('remove',function(data){
      removeTennis(data.user);
      console.log("ゲーム終了の表を削除します");
      window.alert(data.player.player1+' / '+data.player.player2+' VS '+data.player.player3+' / '+data.player.player4+"の試合は終了しました。勝者は＜"+data.winner+"＞です。");
  });

  var createData = function(tennisData){
    var id = tennisData.user;
    var old = $('#'+id);
    if(old.length !== 0){
      return;
    }
    
    console.log(id);

    var element =
     $('<div class = "tennis"/>')
     .attr('id',id)
     .append($('<text>' + "開始時間 : " + tennisData.time.alltime+'</text>'+'<br>' ))
     .append($('<text id="creatername">' + "CREATER : "+ tennisData.room.creater + '</text>'))
     .append($('<table border=2><tr><th></th><th align="center" class="player1">' + tennisData.player.player1 + '/' + tennisData.player.player2 + '</th><th align="center" class="player2">' + tennisData.player.player3 + '/' + tennisData.player.player4 +  '</th></tr><tr><td align="center">SET COUNT </td><td align="center" class="set1">' + tennisData.pointext.pointtext5 + '</td><td align="center" class="set2">' + tennisData.pointext.pointtext6 + '</td></tr><tr><td align="center">GAME COUNT</td><td align="center" class="game1">' + tennisData.pointext.pointtext3 + '</td><td align="center" class="game2">' + tennisData.pointext.pointtext4 + '</td></tr><tr><td align="center">SCORE</td><td align="center" class="score1">' + tennisData.pointext.pointtext1 + '</td><td align="center" class="score2">' + tennisData.pointext.pointtext2 + '</td></tr></table>'))
    element.hide().fadeIn();
    $('#field').append(element);
  
  };

	var removeTennis = function(id){
		$('#'+id).fadeOut('fast').queue(function(){
			$(this).remove();
		});
  };
  $("#send").click(function(){
      if($("#comment").val() == ""){
        window.alert("コメントを入力してください");
       } else{
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var day = time.getDate();
        var ji = time.getHours();
        var hun = time.getMinutes();
        var byo = time.getSeconds();
        var metime = year+"年"+month+"月"+day+"日"+ji+"時"+hun+"分"+byo+"秒";
        var name;
        var message;
        name = $("#chat-name").val();
        message = $("#comment").val();
        $("#comment").val("");
        socket.emit("viewer-chat",{name:name,message:message,time:metime,year:year,month:month,day:day});
      }
  });
  socket.on('viewer-chat',function(data){
      console.log("新しいメッセージきました");
      createchat(data);
  });
  var createchat = function(data){
    
    var id = data._id;
    var old = $('#'+id);
    if(old.length !== 0){
      return;
    }
    var element = 
    $('<div class="tennis" />')
    .attr('id',id)                  
    .append('<li>'+data.time+'<br>'+data.name+"さん："+data.message+'</li>')
    element.hide().fadeIn();
    $("#chat-field").append(element);
    console.log("メッセージが追加されました。");
  };

});
