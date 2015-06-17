//変数定義
var point1 = 0;
var point2 = 0;
var gamepoint1 = 0;
var gamepoint2 = 0;
var setpoint1 = 0;
var setpoint2 = 0;
var setcount = 1;
var isTiebreak = 0;
var isTiebreakpoint = 0;
var strbo1 = 0;
var strbo2 = 0;  //0=stroke 1=bolay
var server = 0; //0=server=player1 1=server=player2
var foreback = 0; //0=fore 1=back
var is_note = true;
var winner = "no";
var timer = 0;
var savegamepoint = new Array(0,0,0,0,0,0,0,0,0,0);
var savetiebreak = new Array(0,0,0,0,0,0,0,0,0,0);
var savetiepoint = new Array(0,0);
var savesetpoint = new Array(0,0);
var savecount = 0;
var finserve = 0;
//ID取得-----------------------------------------------------------------
var score1 = $("#score1");
var score2 = $("#score2");
var gamest1 = $("#gamest1");
var gamest2 = $("#gamest2");
var setst1 = $("#setst1");
var setst2 = $("#setst2");
var service = $("#service");
var returnin = $("#returnin");
var serviceace = $("#serviceace");
var returnace = $("#returnace");
var fault = $("#fault");
var rm = $("#rm");                                                        
var win1 = $("#win1");
var win2 = $("#win2");
var side1 = $("#side1");
var side2 = $("#side2");
var back1 = $("#back1");
var back2 = $("#back2");
var net1 = $("#net1");
var net2 = $("#net2");
var set1 = $("#set1");
var set3 = $("#set3");
var set5 = $("#set5");
var sercha = $("#schange");
//------------------------------------------------------------------------
var socket = io.connect('http://'+location.host+'/');
jQuery(function($){
   StrBolay();
   sercha.click(function(){
     if(server == 0){
       server = 1;
     }else if(server == 1){
       server = 0;
     }
     ServeChange(server);
  });
  //--------------------timer処理----------------------------------------
   setInterval(function(){
      timer++;
      console.log(timer);
      if(timer == 700){
          location.href = "/";
          console.log("制限時間を超えました");
      } 
  },5000);
   
   //-------------------------------------------------------------------
   $("#serviceace,#win1,#side2,#back2,#net2").click(function(){
     point1++;
     ClickPoint(score1,point1);
   });
   //-------------------------------------------------------------------
   $("#returnace,#win2,#side1,#back1,#net1").click(function(){
     point2++;
     ClickPoint(score2,point2);
   });
   //------------------------------------------------------------------
   fault.click(function(){
      if(server == 0 && fault.val() != "Return Miss"){
       if(fault.val() == "Double Fault"){
         point2++;
         ClickPoint(score2,point2);
       }
     }else if(server == 1){
       point2++;
       ClickPoint(score2,point2);
     }
   });
   //---;--------------------------------------------------------------
   rm.click(function(){
      if(server == 1 && rm.val() != "Return Miss"){
       if(rm.val() == "Double Fault"){
         point1++;
         ClickPoint(score1,point1);
       }else{
       }
     }else if(server == 0){
       point1++;
       ClickPoint(score1,point1);
     }
   });
   //--------------------------------------------------------------------
   $(".leftbt,.rightbt").click(function(){
      if((point1+point2)%2 == 0){
        foreback = 0;
      }else{
        foreback = 1;
      }
      timer = 0;
   });

});

//スコアーメソッド-------------------------------------------------------  
function ScorePoint(score,point){
     if(point == 1){
       score.text("15");
     }else if(point == 2){
       score.text("30");
     }else if(point == 3 && point1 < 3 || point == 3 && point2 < 3){
       score.text("40"); 
     }else if(point1 == 3 && point2 == 3){
       score1.text("DEUCE");
       score2.text("DEUCE");
     }else if(point1 == 3 && point2 == 4 || point1 == 4 && point2 == 3){
       if(point1 > point2){
         score1.text("Ad");
       }else if(point2 > point1){
         score2.text("Ad");
       }
     }else if(point1 == 4 && point2 == 4){
       point1 = 3; point2 = 3;
       score1.text("DEUCE"); score2.text("DEUCE");
     }else if(point1 == 3 && point2 == 5 || point1 == 5 && point2 == 3){
       if(point1 > point2){
         gamepoint1++;
         GamePoint(gamest1,gamepoint1);
       }else if(point2 > point1){
         gamepoint2++;
         GamePoint(gamest2,gamepoint2);
       }
     }else if(point1 == 4 && point2 < 3){
       gamepoint1++;
       GamePoint(gamest1,gamepoint1);
     }else if(point2 == 4 && point1 < 3){
       gamepoint2++;
       GamePoint(gamest2,gamepoint2);
     }     
    //audio();
     return 0;
}

//ゲームカウントメソッド  ------------------------------------------------
function GamePoint(gamest,gamepoint){
  openbutton();
  foreback = 0;//fore
  if(server == 0){
    server = 1;
    //finserve = 1;
  }else if(server == 1){
    server = 0;
    //finserve = 1;
  }
  ServeChange(server);

  if(gamepoint < 6 || gamepoint1 == 6 && gamepoint2 == 5 || gamepoint1 == 5 && gamepoint2 == 6 ){
    ClearPoint();
    gamest.text(gamepoint);                  
  }else if(gamepoint == 6 && gamepoint1 < 5 || gamepoint == 6 && gamepoint2 <5 || gamepoint1 == 7 && gamepoint2 == 5 || gamepoint1 == 5 && gamepoint2 == 7){
    if(gamepoint1 > gamepoint2){
      setpoint1++;
      SetPoint(setst1,setpoint1);
    }else if(gamepoint1 < gamepoint2){
      setpoint2++;
      SetPoint(setst2,setpoint2);
    }
  }else if(gamepoint1 == 6 && gamepoint2 == 6){
    isTiebreak=1;//タイブレイク　スタート
    ClearPoint();
    gamest1.text("TIE BREAK");
    gamest2.text("TIE BREAK");
  }
  return 0;
}

//セットカウントメソッド-------------------------------------------------
//セットカウントの取得
$('input[name="set"]').click(function(){
  if(set1.is(":checked")){
    setcount = 1;
  }else if(set3.is(":checked")){
    setcount = 3;
  }else if(set5.is(":checked")){
    setcount = 5;
  }
  console.log("setcount = " + setcount);
});
function SetPoint(setst,setpoint){
  //セットポイントのカウント
  //ゲームカウントの保存
  if(savecount == 0){
    savegamepoint[0] = gamepoint1;
    savegamepoint[1] = gamepoint2;
    if(isTiebreakpoint == 1){
      savetiebreak[0] = savetiepoint[0];
      savetiebreak[1] = savetiepoint[1];
    }
  }else if(savecount == 1){
    savegamepoint[2] = gamepoint1;
    savegamepoint[3] = gamepoint2;
    if(isTiebreakpoint == 1){
      savetiebreak[2] = savetiepoint[0];
      savetiebreak[3] = savetiepoint[1];
    }
  }else if(savecount == 2){
    savegamepoint[4] = gamepoint1;
    savegamepoint[5] = gamepoint2;
    if(isTiebreakpoint == 1){
      savetiebreak[4] = savetiepoint[0];
      savetiebreak[5] = savetiepoint[1];
    }
  }else if(savecount == 3){
    savegamepoint[6] = gamepoint1;
    savegamepoint[7] = gamepoint2;
    if(isTiebreakpoint == 1){
      savetiebreak[6] = savetiepoint[0];
      savetiebreak[7] = savetiepoint[1];
    }
  }else if(savecount == 4){
    savegamepoint[8] = gamepoint1;
    savegamepoint[9] = gamepoint2;
    if(isTiebreakpoint == 1){
      savetiebreak[8] = savetiepoint[0];
      savetiebreak[9] = savetiepoint[1];
    }
  }
  console.log(savegamepoint[0]+'/'+savegamepoint[1]+savegamepoint[2]+'/'+savegamepoint[3]+savegamepoint[4]+'/'+savegamepoint[5]+savegamepoint[6]+"/"+savegamepoint[7]+savegamepoint[8]+"/"+savegamepoint[9]);
  savecount++;

  ClearPoint();
  gamepoint1=0;
  gamepoint2=0;
  savetiebreak[0] = 0;
  savetiebreak[1] = 0;
  isTiebreakpoint = 0;
  gamest1.text("0");
  gamest2.text("0");
  setst.text(setpoint);
    var time1 = new Date();
    var year1 = time1.getFullYear();
    var month1 = time1.getMonth()+1;
    var day1 = time1.getDate();
    var ji1 = time1.getHours();
    var hun1 = time1.getMinutes();
    var byo1 = time1.getSeconds();
    var finishtime = year1+"年"+month1+"月"+day1+"日"+ji1+"時"+hun1+"分"+byo1+"秒";
    var uptime = {
      year:year1,
      month:month1,
      day:day1,
      ji:ji1,
      hun:hun1,
      byo:byo1,
      alltime:finishtime
    };
    var result = {
      place:"place",
      setcount1:setpoint1,
      setcount2:setpoint2,
      match:setcount,
      gamep1:savegamepoint[0],
      gamep2:savegamepoint[1],
      gamep3:savegamepoint[2],
      gamep4:savegamepoint[3],
      gamep5:savegamepoint[4],
      gamep6:savegamepoint[5],
      gamep7:savegamepoint[6],
      gamep8:savegamepoint[7],
      gamep9:savegamepoint[8],
      gamep10:savegamepoint[9],
      tiep1:savetiebreak[0],
      tiep2:savetiebreak[1],
      tiep3:savetiebreak[2],
      tiep4:savetiebreak[3],
      tiep5:savetiebreak[4],
      tiep6:savetiebreak[5],
      tiep7:savetiebreak[6],
      tiep8:savetiebreak[7],
      tiep9:savetiebreak[8],
      tiep10:savetiebreak[9]
    }
    var playername1 = $("#usn1").val() + " / "+$("#usn2").val();
    var playername2 = $("#usn3").val() + " / "+$("#usn4").val();
    var category = "infodata";
  if(setcount == 1){
    if(setpoint1 == 1 || setpoint2 == 1){
      if(setpoint1 == 1){
        winner = $("#usn1").val() + " / " + $("#usn2").val();
        console.log(winner + "が勝者です");
      }else if(setpoint2 == 1){
        winner = $("#usn3").val() + " / " + $("#usn4").val();
        console.log(winner + "が勝者です");
      }                                              
      is_note = false;                                                    
      //gamecountの送信
      socket.emit('finish-gamedata-chat',{time:finishtime,year:year1,month:month1,day:day1,result:result,usn1:playername1,usn2:playername2,winner:winner,category:category});
      window.alert("ゲーム終了です。トップページへ戻ります！！試合結果の詳細は”試合データ”をみてください！！");
      socket.emit('remove',{username:user,time:uptime,result:result,winner:winner});
      location.href = "/";
    }
  }else if(setcount == 3){
    if(setpoint1 == 2 || setpoint2 == 2){
      if(setpoint1 == 2){
        winner = $("#usn1").val() + " / " + $("#usn2").val();
        console.log(winner + "が勝者です");
      }else if(setpoint2 == 2){
        winner = $("#usn3").val() + " / " + $("#usn4").val();
        console.log(winner + "が勝者です");
      }
      is_note = false;
      socket.emit('finish-gamedata-chat',{time:finishtime,year:year1,month:month1,day:day1,result:result,usn1:playername1,usn2:playername2,winner:winner,category:category});
      window.alert("ゲーム終了です。トップページへ戻ります！！試合結果の詳細は”試合データ”をみてください！！");
      socket.emit('remove',{username:user,time:uptime,result:result,winner:winner});
      location.href = "/";
      }
    }else if(setcount == 5){
      if(setpoint1 == 3){
        winner = $("#usn1").val() + " / " + $("#usn2").val();
        console.log(winner + "が勝者です");
      }else if(setpoint2 == 3){
        winner = $("#usn3").val() + " / " + $("#usn4").val();
        console.log(winner + "が勝者です");
      }
      is_note = false;
      if(setpoint1 == 3 || setpoint2 == 3){
        socket.emit('finish-gamedata-chat',{time:finishtime,year:year1,month:month1,day:day1,result:result,usn1:playername1,usn2:playername2,winner:winner,category:category});
       window.alert("ゲーム終了です。トップページへ戻ります！！試合結果の詳細は”試合データ”をみてください！！");
       socket.emit('remove',{username:user,time:uptime,result:result,winner:winner});
        location.href = "/";
    }
  }

}

window.onbeforeunload = function(event){
if(is_note){
  event = event || window.event;
  Result();
 }
}
$("#backhome").click(function(){
  Result();
});

function Result(){
  
    var time1 = new Date();
    var year1 = time1.getFullYear();
    var month1 = time1.getMonth()+1;
    var day1 = time1.getDate();
    var ji1 = time1.getHours();
    var hun1 = time1.getMinutes();
    var byo1 = time1.getSeconds();
    var finishtime = year1+"年"+month1+"月"+day1+"日"+ji1+"時"+hun1+"分"+byo1+"秒";
    var uptime = {
      year:year1,
      month:month1,
      day:day1,
      ji:ji1,
      hun:hun1,
      byo:byo1,
      alltime:finishtime
    };
    var result = {
      place:"place",
      setcount1:setpoint1,
      setcount2:setpoint2,
      match:setcount,
      gamep1:savegamepoint[0],
      gamep2:savegamepoint[1],
      gamep3:savegamepoint[2],
      gamep4:savegamepoint[3],
      gamep5:savegamepoint[4],
      gamep6:savegamepoint[5],
      gamep7:savegamepoint[6],
      gamep8:savegamepoint[7],
      gamep9:savegamepoint[8],
      gamep10:savegamepoint[9],
      tiep1:savetiebreak[0],
      tiep2:savetiebreak[1],
      tiep3:savetiebreak[2],
      tiep4:savetiebreak[3],
      tiep5:savetiebreak[4],
      tiep6:savetiebreak[5],
      tiep7:savetiebreak[6],
      tiep8:savetiebreak[7],
      tiep9:savetiebreak[8],
      tiep10:savetiebreak[9]
    }
    var playername1 = $("#usn1").val() + " / "+$("#usn2").val();
    var playername2 = $("#usn3").val() + " / "+$("#usn4").val();
    var category = "infodata";
    if(winner == "no"){
      winner = "試合は途中で終了しました";
    }else{
    }
  
    socket.emit('finish-gamedata-chat',{time:finishtime,year:year1,month:month1,day:day1,result:result,usn1:playername1,usn2:playername2,winner:winner,category:category});

    socket.emit('remove',{username:user,time:uptime,result:result,winner:winner});
  }
//タイブレイクメソッド --------------------------------------------------
function TieBreak(score,point){
  isTiebreakpoint = 1;
  if((point1+point2)%2 == 1){
    if(server == 0){
      server = 1;
      //finserve = 1;
    }else if(server == 1){
      server = 0;
      //finserve = 1;
    }else{
      //finserve = 1;
    }
    ServeChange(server);
  }
  if(point < 7 || point1 > 5 && point2 > 5 && (point1-point2) == 1 || point1 > 5 && point2 > 5 && (point2-point1)==1 || point1 == point2){
    score.text(point)
  }else if(point1 > 5 && point2 > 5 && (point1-point2)==2 || point1 > 5 && point2 > 5 && (point2-point1)==2 || point1 == 7 && point2 < 6 || point1 < 6 && point2 == 7){
   // gamepoint1=0;
   //gamepoint2=0;
    savetiepoint[0] = point1;
    savetiepoint[1] = point2;
    gamest1.text("0");
    gamest2.text("0");
    isTiebreak=0; //タイブレイク終了
    if(point1 > point2){
      gamepoint1++;
      setpoint1++;
      SetPoint(setst1,setpoint1);
    }else if(point2 > point1){
      gamepoint2++;
      setpoint2++;
      SetPoint(setst2,setpoint2);
    }
    ClearPoint();
  }
}

//点数初期化メソッド-----------------------------------------------------
function ClearPoint(){
  point1=0;
  point2=0;
  score1.text("0");
  score2.text("0");
  return 0;
}
//------------------------------------------------------------------------
function StrBolay(){
  $("#change1").click(function (){
    i++;                                                                    
    if(i%2 == 1){
      $(this).css("background-image","url(../images/bolay.jpg)");
      strbo1 = 1;
    }else{
      $(this).css("background-image","url(../images/stroke.jpg)");
      strbo1 = 0;
    }
  });
  $("#change2").click(function (){
    k++;
    if(k%2 == 1){
      $(this).css("background-image","url(../images/bolay.jpg)");
      strbo2 = 1;
    }else{
      $(this).css("background-image","url(../images/stroke.jpg)");
      strbo2 = 0;
    }
  });
}
//-----------------------------------------------------------------------
function ServeChange(ser){
  if(ser == 1){
    service.val("Return In");
    serviceace.val("Return ACE");
    fault.val("Return Miss");
    returnin.val("Service In");
    returnace.val("Service ACE");
    rm.val("Fault");
  }else if(ser == 0){
    service.val("Service In");
    serviceace.val("Service ACE");
    fault.val("Fault");
    returnin.val("Return In");
    returnace.val("Returnn ACE");
    rm.val("Return Miss");
  }
  var uptext = {
     pointtext1:$("#score1").text(),
     pointtext2:$("#score2").text(),
     pointtext3:$("#gamest1").text(),   
     pointtext4:$("#gamest2").text(),
     pointtext5:$("#setst1").text(),
     pointtext6:$("#setst2").text()
   };
   socket.emit("pointext-update",{username:user,serveplayer:server,pointext:uptext});
  //finserve = 0;
}
//-----------------------------------------------------------------------
function ClickPoint(score,point,gamest,gampoint){
  if(isTiebreak == 0){
    ScorePoint(score,point);
  }else if(isTiebreak == 1){
    TieBreak(score,point);
  }
}
//-----------sound function-------------------------------

  function sound(aa){
    if(aa == 1){
      document.getElementById("sound15").play();
    }else if(aa == 2){
      document.getElementById("sound30").play();
    }else if(aa == 3){
      document.getElementById("sound40").play();
    }else if(aa == 4){
      document.getElementById("soundlove").play();
    }else if(aa == 5){
      document.getElementById("soundduese").play();
    }else if(aa == 6){
      document.getElementById("soundadre").play();
    }else if(aa == 7){
      document.getElementById("soundadserver").play();
    }else if(aa == 8){
      document.getElementById("pointall").play();
    }
  }                                       

  function audio(){
    var s1 = $("#score1").text();
    var s2 = $("#score2").text();
    if(server == 0){
      if(s1=="0" && s2=="15" || s1=="SCORE" && s2=="15"){
        sound(4);
        setTimeout(function(){
          sound(1);
        },2000);
      }else if(s1=="0" && s2=="30" || s1=="SCORE" && s2=="30"){
        sound(4);
        setTimeout(function(){
          sound(2);
        },2000);
      }else if(s1=="0" && s2=="40" || s1=="SCORE" && s2=="40"){
        sound(4);
        setTimeout(function(){
          sound(3);
        },2000);
      }else if(s1=="15" && s2=="0" || s1=="15" && s2=="SCORE"){
        sound(1);
        setTimeout(function(){
          sound(4);
        },2000);
      }else if(s1=="15" && s2=="15"){
        sound(1);
        setTimeout(function(){
          sound(8);
        },2000);
      }else if(s1=="15" && s2=="30"){
        sound(1);
        setTimeout(function(){
          sound(2);
        },2000);
      }else if(s1=="15" && s2=="40"){
        sound(1);
        setTimeout(function(){
          sound(3);
        },2000);
      }else if(s1=="30" && s2=="0" || s1=="30" && s2=="SCORE"){
        sound(2);
        setTimeout(function(){
          sound(4);
        },2000);
      }else if(s1=="30" && s2=="15"){
        sound(2);
        setTimeout(function(){
          sound(1);
        },2000);
      }else if(s1=="30" && s2=="30"){
        sound(2);
        setTimeout(function(){
          sound(8);
        },2000);
      }else if(s1=="30" && s2=="40"){
        sound(2);
        setTimeout(function(){
          sound(3);
        },2000);
      }else if(s1=="40" && s2=="0" || s1=="40" && s2=="SCORE"){
        sound(3);
        setTimeout(function(){
          sound(4);
        },2000);
      }else if(s1=="40" && s2=="15"){
        sound(3);
        setTimeout(function(){
          sound(1);
        },2000);
      }else if(s1=="40" && s2=="30"){
        sound(3);
        setTimeout(function(){
          sound(2);
        },2000);
      }else if(s1=="DEUCE" && s2=="DEUCE"){
        sound(5);
      }else if(s1=="Ad"){
        sound(7);
      }else if(s2=="Ad"){
        sound(6);
      }
    }else if(server == 1){
      if(s2=="0" && s1=="15" || s2=="SCORE" && s1=="15"){
        sound(4);
        setTimeout(function(){
          sound(1);
        },2000);
      }else if(s2=="0" && s1=="30" || s2=="SCORE" && s1=="30"){
        sound(4);
        setTimeout(function(){
          sound(2);
        },2000);
      }else if(s2=="0" && s1=="40" ||s2=="SCORE" && s1=="40"){
        sound(4);
        setTimeout(function(){
          sound(3);
        },2000);
      }else if(s2=="15" && s1=="0" || s2=="15" && s1=="SCORE"){
        sound(1);
        setTimeout(function(){
          sound(4);
        },2000);
      }else if(s2=="15" && s1=="15"){
        sound(1);
        setTimeout(function(){
          sound(8);
        },2000);
      }else if(s2=="15" && s1=="30"){
        sound(1);
        setTimeout(function(){
          sound(2);
        },2000);
      }else if(s2=="15" && s1=="40"){
        sound(1);
        setTimeout(function(){
          sound(3);
        },2000);
      }else if(s2=="30" && s1=="0" || s2=="30" && s1=="SCORE"){
        sound(2);
        setTimeout(function(){
          sound(4);
        },2000);
      }else if(s2=="30" && s1=="15"){
        sound(2);
        setTimeout(function(){
          sound(1);
        },2000);
      }else if(s2=="30" && s1=="30"){
        sound(2);
        setTimeout(function(){
          sound(8);
        },2000);
      }else if(s2=="30" && s1=="40"){
        sound(2);
        setTimeout(function(){
          sound(3);
        },2000);
      }else if(s2=="40" && s1=="0" ||s2=="40" && s1=="SCORE"){
        sound(3);
        setTimeout(function(){
          sound(4);
        },2000);
      }else if(s2=="40" && s1=="15"){
        sound(3);
        setTimeout(function(){
          sound(1);
        },2000);
      }else if(s2=="40" && s1=="30"){
        sound(3);
        setTimeout(function(){
          sound(2);
        },2000);
      }else if(s2=="DEUCE" && s1=="DEUCE"){
        sound(5);
      }else if(s2=="Ad"){
        sound(7);
      }else if(s1=="Ad"){
        sound(6);
      }
    }
  }
