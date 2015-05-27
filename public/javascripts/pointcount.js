//Player Object--------------------------------------------------------------------------

function Player(){
  this.point=0,this.win=0,this.side=0,this.back=0,this.net=0,this.serviceace=0,this.fault=0,this.doublefault=0,this.returnace=0,this.returnmiss=0,this.spoint=0,this.bpoint=0,this.swin=0,this.bwin=0,this.sback=0,this.bback=0,this.sside=0,this.bside=0,this.snet=0,this.bnet=0,this.fserve=0,this.sserve=0,this.fservein=0,this.sservein=0,this.returnin=0,this.allreturn=0;
  this.playername="";
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

//----------playername----------------------------------------------------
p1f.playername=$("#usn1").val();
p2f.playername=$("#usn2").val();
p3f.playername=$("#usn3").val();
p4f.playername=$("#usn4").val();

//--------------------------------------------------------------------------
jQuery(function($){
//-----POINT----------------------------------------------------------------
  $("#serviceace,#win1,#side2,#back2,#net2").click(function(){
    //p1f.move(p1f.point);
    if(foreback == 0){
      p1f.point++; 
      console.log("フォアサイドでのプレイヤー１の獲得ポイント");
    }else{
      p1b.point++; 
      console.log("バックサイドでのプレイヤー１の獲得ポイント");
    }
  });
  $("#returnace,#win2,#side1,#back1,#net1").click(function(){
    if(foreback == 0){
      p2f.point++; 
      console.log("フォアサイドでのプレイヤー２の獲得ポイント");
    }else{
      p2b.point++;
      console.log("バックサイドでのプレイヤー２の獲得ポイント");
    }
  });

//--serve in-----------------------------------------------------------------
  $(service).click(function(){
    if(server == 0){
      if(foreback == 0){
        if(j==0){
          p1f.fservein++;
          console.log("プレイヤー１のフォアサイドのファーストサーブの入った数");
          p1f.fserve++; 
          console.log("プレイヤー１がフォアサイドでファーストサーブをうった数");
        }else{
          p1f.bservein++;
          console.log("プレイヤー１のフォアサイドのセカンドサーブの入った数");
          p1f.bserve++; 
          console.log("プレイヤー１の フォアサイドのセカンドサーブをうった数");
        }
      }else{
        if(j==0){
          p1b.fservein++;
          console.log("プレイヤー１のバックサイドのファーストサーブの入った数");
          p1b.fserve++; 
          console.log("プレイヤー１のバックサイドのファーストサーブをうった数");
        }else{
          p1b.bservein++;
          console.log("プレイヤー１のバックサイドのセカンドサーブの入った数");
          p1b.bserve++;  
          console.log("プレイヤー１のバックサイドのセカンドサーブのうった数");
        }
      }
    }else{
      if(foreback == 0){
        p1f.allreturn++;
        console.log("プレイヤー１のフォアサイドのリターンをうった数");
        p1f.returnin++;
        console.log("プレイヤー１のフォアサイドのリターンが入った数");
      }else{
        p1b.returnin++;
        console.log("プレイヤー１のバックサイドのリターンの入った数");
        p2b.allreturn++;
        console.log("プレイヤー１のバックサイドのリターンのうった数");
      }
    }
  });            

  $(returnin).click(function(){
    if(server == 1){
      if(foreback == 0){
        if(j==0){
          p2f.fservein++;
          console.log("プレイヤー２のフォアサイドのファーストサーブの入った数");
          p2f.fserve++; console.log("プレイヤー２のフォアサイドのファーストサーブのうった数");
        }else{
          p2f.bservein++;console.log("プレイヤー２のフォアサイドのセカンドサーブの入った数");
          p2f.bserve++; console.log("プレイヤー２のフォアサイドのセカンドサーブのうった数");
        }
      }else{
        if(j==0){
          p2b.fservein++;console.log("プレイヤー２のバックサイドのファーストサーブの入った数");
          p2b.fserve++; console.log("プレイヤー２のバックサイドのファーストサーブのうった数");
        }else{
          p2b.bservein++;console.log("プレイヤー２のバックサイドのセカンドサーブのはいった数");
          p2b.bserve++; console.log("プレイヤ−２のバックサイドのセカンドサーブのうった数");
        }
      }
    }else{
      if(foreback == 0){
        p2f.returnin++; console.log("プレイヤー２のフォアサイドのリターンの入った数");
        p2f.allreturn++;console.log("プレイヤー２のフォアサイドのリターンのうった数");
      }else{
        p2b.returnin++; console.log("プレイヤー２のバックサイドのリターンの入ったか数");
        p2b.allreturn++; console.log("プレイヤー２のバックサイドのリターンのうった数");
      }
    }
  });
//-----MISS POINT-----------------------------------------------------------
  $(net1).click(function(){
    p1.net++; console.log("プレイヤー１がネットをした数");
    if(strbo1 == 0){
      p1.snet++; console.log("プレイヤー１がストロークでネットをした数");
    }else{
      p1.bnet++;console.log("プレイヤー１がボレーでネットをした数");
    }
  });
  $(net2).click(function(){
    p2.net++;  console.log("プレイヤー２がネットをした数");
    if(strbo2 == 0){
      p2.snet++;console.log("プレイヤー２がストロークでネットをした数");
    }else{
      p2.bnet++; console.log("プレイヤー２がボレーでネットをした数");
    }
  });
  $(side1).click(function(){
    p1.side++; console.log("プレイヤー１がサイドアウトをした数");
    if(strbo1 == 0){
      p1.sside++; console.log("プレイヤー１がストロークでサイドアウトした数");
    }else{
      p1.bside++; console.log("プレイヤー１がボレーでサイドアウトした数");
    }
  });
  $(side2).click(function(){
    p2.side++; console.log("プレイヤー２がサイドアウトをした数");
    if(strbo2 == 0){
      p2.sside++;console.log("プレイヤー２がストロークでサイドアウトをした数");
    }else{
      p2.bside++; console.log("プレイヤー２がボレーでサイドアウトした数");
    }
  });
  $(back1).click(function(){
    p1.back++;  console.log("プレイヤー１がバックアウトした数");
    if(strbo1 == 0){
      p1.sback++;console.log("プレイヤー１がストロークでバックアウトした数");                                                              
    }else{
      p1.bback++; console.log("プレイヤー１がボレーでバックあうとした数");
    }
  });
  $(back2).click(function(){
    p2.back++;  console.log("プレイヤー２がバックアウトをした数");
    if(strbo2 == 0){
      p2.sback++; console.log("プレイヤー２がストロークでバックアウトした数");
    }else{
      p2.bback++; console.log("プレイヤー２がボレーでバックあうとした数");
    }
  });
  //-----------Winshot------------------------------------------------------
  $(win1).click(function(){
    p1.win++; console.log("プレイヤー１がウイニングショットをうった数");
    if(strbo1 == 0){
      p1.swin++; console.log("プレイヤー１がストロークでウイニングショットをうった数");
    }else{
      p1.bwin++;console.log("プレイヤー１がボレーでウイニングショットをうった数");
    }
  });
  $(win2).click(function(){
    p2.win++; console.log("プレイヤー２がウイニングショットをうった数");
    if(strbo2 == 0){
      p2.swin++; console.log("プレイヤー２がストロークでウイニングショットをうった数");
    }else{
      p2.bwin++; console.log("プレイヤー２がボレーでウインングショットをうった数");
    }
  });
  //---serve--and--return---------------------------------------------------
  $(serviceace).click(function(){
    if(server == 0){
      if(j==0){
        if(foreback == 0){ 
          p1f.fserve++; console.log("プレイヤー１がフォアサイドでファーストサーブをうった数");
          p1f.fservein++; console.log("プレイヤ−１がフォアサイドでファーストサーブを入った数");
        }else{
          p1b.fservein++; console.log("プレイヤー１がバックサイドでファーストサーブを入った数");
          p1b.fserve++; console.log("プレイヤー１がバックサイドでファーストサーブがうった数");
        }
      }else{
        if(foreback == 0){
          p1f.sservein++; console.log("プレイヤー１がフォアサイドでセカンドサーブを入った数");
          p1f.sserve++;  console.log("プレイヤー１がフォアサイドセカンドサーブをうった数");
        }else{
          p1b.sservein++; console.log("プレイヤー１がバックサイドでセカンドサーブが入った数");
          p1b.sserve++;  console.log("プレイヤー１がバックサイドでセカンドサーブをうった数");
        }
      }
      if(foreback == 0){
        p1f.serviceace++; console.log("プレイヤー１がフォアサイドでサービスエースをとった数");
        //p1f.point++;console.log("プレイヤー１がフォアサイドでの獲得ポイント数");
      }else{
        p1b.serviceace++;console.log("プレイヤー１がバックサイドでサービスエースをとった数");
        //p1b.point++;console.log("プレイヤー１がバックサイドでの獲得ポイント数");
      }
    }else{
      if(foreback == 0){
        p1f.returnace++; console.log("プレイヤー１がフォアサイドでリターンエースをとった数");
        p1f.returnin++;  console.log("プレイヤー１がフォアサイドでリターンが入った数");
        p1f.allreturn++; console.log("プレイヤー１がフォアサイドでリターンをうった数");
        //p1f.point++;console.log("プレイヤー１がフォアサイドでの獲得ポイント数");
      }else{
        p1b.returnace++;console.log("プレイヤー１がバックサイドでリターンエースをとった数");
        p1b.returnin++; console.log("プレイヤー１がバックサイドでリターンが入った数");
        p1b.allreturn++; console.log("プレイヤー１がバックサイドでリターンをうった数");
        //p1b.point++;console.log("プレイヤー１がバックサイドでの獲得ポイント数");
      }
    }
  });
  $(returnace).click(function(){
    if(server == 1){
      if(j==0){
        if(foreback == 0){
          p2f.fservein++;console.log("プレイヤー２がフォアサイドでファーストサーブが入った数");
          p2f.fserve++;  console.log("プレイヤー２がフォアサイドでファーストサーブをうった数");
        }else{
          p2b.fservein++; console.log("プレイヤー２がバックサイドでファーストサーブが入った数");
          p2b.fserve++;   console.log("プレイヤー２がバックサイドでファーストサーブがうった数");
        }
      }else{
        if(foreback == 0){
          p2f.sservein++;console.log("プレイヤー２がフォアサイドでセカンドサーブが入った数");
          p2f.sserve++;  console.log("プレイヤー２がフォアサイドでセカンドサーブをうった数");
        }else{
          p2b.sservein++;console.log("プレイヤー２がバックサイドでセカンドサーブが入った数");
          p2b.sserve++;  console.log("プレイヤー２がバックサイドでセカンドサーブをうった数");
        }
      } 
      if(foreback == 0){
        p2f.serviceace++;console.log("プレイヤー２がフォアサイドでサービスエースをとった数");
        //p2f.point++;console.log("プレイヤー２がフォアサイドでの獲得ポイント数");
      }else{
        p2b.serviceace++;console.log("プレイヤー２がバックサイドでサービスエースをとった数");
        //p2b.point++;console.log("プレイヤー２がバックサイドでの獲得ポイント数");
      }
    }else{
      if(foreback == 0){
        p2f.returnace++; console.log("プレイヤー２がフォアサイドでリターンエースをとった数");
        p2f.returnin++;  console.log("プレイヤー２がフォアサイドでリターンが入った数");
        p2f.allreturn++; console.log("プレイヤー２がフォアサイドでリターンをうった数");
        //p2f.point++;console.log("プレイヤー２がフォアサイドでの獲得ポイント数");
      }else{
        p2b.returnace++; console.log("プレイヤー２がバックサイドでリターンエースをとった数");
        p2b.returnin++;  console.log("プレイヤー２がバックサイドでリターンが入った数");
        p2b.allreturn++; console.log("プレイヤー２がバックサイドでリターンをうった数");
        //p2b.point++;console.log("プレイヤー２がバックサイドでの獲得ポイント数");
      }
    }
  });
  //------fault----return-miss-------------------------------------------------
  $(fault).click(function(){
    if(server == 0){
      if(j == 0){
        if(foreback == 0){
          p1f.fault++; console.log("プレイヤー１がフォアサイドでファーストサーブをフォルトした数");
          p1f.fserve++; console.log("プレイヤー１がフォアサイドでファーストサーブをうった数");
        }else{
          p1b.fault++; console.log("プレイヤー１がバックサイドでファーストサーブをフォルトした数");
          p1b.fserve++; console.log("プレイヤー１がバックサイドでファーストサーブをうった数");
        }
      }else{
        if(foreback == 0){
          p1f.doublefault++; console.log("プレイヤー１がフォアサイドでセカンドサーブをフォルトした数");
          p1f.sserve++;      console.log("プレイヤー１がフォアサイドでセカンドサーブをうった数");
          p2f.point++;       console.log("プレイヤー2がフォアサイドでの獲得ポイント");
        }else{
          p1b.doublefault++;console.log("プレイヤー１がバックサイドでセカンドサーブをフォルトした数");
          p1b.sserve++;   console.log("プレイヤー１がバックサイドでセカンドサーブをうった数");
          p2b.point++;    console.log("プレイヤー2がバックサイドでの獲得ポイント");
        }
      }
    }else{
      if(foreback == 0){
        p1f.returnmiss++;console.log("プレイヤー１がフォアサイドでリターンをみすった数");
        p1f.allreturn++; console.log("プレイヤー１がフォアサイドでリターンをうった数");
        p2f.point++;    console.log("プレイヤー2がフォアサイドで獲得ポイント");
      }else{
        p1b.returnmiss++;console.log("プレイヤー１がバックサイドでリターンをミスった数");
        p1b.allreturn++; console.log("プレイヤー１がバックサイドでリターンをうった数");
        p2b.point++;     console.log("プレイヤー2がバックサイドでの獲得ポイント");
      }
    }
  });
  $(rm).click(function(){
    if(server == 1){
      if(j == 0){
        if(foreback == 0){
          p2f.fault++;  console.log("プレイヤー２がフォアサイドでファーストサーブをフォルトした数");
          p2f.fserve++; console.log("プレイヤー２がフォアサイドでファーストサーブをうった数");
        }else{
          p2b.fault++;console.log("プレイヤー２がバックサイドでファーストサーブをフォルトした数");
          p2b.fserve++; console.log("プレイヤー２がバックサイドでファーストサーブをうった数");
        }
      }else{
        if(foreback == 0){
          p2f.doublefault++;console.log("プレイヤー２がフォアサイドでセカンドサーブをフォルトした数");
          p2f.sserve++;    console.log("プレイヤー２がフォアサイドでセカンドサーブをうった数");
          p1f.point++;     console.log("プレイヤー１がフォアサイドでポイント獲得数");
        }else{
          p2b.doublefault++;console.log("プレイヤー２がバックサイドでセカンドサーブをフォルトした数");
          p2b.sserve++;    console.log("プレイヤー２がバックサイドでセカンドサーブをうった数");
          p1b.point++;     console.log("プレイヤー１がバックサイドでポイント獲得数");
        }
      }
    }else{
      if(foreback == 0){
        p2f.returnmiss++;  console.log("プレイヤー２がフォアサイドでリターンミスをした数");
        p2f.allreturn++;   console.log("プレイヤー２がフォアサイドでリターンをうった数");
        p1f.point++;       console.log("プレイヤー１がフォアサイドでの獲得ポイント数");
      }else{
        p2b.returnmiss++; console.log("プレイヤー２がバックサイドでリターンミスをした数");
        p2b.allreturn++;  console.log("プレイヤー２がバックサイドでリターンをうった数");
        p1b.point++;      console.log("プレイヤー２がバックサイドでのポイント獲得数");
      }
    }
  });
});


