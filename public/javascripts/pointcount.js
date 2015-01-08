//Player Object--------------------------------------------------------------------------
function Player(){
  this.point=0,this.win=0,this.side=0,this.back=0,this.net=0,this.serviceace=0,this.fault=0,this.doublefault=0,this.returnace=0,this.returnmiss=0,this.spoint=0,this.bpoint=0,this.swin=0,this.bwin=0,this.sback=0,this.bback=0,this.sside=0,this.bside=0,this.snet=0,this.bnet=0,this.fserve=0,this.sserve=0,this.fservein=0,this.sservein=0,this.returnin=0,this.allreturn=0;
}
//add method
Player.prototype.move = function(a){
  var m = a;
  m++;
  console.log(m);
  return m;
}

//Player1-------------------------------------------------------------------
var p1f = new Player();  //左上   
var p1b = new Player();
var p1 = new Player();
var p2f = new Player();  //左下
var p2b = new Player();
var p2 = new Player();
var p3f = new Player();  //右上
var p3b = new Player();
var p3 = new Player();
var p4f = new Player();  //右下
var p4b = new Player();
var p4 = new Player();
//--------------------------------------------------------------------------
jQuery(function($){
//-----POINT----------------------------------------------------------------
  $(serviceace,win1,side2,back2,net2).click(function(){
    //p1f.move(p1f.point);
    if(foreback == 0){
      p1f.point++;
    }else{
      p1b.point++;
    }
  });
  $(returnace,win2,side1,back1,net1).click(function(){
    if(foreback == 0){
      p2f.point++;
    }else{
      p2b.point++;
    }
  });

//--serve in-----------------------------------------------------------------
  $(service).click(function(){
    if(server == 0){
      if(foreback == 0){
        if(j==0){
          p1f.fservein++;
          p1f.fserve++;
        }else{
          p1f.bservein++;
          p1f.bserve++;
        }
      }else{
        if(j==0){
          p1b.fservein++;
          p1b.fserve++;
        }else{
          p1b.bservein++;
          p1b.bserve++;
        }
      }
    }else{
      if(foreback == 0){
        p1f.allreturn++;
        p1f.returnin++;
      }else{
        p1b.returnin++;
        p2b.allreturn++;
      }
    }
  });            

  $(returnin).click(function(){
    if(server == 1){
      if(foreback == 0){
        if(j==0){
          p2f.fservein++;
          p2f.fserve++;
        }else{
          p2f.bservein++;
          p2f.bserve++;
        }
      }else{
        if(j==0){
          p2b.fservein++;
          p2b.fserve++;
        }else{
          p2b.bservein++;
          p2b.bserve++;
        }
      }
    }else{
      if(foreback == 0){
        p2f.returnin++;
        p2f.allreturn++;
      }else{
        p2b.returnin++;
        p2b.allreturn++;
      }
    }
  });
//-----MISS POINT-----------------------------------------------------------
  $(net1).click(function(){
    p1.net++;
    if(strbo1 == 0){
      p1.snet++;
    }else{
      p1.bnet++;
    }
  });
  $(net2).click(function(){
    p2.net++;
    if(strbo2 == 0){
      p2.snet++;
    }else{
      p2.bnet++;
    }
  });
  $(side1).click(function(){
    p1.side++;
    if(strbo1 == 0){
      p1.sside++;
    }else{
      p1.bside++;
    }
  });
  $(side2).click(function(){
    p2.side++;
    if(strbo2 == 0){
      p2.sside++;
    }else{
      p2.bside++;
    }
  });
  $(back1).click(function(){
    p1.back++;
    if(strbo1 == 0){
      p1.sback++;                                                              
    }else{
      p1.bback++;
    }
  });
  $(back2).click(function(){
    p2.back++;
    if(strbo2 == 0){
      p2.sback++;
    }else{
      p2.bback++;
    }
  });
  //-----------Winshot------------------------------------------------------
  $(win1).click(function(){
    p1.win++;
    if(strbo1 == 0){
      p1.swin++;
    }else{
      p1.bwin++;
    }
  });
  $(win2).click(function(){
    p2.win++;
    if(strbo2 == 0){
      p2.swin++;
    }else{
      p2.bwin++;
    }
  });
  //---serve--and--return---------------------------------------------------
  $(serviceace).click(function(){
    if(server == 0){
      if(j==0){
        if(foreback == 0){ 
          p1f.fserve++;
          p1f.fservein++;
        }else{
          p1b.fservein++;
          p1b.fserve++;
        }
      }else{
        if(foreback == 0){
          p1f.sservein++;
          p1f.sserve++;
        }else{
          p1b.sservein++;
          p1b.sserve++;
        }
      }
      if(foreback == 0){
        p1f.serviceace++;
        p1f.serve++;
      }else{
        p1b.serviceace++;
        p1b.serve++;
      }
    }else{
      if(foreback == 0){
        p1f.returnace++;
        p1f.returnin++;
        p1f.allreturn++;
      }else{
        p1b.returnace++;
        p1b.returnin++;
        p1b.allreturn++;
      }
    }
  });
  $(returnace).click(function(){
    if(server == 1){
      if(j==0){
        if(foreback == 0){
          p2f.fservein++;
          p2f.fserve++;
        }else{
          p2b.fservein++;
          p2b.fserve++;
        }
      }else{
        if(foreback == 0){
          p2f.sservein++;
          p2f.sserve++;
        }else{
          p2b.sservein++;
          p2b.sserve++;
        }
      } 
      if(foreback == 0){
        p2f.serviceace++;
        p2f.serve++;
      }else{
        p2b.serviceace++;
        p2b.serve++;
      }
    }else{
      if(foreback == 0){
        p2f.returnace++;
        p2f.returnin++;
        p2f.allreturn++;
      }else{
        p2b.returnace++;
        p2b.returnin++;
        p2b.allreturn++;
      }
    }
  });
  //------fault----return-miss-------------------------------------------------
  $(fault).click(function(){
    if(server == 0){
      if(j == 0){
        if(foreback == 0){
          p1f.fault++;
          p1f.fserve++;
        }else{
          p1b.fault++;
          p2b.fserve++;
        }
      }else{
        if(foreback == 0){
          p1f.doublefault++;
          p1f.sserve++;
          p2f.point++;
        }else{
          p1b.doublefault++;
          p2b.sserve++;
          p2b.point++;
        }
      }
    }else{
      if(foreback == 0){
        p1f.returnmiss++;
        p1f.allreturn++;
        p2f.point++;
      }else{
        p1b.returnmiss++;
        p1b.allreturn++;
        p2b.point++;
      }
    }
  });
  $(rm).click(function(){
    if(server == 1){
      if(j == 0){
        if(foreback == 0){
          p2f.fault++;
          p2f.fserve++;
          p2f.serve++;
        }else{
          p2b.fault++;
          p2b.fserve++;
          p2b.serve++;
        }
      }else{
        if(foreback == 0){
          p2f.doublefault++;
          p2f.serve++;
          p2f.sserve++;
          p1f.point++;
        }else{
          p2b.doublefault++;
          p2b.serve++;
          p2b.sserve++;
          p1b.point++;
        }
      }
    }else{
      if(foreback == 0){
        p2f.returnmiss++;
        p2f.allreturn++;
        p1f.point++;
      }else{
        p2b.returnmiss++;
        p2b.allreturn++;
        p1b.point++;
      }
    }
  });
});


