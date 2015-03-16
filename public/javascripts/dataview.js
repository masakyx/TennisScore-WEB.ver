jQuery(function($){
    "use strict";
    var socket = io.connect('http://'+location.host + '/');
  $(document).ready(function(){
      var parameter;
      parameter = location.search;
      parameter = parameter.substring(1,parameter.length);
      console.log(parameter);
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

    var username1=$("#username1");
    var username2=$("#username2");
    var show=$("#show");

    socket.emit("dataview-create",{dataname:parameter});
    socket.on("dataview-create",function(data){
        console.log(data.user+"のデータが"+data.count+"回閲覧されました");
        username1.text(data.player.player1+" / "+data.player.player2);
        username2.text(data.player.player3+" / "+data.player.player4);
        show.text("閲覧数："+data.count+"回");
   //------------------------------------------------------------------------     
       fp1.text(data.point.point1+"/"+(data.point.point1+data.point.spoint1));
       bp1.text(data.point.spoint1+"/"+(data.point.point1+data.point.spoint1));
       ffs1.text(data.point.point24+"/"+data.point.point22);
       bfs1.text(data.point.spoint24+"/"+data.point.spoint22);
       fss1.text(data.point.point25+"/"+data.point.point23);
       bss1.text(data.point.spoint25+"/"+data.point.spoint23);
       fdf1.text(data.point.point8+"/"+data.point.point22);
       bdf1.text(data.point.spoint8+"/"+data.point.spoint22);
       fsa1.text(data.point.point6+"/"+(data.point.point22+data.point.point23));
       bsa1.text(data.point.spoint6+"/"+(data.point.spoint22+data.point.spoint23));
       frm1.text(data.point.point11+"/"+data.point.point27);
       brm1.text(data.point.spoint11+"/"+data.point.spoint27);
       fra1.text(data.point.point9+"/"+data.point.point27);
       bra1.text(data.point.spoint9+"/"+data.point.spoint27);
       fws1.text(data.point.point14+"/"+data.point.point2);
       bws1.text(data.point.point15+"/"+data.point.point2);
       fbo1.text(data.point.point16+"/"+data.point.point4);
       bbo1.text(data.point.point17+"/"+data.point.point4);
       fso1.text(data.point.point18+"/"+data.point.point3);
       bso1.text(data.point.point19+"/"+data.point.point3);
       fnet1.text(data.point.point20+"/"+data.point.point5);
       bnet1.text(data.point.point21+"/"+data.point.point5);
//-------------------------------------------------------
       fp2.text(data.point.tpoint1+"/"+(data.point.tpoint1+data.point.apoint1));
       bp2.text(data.point.apoint1+"/"+(data.point.tpoint1+data.point.apoint1));
       ffs2.text(data.point.tpoint24+"/"+data.point.tpoint22);
       bfs2.text(data.point.apoint24+"/"+data.point.apoint22);
       fss2.text(data.point.tpoint25+"/"+data.point.tpoint23);
       bss2.text(data.point.apoint25+"/"+data.point.apoint23);
       fdf2.text(data.point.tpoint8+"/"+data.point.tpoint22);
       bdf2.text(data.point.apoint8+"/"+data.point.apoint22);
       fsa2.text(data.point.tpoint6+"/"+(data.point.tpoint22+data.point.tpoint23));
       bsa2.text(data.point.apoint6+"/"+(data.point.apoint22+data.point.apoint23));
       frm2.text(data.point.tpoint11+"/"+data.point.tpoint27);
       brm2.text(data.point.apoint11+"/"+data.point.apoint27);
       fra2.text(data.point.tpoint9+"/"+data.point.tpoint27);
       bra2.text(data.point.apoint9+"/"+data.point.apoint27);
       fws2.text(data.point.tpoint14+"/"+data.point.tpoint2);
       bws2.text(data.point.tpoint15+"/"+data.point.tpoint2);
       fbo2.text(data.point.tpoint16+"/"+data.point.tpoint4);
       bbo2.text(data.point.tpoint17+"/"+data.point.tpoint4);
       fso2.text(data.point.tpoint18+"/"+data.point.tpoint3);
       bso2.text(data.point.tpoint19+"/"+data.point.tpoint3);
       fnet2.text(data.point.tpoint20+"/"+data.point.tpoint5);
       bnet2.text(data.point.tpoint21+"/"+data.point.tpoint5);
    });
  });
});
