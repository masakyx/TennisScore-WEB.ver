jQuery(function($){
    "use strict";
    var socket = io.connect('http://' + location.host + '/');

    var cname = $("#cname");
    var create = $("#create");
    create.click(function(){
      
      if(cname.val() == "" || cname.val() == "作成者の名前を入力してください"){
        window.alert("作者名を入力してください");
      }else{
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
              creater:$('#cname').val()
            },
            time:{
              year:year,
              month:month,
              day:day,
              ji:ji,
              hun:hun,
              byo:byo
            }
          };
          socket.emit('create',tennisData);
          location.href = "/stage2";
      };
    });
});
