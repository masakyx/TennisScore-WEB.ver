  var i=0;//change1 number
  var k=0;//change2 number
  var j=0;//fault button 
  var c=0;//change cort button
  var e1=0;//player1 click
  var e2=0;//player2 click
  var e3=0;//player3 click
  var e4=0;//player4 click
  var e5=0;//creater name



jQuery(function ($){
//初期設定 
  $(document).ready(function(){
    $('input[name="usn2"]').val("");
    $('input[name="usn4"]').val("");
    $('input[name="usn2"],input[name="usn4"]').fadeOut();
    strclosebutton();   
  });
  $("#cname").click(function(){
    e5++;
    if(e5 == 1){
      $("#cname").val("");
    }
  });
  $("#usn1").click(function(){
    e1++;
    if(e1 == 1){
      $("#usn1").val("");
    }
  });
  $("#usn2").click(function(){
    e2++;
    if(e2 == 1){
      $("#usn2").val("");
    }
  });
  $("#usn3").click(function(){
    e3++;
    if(e3 == 1){
      $("#usn3").val("");
    }
  });
  $("#usn4").click(function(){
    e4++;
    if(e4 == 1){
      $("#usn4").val("");
    }
  });
 

  $('input[name="gametype"]').click(function (){
    var gametypecheck = $('#single').is(":checked");


    if(gametypecheck){
      $('input[name="usn2"]').val("");
      $('input[name="usn4"]').val("");
      $('input[name="usn2"],input[name="usn4"]').fadeOut();
    }else{
      $('input[name="usn2"]').val("player2");
      $('input[name="usn4"]').val("player4");
      $('input[name="usn2"],input[name="usn4"]').fadeIn();
    }
  });

 
  
    
//CHANGE CORT
    $("#chanco").click(function (){
      c++;
    //stroke button
      var posi1 = $("#returnin").offset();
      var posi2 = $("#service").offset();
    //player text button   
      var posi3 = $("#usn3").offset();
      var posi4 = $("#usn1").offset();
    //change button
      var posi5 = $("#change2").offset();
      var posi6 = $("#change1").offset();
    //score text
      var posi7 = $("#setst2").offset();
      var posi8 = $("#setst1").offset();
     //--------------------------------------------------------------
      if(c%2 == 1){
       //changecort(posi1.left - 10,posi3.left - 10,posi5.left - posi6.left,posi7.left - 10);
        changecort(posi1.left - 10,posi3.left - 10,posi5.left - posi6.left,posi7.left - 10);
      }else{
        //changecort(posi2.left - 10,posi4.left - 10,posi6.left - posi5.left,posi8.left - 10);
        changecort(posi2.left - 10,posi4.left - 10,posi6.left - posi5.left,posi8.left - 10);
      }
    });                                
    //------------------------------------------------------------
    $("#service").click(function (){
      if(server == 0){
        $(this).fadeOut();
        $("#serviceace").fadeOut();
        $("#fault").fadeOut();
        chanco(1);
      }else if(server == 1){
        $(this).fadeOut();
        $("#serviceace").fadeOut();
        $("#fault").fadeOut();
        $("#rm").val("Fault");
        j=0;
        stropenbutton();
        chanco(1);
      }  
    });
    //----------------------------------------------------------
    $("#serviceace").click(function (){
      if(server == 0){
        $("#schange").fadeIn();
        $("#fault").val("Fault");
        j=0;
      }else if(server == 1){
        $("#schange").fadeIn();
        $("#rm").val("Fault");
        openbutton();
        j=0;
      }
    });
    //------------------------------------------------------------
    $("#fault").click(function (){
      if(server == 0){
        j++;
        if(j%2 == 1){
          $("#fault").val("Double Fault");
          $("#schange").fadeOut();
        }else{
          $("#fault").val("Fault");
          $("#schange").fadeIn();
          j=0;
        }
      }else if(server == 1){
          $("#schange").fadeIn();
          $("#rm").val("Fault");
          j=0;
          openbutton(); 
        }
        //finserve = 0;
    }); 
  
    //----------------------------------------------------------
    $("#returnin").click(function (){
      if(server == 0){
        $(this).fadeOut();
        $("#returnace").fadeOut();
        $("#rm").fadeOut();
        $("#fault").val("Fault");
        j=0;
        stropenbutton();
        chanco(1);
      }else if(server == 1){
        $(this).fadeOut();
        $("#returnace").fadeOut();
        $("#rm").fadeOut();
        chanco(1);  
      }
    });
    //-----------------------------------------------------------------
    $("#returnace").click(function (){
      if(server == 0){
        $("#schange").fadeIn();
        openbutton();
      }else if(server == 1){
        $("#schange").fadeIn();
        $("#rm").val("Fault");
        j=0; 
      }
    });
    //-------------------------------------------------------------------
    $("#rm").click(function(){
      if(server == 0){ 
        $("#schange").fadeIn();
        $("#fault").val("Fault");
        j=0;
        openbutton();
      }else if(server == 1){
        j++;
        if(j%2 == 1 ){
          $("#rm").val("Double Fault");
          $("#schange").fadeOut();
        }else{
          $("#rm").val("Fault");
          $("#schange").fadeIn();
          j=0;
        } 
      }
      //finserve = 0;
    });
      //-----------------------------------------------------------------
    $("#win1,#side1,#back1,#net1,#win2,#side2,#back2,#net2").click(function (){
      openbutton();
      strclosebutton();
      chanco(2);
    }); 
  $("#serviceace,#rm,#win1,#win2,#side1,#side2,#back1,#back2,#returnace,#net1,#net2").click(function(){
      i=0;k=0;
      $("#change1").css("background-image","url(../images/stroke.jpg)");
      $("#change2").css("background-image","url(../images/stroke.jpg)");
      strbo1=0;strbo2=0;  
  });
  //----back buttonーーーーーーーーーーーーーーーーーーーーーーーーーーー
  $("#backdataid").click(function(){
      if(renewnum != 0){
        socket.emit("tennis-back-data",{user:user,renew:renewnum});
        renewnum--;
        console.log("id="+user+"///renew="+renewnum);
      }  
  });
  //---back buttonを押された後の情報更新----------------------------------
  socket.on("tennisData-update",function(data){
      console.log("今のポイントテキストは"+data.pointext.pointtext1);
      $("#score1").text(data.pointext.pointtext1);
      $("#score2").text(data.pointext.pointtext2);
      $("#gamest1").text(data.pointext.pointtext3);
      $("#gamest2").text(data.pointext.pointtext4);
      $("#setst1").text(data.pointext.pointtext5);
      $("#setst2").text(data.pointext.pointtext6);
      //----point data の更新--------------------------------------------
      /*ChangeNumber(1,$("#score1").text(),point1);
      ChangeNumber(1,$("#score2").text(),point2);
      ChangeNumber(2,$("#gamest1").text(),gamepoint1);
      ChangeNumber(2,$("#gamest2").text(),gamepoint2);
      ChangeNumber(3,$("#setst1").text(),setpoint1);   
      ChangeNumber(3,$("#setst2").text(),setpoint2);*/
      var uptext = {
        pointtext1:$("#score1").text(),
        pointtext2:$("#score2").text(),
        pointtext3:$("#gamest1").text(),
        pointtext4:$("#gamest2").text(),
        pointtext5:$("#setst1").text(),
        pointtext6:$("#setst2").text()
      };
      point1 = data.pointdata.point1;
      point2 = data.pointdata.point2;
      gamepoint1 = data.pointdata.gamepoint1;
      gamepoint2 = data.pointdata.gamepoint2;
      setpoint1 = data.pointdata.setpoint1;
      setpoint2 = data.pointdata.setpoint2;
      console.log(point1+"/"+point2+"/"+gamepoint1+"/"+gamepoint2+"/"+setpoint1+"/"+setpoint2);
      socket.emit('pointext-update',{username:user,pointext:uptext});
  });
  
});
function ChangeNumber(a,textdata,countdata){
  console.log("Change of Number を実行したよーん");
  if(a == 1){
    switch (textdata){
      case '0':countdata=0;break;
      case '15':countdata=1;break;
      case '30':countdata=2;break;
      case '40':countdata=3;break;
      case 'Ad':countdata=4;break;
      case 'DEUCE':coundata=3;break;
      console.log("countdata==="+countdata);
    }
  }else if(a == 2){
    switch (textdata){
      case '0':coundata=0;break;
      case '1':countdata=1;break;
      case '2':countdata=2;break;
      case '3':countdata=3;break;
      case '4':countdata=4;break;
      case '5':countdata=5;break;
      case '6':countdata=6;break;
      case '7':countdata=7;break;
    }
  }else if(a == 3){
    switch (textdata){
      case '0':countdata=0;break;
      case '1':countdata=1;break;
      case '2':countdata=2;break;
      case '3':countdata=3;break;
    }
  }
}
//----------------------------------------------------------------------
function openbutton(){
  $("#service").fadeIn();
  $("#serviceace").fadeIn();
  $("#fault").fadeIn();
  $("#returnin").fadeIn();
  $("#returnace").fadeIn();
  $("#rm").fadeIn();
  if(server == 0){
    $("#fault").val("Fault");
    j=0;
    return 0;
  }else if(server == 1){
    $("#rm").val("Fault");       
    j=0;
  }
}
//----------------------------------------------------------------------
function strclosebutton(){
  $("#win1,#win2,#side1,#side2,#back1,#back2,#net1,#net2").fadeOut();
  return 0;
}
//-----------------------------------------------------------------------
function stropenbutton(){
  $("#win1,#win2,#side1,#side2,#back1,#back2,#net1,#net2").fadeIn();
  return 0;
}
//------------------------------------------------------------------------
function chanco(a){
  if(a == 1){
    $("#chanco,#schange").fadeOut();
  }else if(a == 2){
    $("#chanco,#schange").fadeIn();
  }
}
//-----------------------------------------------------------------------  
function changecort(po1,po2,po3,po4){
  console.log("cccccc===="+c);
  if(c%2 == 1){
    $(".leftbt").animate({"left":'+=' + po1},"slow");
    $(".rightbt").animate({"right":'+=' + po1},"slow");
    $("#usn1,#usn2").animate({"left":'+=' + po2},'slow');
    $("#usn3,#usn4").animate({"right":'+=' + po2},'slow');
    $("#change1").animate({"left":'+=' + "19%"},'slow');
    $("#change2").animate({"right":'+=' + "19%"},'slow');
    $(".pl1").animate({"left":'+=' + po4},'slow');
    $(".pl2").animate({"right":'+=' + po4},'slow');
  }else{
    $(".leftbt").animate({"left":'-=' + po1},"slow");
    $(".rightbt").animate({"right":'-=' + po1},"slow");
    $("#usn1,#usn2").animate({"left":'-=' + po2},'slow');
    $("#usn3,#usn4").animate({"right":'-=' + po2},'slow');
    $("#change1").animate({"left":'-=' + "19%"},'slow');
    $("#change2").animate({"right":'-=' + "19%"},'slow');
    $(".pl1").animate({"left":'-=' + po4},'slow');
    $(".pl2").animate({"right":'-=' + po4},'slow');
  } 
  return 0;
}
//------------------------------------------------------------------------
function reposition(){
  if(c%2 == 1){
    $(".leftbt").css({"right":'10px'});
    $(".rightbt").css({"left":'10px'});
    $("#usn1,#usn2").css({"right":'10px'});
    $("#usn3,#usn4").css({"left":'10px'});
    $("#change1").css({"right":'32%'});
    $("#change2").css({"left":'32%'}); 
  }else{
    $(".leftbt").css({"left":'10px'});
    $(".rightbt").css({"right":'10px'});
    $("#usn1,#usn2").css({"left":'10px'});
    $("#usn3,#usn4").css({"right":'10px'});
    $("#change1").css({"left":'32%'});
    $("#change2").css({"right":'32%'});   
  }
  return 0;
}
//--------------------------------------------------------------------------
