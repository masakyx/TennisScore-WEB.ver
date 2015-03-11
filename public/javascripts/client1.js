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
      removeTennis(data.username);
      console.log("ゲーム終了の表を削除します");
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
     .append($('<text>' + "DATE : " + tennisData.time.year + "年"+ tennisData.time.month + "月"+tennisData.time.day+"日"+tennisData.time.ji+"時"+tennisData.time.hun+"分"+tennisData.time.byo+"秒"+ '</text>'+'<br>' ))
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
});
