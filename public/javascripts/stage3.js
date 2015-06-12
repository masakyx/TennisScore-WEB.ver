jQuery(function($){
      "use strict";
    window.onload = function(){
     $(function(){
        $("#loading").fadeOut();
        $("#container").fadeIn();
      });
    }
    //var socket = io.connect('http://'+location.host + '/');
    var socket = io.connect(location.host + '/');
    //createイベントでデータを追加する。
    socket.on('create',function(tennisData){
        tennisData.forEach(function(data){
          if(data.real == "real"){
          }else if(data.real == "unreal"){
            createData(data);
            console.log(data.user + "のゲームデータを追加しました。")
          }
      });
  });
      var createData = function(tennisData){
        var id = tennisData.user;
        var old = $('#'+id);
        if(old.length !==0){
          return;
        }
        var element =
        $('<div class="tennis" />')
        .attr('id',id)                             
        .append($('<li><a href=/dataview?'+id+' >'+tennisData.player.player1+" : "+tennisData.player.player2+" VS "+tennisData.player.player3+" : "+tennisData.player.player4+"[日付："+tennisData.time.year+"年"+tennisData.time.month+"月"+tennisData.time.day+"日"+tennisData.time.ji+"時"+tennisData.time.hun+"分"+tennisData.time.byo+"秒]"+'</a></li>'))
        element.hide().fadeIn();
        $('#field').append(element);
      };
    });













    /* $(document).ready(function(){
//---変数定義------------------------------------------------------------
var fp1=$("#fpoint1"),bp1=$("#bpoint1"),fp2=$("#fpoint2"),bp2=$("#bpoint2");
var ffs1=$("#ffs1"),bfs1=$("#bfs1"),ffs2=$("#ffs2"),bfs2=$("#bfs2");
var fss1=$("#fss1"),bss1=$("#bss1"),fss2=$("#fss2"),bss2=$("#bss2");
var fdf1=$("#fdf1"),bdf1=$("#bdf1"),fdf2=$("#fdf2"),bdf2=$("#bdf2");
var fsa1=$("#fsa1"),bsa1=$("#bsa1"),fsa2=$("#fsa2"),bsa2=$("#bsa2");
var frm1=$("#frm1"),brm1=$("#brm1"),frm2=$("#frm2"),brm2=$("#brm2");
var fra1=$("#fra1"),bra1=$("#bra1"),fra2=$("#fra2"),bra2=$("#bra2");
var fws1=$("#fws1"),bws1=$("#bws1"),fws2=$("#fws2"),bws2=$("#bws2");
var fbo1=$("#fbo1"),bbo1=$("#boo1"),fbo2=$("#fbo2"),bbo2=$("#bbo2");
var fso1=$("#fso1"),bso1=$("#bso1"),fso2=$("#fso2"),bso2=$("#bso2");
var fnet1=$("#fnet1"),bnet1=$("#bnet1"),fnet2=$("fnet2"),bnet2=$("#bnet2");

//--代入-------------------------------------------------------------------
fp1.text(p1f.point);
 });  */
