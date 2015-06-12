var user = 0;
var renewnum = 0;
var countnum = 0;//試合状況のテキストのアクションデータ
jQuery(function($){
    "use strict";
    window.onload = function(){
      $(function(){
        $("#loading").fadeOut();
        $("#container").fadeIn();
      });
    }
    //var socket = io.connect('http://' + location.host + '/');
    var socket = io.connect(location.host + '/');
//    var id;
    //creat NewScore add html
  socket.on('create',function(tennisData){
      /*tennisData.forEach(function(data){
          if(data.real == "unreal"){
          }else if(data.real == "real"){
         // socket.join(data.room.creater);
            console.log("create of" + data._id + "!!!");
            creatTennis(data);
            //        console.log(id);
            }
      });*/
      tennisData.forEach(function(data){
          if(data.user == user){
            creatTennis(data);
          }
      });
    });
    var firsttennisData;
    var countnumData;
    //ユーザーの識別（時間をつかう）
    $(document).ready(function(){
        var runsu = Math.random();
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var day = time.getDate();
        var ji = time.getHours();
        var hun = time.getMinutes();
        var byo = time.getSeconds();

        firsttennisData ={
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
                pointtext1:"0",
                pointtext2:"0",
                pointtext3:"0",
                pointtext4:"0",
                pointtext5:"0",
                pointtext6:"0"
            },
            pointdata:{
              point1:0,
              point2:0,
              gamepoint1:0,
              gamepoint2:0,
              setpoint1:0,
              setpoint2:0
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
              byo:byo,
              alltime:year+"年"+month+"月"+day+"日"+ji+"時"+hun+"分"+byo+"秒"
            },
            time1:{
              year:"0",
              month:"0",
              day:"0",
              ji:"0",
              hun:"0",
              byo:"0",
              alltime:"0"
            },
            user:"a"+year+"_"+month+"_"+day+"_"+ji+"_"+hun+"_"+byo,
            real:"real",
            finishtime:"0",
            count:0,
            winner:"途中で終わりました",
            gamedata:{
              place:"場所",
              setcount1:0,
              setcount2:0,
              match:0,
              gamep1:0,
              gamep2:0,
              gamep3:0,
              gamep4:0,
              gamep5:0,
              gamep6:0,
              gamep7:0,
              gamep8:0,
              gamep9:0,
              gamep10:0,
              tiep1:0,
              tiep2:0,
              tiep3:0,
              tiep4:0,
              tiep5:0,
              tiep6:0,
              tiep7:0,
              tiep8:0,
              tiep9:0,
              tiep10:0
            },
            renewnumber:0,
            actiondataID:"a"+year+"_"+month+"_"+day+"_"+ji+"_"+hun+"_"+byo,
            serveplayer:0,
            isTiebreak:0,
            foreback:0
          };
          var infotime = year+"年"+month+"月"+day+"日"+ji+"時"+hun+"分"+byo+"秒";
          socket.emit('create-pointtextdata',countnumData);
          socket.emit('create',firsttennisData);
          socket.emit('viewer-chat',{name:"＊＊＊＊試合連絡＊＊＊＊",message:"試合が始まりました。",time:infotime,year:year,month:month,day:day,category:"mes"});
      user = "a"+year+"_"+month+"_"+day+"_"+ji+"_"+hun+"_"+byo,
      console.log("ユーザーは：" + user);
    });
//---------------------stage2-javascriptj-----------------------------------
    //when User pushed create button ,Server send creat event
      //make html from tennisData
       //  var id = tennisData._id;
        
      //start big change
      var creatTennis = function(tennisData){
        var id = tennisData._id;
        $("#serviceace,#returnace,#win1,#win2,#side1,#side2,#back1,#back2,#net1,#net2").click(function(){
            PointUpdata();
        });
        $("#fault").click(function(){
            if($("#fault").val() == "Fault" || $("#fault").val() == "Return Miss"){
              PointUpdata();
            }
        });
        $("#rm").click(function(){
          if($("#rm").val() == "Fault" || $("#rm").val() == "Return Miss"){
            PointUpdata();
          }
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
      });
    };
  // };
  //-----viewer-javascript-----------------------------------------------------
  function PointUpdata(){
            console.log("pointupdate");
            console.log("server==="+server);
            var uppoint = {
              point1:p1f.point,
              point2:p1.win,
              point3:p1.side,
              point4:p1.back,
              point5:p1.net,
              point6:p1f.serviceace,
              point7:p1f.fault,
              point8:p1f.doublefault,
              point9:p1f.returnace,
              point10:p1f.returnace,
              point11:p1f.returnmiss,
              point12:p1f.spoint,
              point13:p1f.bpoint,
              point14:p1.swin,
              point15:p1.bwin,
              point16:p1.sback,
              point17:p1.bback,
              point18:p1.sside,
              point19:p1.bside,
              point20:p1.snet,
              point21:p1.bnet,
              point22:p1f.fserve,
              point23:p1f.sserve,
              point24:p1f.fservein,
              point25:p1f.sservein,
              point26:p1f.returnin,
              point27:p1f.allreturn,
              spoint1:p1b.point,
              spoint2:p1.win,
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
              tpoint2:p2.win,
              tpoint3:p2.side,
              tpoint4:p2.back,
              tpoint5:p2.net,
              tpoint6:p2f.serviceace,
              tpoint7:p2f.fault,
              tpoint8:p2f.doublefault,
              tpoint9:p2f.returnace,
              tpoint10:p2f.returnace,
              tpoint11:p2f.returnmiss,
              tpoint12:p2f.spoint,
              tpoint13:p2f.bpoint,
              tpoint14:p2.swin,
              tpoint15:p2.bwin,
              tpoint16:p2.sback,
              tpoint17:p2.bback,
              tpoint18:p2.sside,
              tpoint19:p2.bside,
              tpoint20:p2.snet,
              tpoint21:p2.bnet,
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
           var playerdata = {
                player1:$("#usn1").val(),
                player2:$("#usn2").val(),
                player3:$("#usn3").val(),
                player4:$("#usn4").val()
            };
            var room = {
              creater:$("#cname").val()
            };
            var pointdata = {
                point1:point1,
                point2:point2,
                gamepoint1:gamepoint1,
                gamepoint2:gamepoint2,
                setpoint1:setpoint1,
                setpoint2:setpoint2
            };

            renewnum++;
            console.log("今のrenewnumは！"+renewnum);
          socket.emit('renew-action',{action:firsttennisData,point:uppoint,pointext:uptext,player:playerdata,actionnum:renewnum,creater:room,pointdata:pointdata,serveplayer:server,tiebreak:isTiebreak,foreback:foreback});
          socket.emit('point-update',{username:user,point:uppoint,serveplayer:server,tiebreak:isTiebreak});
          socket.emit('pointext-update',{username:user,pointext:uptext,serveplayer:server});
  }
});
