jQuery(function($){
  "use strict"
  var socket = io.connect(location.host + '/');
  socket.on('allchat',function(data){
    createchat(data);
  });

  socket.on('create-chat',function(chatdata){
      chatdata.forEach(function(data){
        createchat(data);
        console.log("メッセージを更新したよ");
      });
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

        socket.emit("viewer-chat",{name:name,message:message,time:alltime,year:year,month:month,day:day});
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
  .append('<li>'+data.time+'<br>'+data.name+"さん："+data.message+'</li>')

  element.hide().fadeIn();
  $("#mlist").prepend(element);
  console.log("メッセージが追加されました");
 };


});
