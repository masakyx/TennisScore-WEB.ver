  var i=0;//change1 number
  var k=0;//change2 number
  var j=0;//fault button 
  var c=0;//change cort button


jQuery(function ($){
//初期設定 
  $(document).ready(function(){
    $('input[name="usn2"],input[name="usn4"]').fadeOut();
    strclosebutton();   
    $(".leftbt").css("background-color","#b3b3b3");
    $(".rightbt").css("background-color","#7fff00");  
  });

 

  $('input[name="gametype"]').click(function (){
    var gametypecheck = $('#single').is(":checked");


    if(gametypecheck){
      $('input[name="usn2"],input[name="usn4"]').fadeOut();
      $('input[name="usn3"]').val("player2");
    }else{
      $('input[name="usn2"],input[name="usn4"]').fadeIn();
      $('input[name="usn3"]').val("player3");
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
        $("#fault").val("Fault");
        j=0;
      }else if(server == 1){
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
        openbutton();
      }else if(server == 1){
        $("#rm").val("Fault");
        j=0; 
      }
    });
    //-------------------------------------------------------------------
    $("#rm").click(function(){
      if(server == 0){ 
        $("#fault").val("Fault");
        j=0;
        openbutton();
      }else if(server == 1){
        j++;
        if(j%2 == 1){
          $("#rm").val("Double Fault");
          $("#schange").fadeOut();
        }else{
          $("#rm").val("Fault");
          $("#schange").fadeIn();
          j=0;
        } 
      }
    });
      //-----------------------------------------------------------------
    $("#win1,#side1,#back1,#net1,#win2,#side2,#back2,#net2").click(function (){
      openbutton();
      strclosebutton();
      chanco(2);
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
  if(c%2 == 1){
    $(".leftbt").animate({"left":'+=' + po1},"slow");
    $(".rightbt").animate({"right":'+=' + po1},"slow");
    $("#usn1,#usn2").animate({"left":'+=' + po2},'slow');
    $("#usn3,#usn4").animate({"right":'+=' + po2},'slow');
    $("#change1").animate({"left":'+=' + po3},'slow');
    $("#change2").animate({"right":'+=' + po3},'slow');
    $(".pl1").animate({"left":'+=' + po4},'slow');
    $(".pl2").animate({"right":'+=' + po4},'slow');
  }else{
    $(".leftbt").animate({"left":'-=' + po1},"slow");
    $(".rightbt").animate({"right":'-=' + po1},"slow");
    $("#usn1,#usn2").animate({"left":'-=' + po2},'slow');
    $("#usn3,#usn4").animate({"right":'-=' + po2},'slow');
    $("#change1").animate({"left":'-=' + po3},'slow');
    $("#change2").animate({"right":'-=' + po3},'slow');
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
