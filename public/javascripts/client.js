var user = 0;
jQuery(function($){
    "use strict";
    var socket = io.connect('http://' + location.host + '/');
//    var id;
    //creat NewScore add html
  socket.on('create',function(tennisData){
      tennisData.forEach(function(data){
          if(data.real == "unreal"){
          }else if(data.real == "real"){
         // socket.join(data.room.creater);
            console.log("create of" + data._id + "!!!");
            creatTennis(data);
            //        console.log(id);
            }
        });
    });
    //ユーザーの識別（時間をつかう）
    $(document).ready(function(){
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var day = time.getDate();
        var ji = time.getHours();
        var hun = time.getMinutes();
        var byo = time.getSeconds();

        var tennisData ={
           player:{
              player1:"player1",
              player2:"player2",
              player3:"player3",
              player4:"player4"
            },
           point:{
              point1:0,
              point2:0,
              point3:0,
              point4:0,
              point5:0,
              point6:0,
              point7:0,
              point8:0,
              point9:0,
              point10:0,
              point11:0,
              point12:0,
              point13:0,
              point14:0,
              point15:0,
              point16:0,
              point17:0,
              point18:0,
              point19:0,
              point20:0,
              point21:0,
              point22:0,
              point23:0,
              point24:0,
              point25:0,
              point26:0,
              point27:0,
              spoint1:0,
              spoint2:0,
              spoint3:0,
              spoint4:0,
              spoint5:0,
              spoint6:0,
              spoint7:0,
              spoint8:0,
              spoint9:0,
              spoint10:0,
              spoint11:0,
              spoint12:0,
              spoint13:0,
              spoint14:0,
              spoint15:0,
              spoint16:0,
              spoint17:0,
              spoint18:0,
              spoint19:0,
              spoint20:0,
              spoint21:0,
              spoint22:0,
              spoint23:0,
              spoint24:0,
              spoint25:0,
              spoint26:0,
              spoint27:0,
              tpoint1:0,
              tpoint2:0,
              tpoint3:0,
              tpoint4:0,
              tpoint5:0,
              tpoint6:0,
              tpoint7:0,
              tpoint8:0,
              tpoint9:0,
              tpoint10:0,
              tpoint11:0,
              tpoint12:0,
              tpoint13:0,
              tpoint14:0,
              tpoint15:0,
              tpoint16:0,
              tpoint17:0,
              tpoint18:0,
              tpoint19:0,
              tpoint20:0,
              tpoint21:0,
              tpoint22:0,
              tpoint23:0,
              tpoint24:0,
              tpoint25:0,
              tpoint26:0,
              tpoint27:0,
              apoint1:0,
              apoint2:0,
              apoint3:0,
              apoint4:0,
              apoint5:0,
              apoint6:0,
              apoint7:0,
              apoint8:0,
              apoint9:0,
              apoint10:0,
              apoint11:0,
              apoint12:0,
              apoint13:0,
              apoint14:0,
              apoint15:0,
              apoint16:0,
              apoint17:0,
              apoint18:0,
              apoint19:0,
              apoint20:0,
              apoint21:0,
              apoint22:0,
              apoint23:0,
              apoint24:0,
              apoint25:0,
              apoint26:0,
              apoint27:0
            },
            pointext:{
                pointtext1:"score1",
                pointtext2:"score2",
                pointtext3:"gamest1",
                pointtext4:"gamest2",
                pointtext5:"setst1",
                pointtext6:"setst2"
            },
            room:{
              creater:"NO Name"
            },
            time:{
              year:year,
              month:month,
              day:day,
              ji:ji,
              hun:hun,
              byo:byo
            },
            user:"a"+year+"_"+month+"_"+day+"_"+ji+"_"+hun+"_"+byo,
          real:"real"
          };
          socket.emit('create',tennisData);
      user ="a"+year+"_"+month+"_"+day+"_"+ji+"_"+hun+"_"+byo;
      console.log("ユーザーは：" + user);
    });
//---------------------stage2-javascriptj-----------------------------------
    //when User pushed create button ,Server send creat event
      //make html from tennisData
       //  var id = tennisData._id;
        
      //start big change
      var creatTennis = function(tennisData){
        var id = tennisData._id;
		    //var old = $('#'+id);
		    //if(old.length !== 0){
			   // return;
		    //}
        $(".leftbt,.rightbt").click(function(){
            console.log("pointupdate");
            var uppoint = {
              point1:p1f.point,
              point2:p1f.win,
              point3:p1f.side,
              point4:p1f.back,
              point5:p1f.net,
              point6:p1f.serviceace,
              point7:p1f.fault,
              point8:p1f.doublefault,
              point9:p1f.returnace,
              point10:p1f.returnace,
              point11:p1f.returnmiss,
              point12:p1f.spoint,
              point13:p1f.bpoint,
              point14:p1f.swin,
              point15:p1f.bwin,
              point16:p1f.sback,
              point17:p1f.bback,
              point18:p1f.sside,
              point19:p1f.bside,
              point20:p1f.snet,
              point21:p1f.bnet,
              point22:p1f.fserve,
              point23:p1f.sserve,
              point24:p1f.fservein,
              point25:p1f.sservein,
              point26:p1f.returnin,
              point27:p1f.allreturn,
              spoint1:p1b.point,
              spoint2:p1b.win,
              spoint3:p1b.side,
              spoint4:p1b.back,
              spoint5:p1b.net,
              spoint6:p1b.serviceace,
              spoint7:p1b.fault,
              spoint8:p1b.doublefault,
              spoint9:p1b.returnace,
              spoint10:p1b.returnace,
              spoint11:p1b.returnmiss,
              spoint12:p1b.spoint,
              spoint13:p1b.bpoint,
              spoint14:p1b.swin,
              spoint15:p1b.bwin,
              spoint16:p1b.sback,
              spoint17:p1b.bback,
              spoint18:p1b.sside,
              spoint19:p1b.bside,
              spoint20:p1b.snet,
              spoint21:p1b.bnet,
              spoint22:p1b.fserve,
              spoint23:p1b.sserve,
              spoint24:p1b.fservein,
              spoint25:p1b.sservein,
              spoint26:p1b.returnin,
              spoint27:p1b.allreturn,
              tpoint1:p2f.point,
              tpoint2:p2f.win,
              tpoint3:p2f.side,
              tpoint4:p2f.back,
              tpoint5:p2f.net,
              tpoint6:p2f.serviceace,
              tpoint7:p2f.fault,
              tpoint8:p2f.doublefault,
              tpoint9:p2f.returnace,
              tpoint10:p2f.returnace,
              tpoint11:p2f.returnmiss,
              tpoint12:p2f.spoint,
              tpoint13:p2f.bpoint,
              tpoint14:p2f.swin,
              tpoint15:p2f.bwin,
              tpoint16:p2f.sback,
              tpoint17:p2f.bback,
              tpoint18:p2f.sside,
              tpoint19:p2f.bside,
              tpoint20:p2f.snet,
              tpoint21:p2f.bnet,
              tpoint22:p2f.fserve,
              tpoint23:p2f.sserve,
              tpoint24:p2f.fservein,
              tpoint25:p2f.sservein,
              tpoint26:p2f.returnin,
              tpoint27:p2f.allreturn,
              apoint1:p2b.point,
              apoint2:p2b.win,
              apoint3:p2b.side,
              apoint4:p2b.back,
              apoint5:p2b.net,
              apoint6:p2b.serviceace,
              apoint7:p2b.fault,
              apoint8:p2b.doublefault,
              apoint9:p2b.returnace,
              apoint10:p2b.returnace,
              apoint11:p2b.returnmiss,
              apoint12:p2b.spoint,
              apoint13:p2b.bpoint,
              apoint14:p2b.swin,
              apoint15:p2b.bwin,
              apoint16:p2b.sback,
              apoint17:p2b.bback,       
              apoint18:p2b.sside,
              apoint19:p2b.bside,
              apoint20:p2b.snet,
              apoint21:p2b.bnet,
              apoint22:p2b.fserve,
              apoint23:p2b.sserve,
              apoint24:p2b.fservein,
              apoint25:p2b.sservein,
              apoint26:p2b.returnin,
              apoint27:p2b.allreturn
          };
          var uptext = {
             pointtext1:$("#score1").text(),
             pointtext2:$("#score2").text(),
             pointtext3:$("#gamest1").text(),   
             pointtext4:$("#gamest2").text(),
             pointtext5:$("#setst1").text(),
             pointtext6:$("#setst2").text()
           };
           socket.emit('point-update',{_id:id,username:user,point:uppoint});
           socket.emit('pointext-update',{_id:id,username:user,pointext:uptext});
          //socket.broadcast.to(tennisData.room.creater).emit('point-update',{_id:id,point:uppoint});
          //socket.broadcast.to(tennisData.room.creater).emit('pointext-update',{_id:id,pointext:uptext});
      });
      $('input[name="gametype"]').click(function(){
          var upplayer = {
              player1:$("#usn1").val(),
              player2:$("#usn2").val(),
              player3:$("#usn3").val(),
              player4:$("#usn4").val()
            };
          var room ={
            creater:$("#cname").val()
          };
          socket.emit('player-update',{_id:id,username:user,player:upplayer,room:room});
          //socket.broadcast.to(tennisData.room.creater).emit('player-update',{_id:id,player:upplayer});
      })
      var $player = $(".player");
      $player.keyup(function(){
          var upplayer = {
              player1:$("#usn1").val(),
              player2:$("#usn2").val(),
              player3:$("#usn3").val(),
              player4:$("#usn4").val()
            };
            var room = {
              creater:$("#cname").val()
            };
            socket.emit('player-update',{_id:id,username:user,player:upplayer,room:room});
         // socket.broadcast.to(tennisData.room.creater).emit('player-update',{_id:id,player:upplayer});
      });
    };
  // };
//-----viewer-javascript----------------------------------------------------- 
});
