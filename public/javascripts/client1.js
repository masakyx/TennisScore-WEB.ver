jQuery(function($){
  "use strinct";
  var socket = io.connect('http://'+location.host + '/');
	//createイベントを受信した時、html上にメモを作成する。
	socket.on('create',function(memoData){
		memoData.forEach(function(data){
			createData(data);
		});
  });
	//update-textイベントを受信した時、メモのテキストを更新する。
	socket.on('pointext-update',function(data){
		$('#'+data._id).find('.score1').text(data.pointtext1);
		$('#'+data._id).find('.score2').text(data.pointtext2);
		$('#'+data._id).find('.game1').text(data.pointtext3);
		$('#'+data._id).find('.game2').text(data.pointtext4);
		$('#'+data._id).find('.set1').text(data.pointtext5);
		$('#'+data._id).find('.set2').t(data.pointtext6);
	});
	//playernameが変更されたら変更する
  socket.on('player-update',function(data){
		$('#'+data._id).find('.player1').text(data.tennisData.player1 + '/' + tennisData.player2);
		$('#'+data._id).find('.player2').text(data.tennisData.player3 + '/' + tennisData.player4);
	});
	//removeイベントを受信した時、メモを削除する。
	socket.on('remove',function(data){
		removeMemo(data._id);
  });

  var createData = function(tennisData){
    var id = tennisData._id;
    var old = $('#'+id);
    if(old.length !== 0){
      return;
    }
    console.log("viewr" + id);

    var element =
      $('<div class = "tennis"/>')
      .attr('id',id)
      .append($('<h4 align="center" class="player1">' + tennisData.player.player1 + '/' + tennisData.player.player2 + '</h4>'))
      .append($('<h4 align="center" class="player2">' + tennisData.player.player3 + '/' + tennisData.player.player4 + '</h4>'))
      .append($('<h4 align="center" class="score1">' + tennisData.pointext.pointtext1 + '</h4>'))
      .append($('<h4 align="center" class="score2">' + tennisData.pointext.pointtext2 + '</h4>'))
      .append($('<h4 align="center" class="game1">' + tennisData.pointext.pointtext3 + '</h4>'))
      .append($('<h4 align="center" class="game2">' + tennisData.pointext.pointtext4 + '</h4>'))
      .append($('<h4 align="center" class="set1">' + tennisData.pointext.pointtext5 + '</h4>'))
      .append($('<h4 align="center" class="set2">' + tennisData.pointext.pointtext6 + '</h4>'))
    element.hide().fadeIn();
    $('#field').append(element);
  
  };

});
