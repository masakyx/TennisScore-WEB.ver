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
        changecort(posi1.left - 10,posi3.left - 10,posi5.left - posi6.left,posi7.left - 10);
      }else{
        changecort(posi2.left - 10,posi4.left - 10,posi6.left - posi5.left,posi8.left - 10);
      }
    });                                
    //------------------------------------------------------------
    $("#service").click(function (){
      if(server == 0){
        $(this).fadeOut();
        $("#serviceace").fadeOut();
        $("#fault").fadeOut();
        $("#backdataid").fadeOut();
        $("#chanco").fadeOut();
      }else if(server == 1){
        $(this).fadeOut();
        $("#serviceace").fadeOut();
        $("#fault").fadeOut();
        $("#rm").val("Fault");
        $("#backdataid").fadeOut();
        $("#chanco").fadeOut();
        j=0;
        stropenbutton();
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
          $("#backdataid").fadeOut();
          $("#chanco").fadeOut();
        }else{
          $("#fault").val("Fault");
          $("#schange").fadeIn();
          $("#backdataid").fadeIn();
          $("#chanco").fadeIn();
          j=0;
        }
      }else if(server == 1){
          $("#schange").fadeIn();
          $("#rm").val("Fault");
          j=0;
          openbutton(); 
        }
    }); 
  
    //----------------------------------------------------------
    $("#returnin").click(function (){
      if(server == 0){
        $(this).fadeOut();
        $("#returnace").fadeOut();
        $("#rm").fadeOut();
        $("#fault").val("Fault");
        $("#backdataid").fadeOut();
        $("#chanco").fadeOut();
        j=0;
        stropenbutton();
      }else if(server == 1){
        $(this).fadeOut();
        $("#returnace").fadeOut();
        $("#rm").fadeOut();
        $("#backdataid").fadeOut();
        $("#chanco").fadeOut();
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
          $("#backdataid").fadeOut();
          $("#chanco").fadeOut();
        }else{
          $("#rm").val("Fault");
          $("#schange").fadeIn();
          $("#backdataid").fadeIn();
          $("#chanco").fadeIn();
          j=0;
        } 
      }
      //finserve = 0;
    });
      //-----------------------------------------------------------------
    $("#win1,#side1,#back1,#net1,#win2,#side2,#back2,#net2").click(function (){
      openbutton();
      strclosebutton();
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
        //console.log("id="+user+"///renew="+renewnum);
      }
      //console.log("renew番号==="+renewnum);
  });
  //---back buttonを押された後の情報更新----------------------------------
  socket.on("tennisData-update",function(data){
      //console.log("今のポイントテキストは"+data.pointext.pointtext1);
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
      //*****sever change********************************************
      server = data.serveplayer;
      ServeChange(server);
      foreback = data.foreback;
      //***tie break change*********************************************
      isTiebreak = data.isTiebreak;
      //console.log(point1+"/"+point2+"/"+gamepoint1+"/"+gamepoint2+"/"+setpoint1+"/"+setpoint2);
//***********************昔の変数にもどしていく**改良の余地あり**********
      p1f.point=data.point.point1;
      p1.win=data.point.point2;
      p1.side=data.point.point3;
      p1.back=data.point.point4;
      p1.net=data.point.point5;
      p1f.serviceace=data.point.point6;
      p1f.fault=data.point.point7;
      p1f.doublefault=data.point.point8;
      p1f.returnace=data.point.point9;
      p1f.returnace=data.point.point10;
      p1f.returnmiss=data.point.point11;
      p1f.spoint=data.point.point12;
      p1f.bpoint=data.point.point13;
      p1.swin=data.point.point14;
      p1.bwin=data.point.point15;
      p1.sback=data.point.point16;
      p1.bback=data.point.point17;
      p1.sside=data.point.point18;
      p1.bside=data.point.point19;
      p1.snet=data.point.point20;
      p1.bnet=data.point.point21;
      p1f.fserve=data.point.point22;
      p1f.sserve=data.point.point23;
      p1f.fservein=data.point.point24;
      p1f.sservein=data.point.point25;
      p1f.returnin=data.point.point26;
      p1f.allreturn=data.point.point27;
      //******************************
      p1b.point=data.point.spoint1;
      p1.win=data.point.spoint2;
      p1b.side=data.point.spoint3;
      p1b.back=data.point.spoint4;
      p1b.net=data.point.spoint5;
      p1b.serviceace=data.point.spoint6;
      p1b.fault=data.point.spoint7;
      p1b.doublefault=data.point.spoint8;
      p1b.returnace=data.point.spoint9;
      p1b.returnace=data.point.spoint10;
      p1b.returnmiss=data.point.spoint11;
      p1b.spoint=data.point.spoint12;
      p1b.bpoint=data.point.spoint13;
      p1b.swin=data.point.spoint14;
      p1b.bwin=data.point.spoint15;
      p1b.sback=data.point.spoint16;
      p1b.bback=data.point.spoint17;
      p1b.sside=data.point.spoint18;
      p1b.bside=data.point.spoint19;
      p1b.snet=data.point.spoint20;
      p1b.bnet=data.point.spoint21;
      p1b.fserve=data.point.spoint22;
      p1b.sserve=data.point.spoint23;
      p1b.fservein=data.point.spoint24;
      p1b.sservein=data.point.spoint25;
      p1b.returnin=data.point.spoint26;
      p1b.allreturn=data.point.spoint27;
      //**********************************
      p2f.point=data.point.tpoint1;
      p2.win=data.point.tpoint2;
      p2.side=data.point.tpoint3;
      p2.back=data.point.tpoint4;
      p2.net=data.point.tpoint5;
      p2f.serviceace=data.point.tpoint6;
      p2f.fault=data.point.tpoint7;
      p2f.doublefault=data.point.tpoint8;
      p2f.returnace=data.point.tpoint9;
      p2f.returnace=data.point.tpoint10;
      p2f.returnmiss=data.point.tpoint11;
      p2f.spoint=data.point.tpoint12;
      p2f.bpoint=data.point.tpoint13;
      p2.swin=data.point.tpoint14;
      p2.bwin=data.point.tpoint15;
      p2.sback=data.point.tpoint16;
      p2.bback=data.point.tpoint17;
      p2.sside=data.point.tpoint18;
      p2.bside=data.point.tpoint19;
      p2.snet=data.point.tpoint20;
      p2.bnet=data.point.tpoint21;
      p2f.fserve=data.point.tpoint22;
      p2f.sserve=data.point.tpoint23;
      p2f.fservein=data.point.tpoint24;
      p2f.sservein=data.point.tpoint25;
      p2f.returnin=data.point.tpoint26;
      p2f.allreturn=data.point.tpoint27;
      //**********************************
      p1b.point=data.point.apoint1;
      p1b.win=data.point.apoint2;
      p1b.side=data.point.apoint3;
      p1b.back=data.point.apoint4;
      p1b.net=data.point.apoint5;
      p1b.serviceace=data.point.apoint6;
      p1b.fault=data.point.apoint7;
      p1b.doublebfault=data.point.apoint8;
      p1b.returnace=data.point.apoint9;
      p1b.returnace=data.point.apoint10;
      p1b.returnmiss=data.point.apoint11;
      p1b.spoint=data.point.apoint12;
      p1b.bpoint=data.point.apoint13;
      p1b.swin=data.point.apoint14;
      p1b.bwin=data.point.apoint15;
      p1b.sback=data.point.apoint16;
      p1b.bback=data.point.apoint17;
      p1b.sside=data.point.apoint18;
      p1b.bside=data.point.apoint19;
      p1b.snet=data.point.apoint20;
      p1b.bnet=data.point.apoint21;
      p1b.fserve=data.point.apoint22;
      p1b.sserve=data.point.apoint23;
      p1b.fservein=data.point.apoint24;
      p1b.sservein=data.point.apoint25;
      p1b.returnin=data.point.apoint26;
      p1b.allreturn=data.point.apoint27;
//***********************************************************************
      socket.emit('pointext-update',{username:user,pointext:uptext});
  });
  
});
//----------------------------------------------------------------------
function openbutton(){
  $("#service").fadeIn();
  $("#serviceace").fadeIn();
  $("#fault").fadeIn();
  $("#returnin").fadeIn();
  $("#returnace").fadeIn();
  $("#rm").fadeIn();
  $("#backdataid").fadeIn();
  $("#chanco").fadeIn();
  $("#schange").fadeIn();
  if(server == 0){
    $("#fault").val("Fault");
    j=0;
  }else if(server == 1){
    $("#rm").val("Fault");       
    j=0;
  }
}
//----------------------------------------------------------------------
function strclosebutton(){
  $("#win1,#win2,#side1,#side2,#back1,#back2,#net1,#net2").fadeOut();
}
//-----------------------------------------------------------------------
function stropenbutton(){
  $("#win1,#win2,#side1,#side2,#back1,#back2,#net1,#net2").fadeIn();
}
//------------------------------------------------------------------------
//-----------------------------------------------------------------------  
function changecort(po1,po2,po3,po4){
  //console.log("cccccc===="+c);
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
}
//------------------------------------------------------------------------
//--------------------------------------------------------------------------
