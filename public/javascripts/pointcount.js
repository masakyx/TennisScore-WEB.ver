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
  $(serviceace,win1,side2,back2,net2).click(function(){
    //p1f.move(p1f.point);
    if(foreback == 0){
      p1f.point++; //フォアサイドでのプレイヤー１の獲得ポイント
    }else{
      p1b.point++; //バックサイドでのプレイヤー１の獲得ポイント
    }
  });
  $(returnace,win2,side1,back1,net1).click(function(){
    if(foreback == 0){
      p2f.point++; //フォアサイドでのプレイヤー２の獲得ポイント
    }else{
      p2b.point++;//バックサイドでのプレイヤー２の獲得ポイント
    }
  });

//--serve in-----------------------------------------------------------------
  $(service).click(function(){
    if(server == 0){
      if(foreback == 0){
        if(j==0){
          p1f.fservein++;//プレイヤー１のフォアサイドのファーストサーブの入った数
          p1f.fserve++; //プレイヤー１がフォアサイドでファーストサーブをうった数
        }else{
          p1f.bservein++;//プレイヤー１のフォアサイドのセカンドサーブの入った数
          p1f.bserve++; //プレイヤー１の フォアサイドのセカンドサーブをうった数
        }
      }else{
        if(j==0){
          p1b.fservein++;//プレイヤー１のバックサイドのファーストサーブの入った数
          p1b.fserve++; //プレイヤー１のバックサイドのファーストサーブをうった数
        }else{
          p1b.bservein++;//プレイヤー１のバックサイドのセカンドサーブの入った数
          p1b.bserve++;  //プレイヤー１のバックサイドのセカンドサーブのうった数
        }
      }
    }else{
      if(foreback == 0){
        p1f.allreturn++;//プレイヤー１のフォアサイドのリターンをうった数
        p1f.returnin++;//プレイヤー１のフォアサイドのリターンが入った数
      }else{
        p1b.returnin++;//プレイヤー１のバックサイドのリターンの入った数
        p2b.allreturn++;//プレイヤー１のバックサイドのリターンのうった数
      }
    }
  });            

  $(returnin).click(function(){
    if(server == 1){
      if(foreback == 0){
        if(j==0){
          p2f.fservein++;//プレイヤー２のフォアサイドのファーストサーブの入った数
          p2f.fserve++; //プレイヤー２のフォアサイドのファーストサーブのうった数
        }else{
          p2f.bservein++;//プレイヤー２のフォアサイドのセカンドサーブの入った数
          p2f.bserve++; //プレイヤー２のフォアサイドのセカンドサーブのうった数
        }
      }else{
        if(j==0){
          p2b.fservein++;//プレイヤー２のバックサイドのファーストサーブの入った数
          p2b.fserve++; //プレイヤー２のバックサイドのファーストサーブのうった数
        }else{
          p2b.bservein++;//プレイヤー２のバックサイドのセカンドサーブのはいった数
          p2b.bserve++; //プレイヤ−２のバックサイドのセカンドサーブのうった数
        }
      }
    }else{
      if(foreback == 0){
        p2f.returnin++; //プレイヤー２のフォアサイドのリターンの入った数
        p2f.allreturn++;//プレイヤー２のフォアサイドのリターンのうった数
      }else{
        p2b.returnin++; //プレイヤー２のバックサイドのリターンの入ったか数
        p2b.allreturn++; //プレイヤー２のバックサイドのリターンのうった数
      }
    }
  });
//-----MISS POINT-----------------------------------------------------------
  $(net1).click(function(){
    p1.net++; //プレイヤー１がネットをした数
    if(strbo1 == 0){
      p1.snet++; //プレイヤー１がストロークでネットをした数
    }else{
      p1.bnet++;//プレイヤー１がボレーでネットをした数
    }
  });
  $(net2).click(function(){
    p2.net++;  //プレイヤー２がネットをした数
    if(strbo2 == 0){
      p2.snet++;//プレイヤー２がストロークでネットをした数
    }else{
      p2.bnet++; //プレイヤー２がボレーでネットをした数
    }
  });
  $(side1).click(function(){
    p1.side++; //プレイヤー１がサイドアウトをした数
    if(strbo1 == 0){
      p1.sside++; //プレイヤー１がストロークでサイドアウトした数
    }else{
      p1.bside++; //プレイヤー１がボレーでサイドアウトした数
    }
  });
  $(side2).click(function(){
    p2.side++; //プレイヤー２がサイドアウトをした数
    if(strbo2 == 0){
      p2.sside++;//プレイヤー２がストロークでサイドアウトをした数
    }else{
      p2.bside++; //プレイヤー２がボレーでサイドアウトした数
    }
  });
  $(back1).click(function(){
    p1.back++;  //プレイヤー１がバックアウトした数
    if(strbo1 == 0){
      p1.sback++;//プレイヤー１がストロークでバックアウトした数                                                              
    }else{
      p1.bback++; //プレイヤー１がボレーでバックあうとした数
    }
  });
  $(back2).click(function(){
    p2.back++;  //プレイヤー２がバックアウトをした数
    if(strbo2 == 0){
      p2.sback++; //プレイヤー２がストロークでバックアウトした数
    }else{
      p2.bback++; //プレイヤー２がボレーでバックあうとした数
    }
  });
  //-----------Winshot------------------------------------------------------
  $(win1).click(function(){
    p1.win++; //プレイヤー１がウイニングショットをうった数
    if(strbo1 == 0){
      p1.swin++; //プレイヤー１がストロークでウイニングショットをうった数
    }else{
      p1.bwin++;//プレイヤー１がボレーでウイニングショットをうった数
    }
  });
  $(win2).click(function(){
    p2.win++; //プレイヤー２がウイニングショットをうった数
    if(strbo2 == 0){
      p2.swin++; //プレイヤー２がストロークでウイニングショットをうった数
    }else{
      p2.bwin++; //プレイヤー２がボレーでウインングショットをうった数
    }
  });
  //---serve--and--return---------------------------------------------------
  $(serviceace).click(function(){
    if(server == 0){
      if(j==0){
        if(foreback == 0){ 
          p1f.fserve++; //プレイヤー１がフォアサイドでファーストサーブをうった数
          p1f.fservein++; //プレイヤ−１がフォアサイドでファーストサーブを入った数
        }else{
          p1b.fservein++; //プレイヤー１がバックサイドでファーストサーブを入った数
          p1b.fserve++; //プレイヤー１がバックサイドでファーストサーブがうった数
        }
      }else{
        if(foreback == 0){
          p1f.sservein++; //プレイヤー１がフォアサイドでセカンドサーブを入った数
          p1f.sserve++;  //プレイヤー１がフォアサイドセカンドサーブをうった数
        }else{
          p1b.sservein++; //プレイヤー１がバックサイドでセカンドサーブが入った数
          p1b.sserve++;  //プレイヤー１がバックサイドでセカンドサーブをうった数
        }
      }
      if(foreback == 0){
        p1f.serviceace++; //プレイヤー１がフォアサイドでサービスエースをとった数
        p1f.point++;//プレイヤー１がフォアサイドでの獲得ポイント数
      }else{
        p1b.serviceace++;//プレイヤー１がバックサイドでサービスエースをとった数
        p1b.point++;//プレイヤー１がバックサイドでの獲得ポイント数
      }
    }else{
      if(foreback == 0){
        p1f.returnace++; //プレイヤー１がフォアサイドでリターンエースをとった数
        p1f.returnin++;  //プレイヤー１がフォアサイドでリターンが入った数
        p1f.allreturn++; //プレイヤー１がフォアサイドでリターンをうった数
        p1f.point++;//プレイヤー１がフォアサイドでの獲得ポイント数
      }else{
        p1b.returnace++;//プレイヤー１がバックサイドでリターンエースをとった数
        p1b.returnin++; //プレイヤー１がバックサイドでリターンが入った数
        p1b.allreturn++; //プレイヤー１がバックサイドでリターンをうった数
        p1b.point++;//プレイヤー１がバックサイドでの獲得ポイント数
      }
    }
  });
  $(returnace).click(function(){
    if(server == 1){
      if(j==0){
        if(foreback == 0){
          p2f.fservein++;//プレイヤー２がフォアサイドでファーストサーブが入った数
          p2f.fserve++;  //プレイヤー２がフォアサイドでファーストサーブをうった数
        }else{
          p2b.fservein++; //プレイヤー２がバックサイドでファーストサーブが入った数
          p2b.fserve++;   //プレイヤー２がバックサイドでファーストサーブがうった数
        }
      }else{
        if(foreback == 0){
          p2f.sservein++;//プレイヤー２がフォアサイドでセカンドサーブが入った数
          p2f.sserve++;  //プレイヤー２がフォアサイドでセカンドサーブをうった数
        }else{
          p2b.sservein++;//プレイヤー２がバックサイドでセカンドサーブが入った数
          p2b.sserve++;  //プレイヤー２がバックサイドでセカンドサーブをうった数
        }
      } 
      if(foreback == 0){
        p2f.serviceace++;//プレイヤー２がフォアサイドでサービスエースをとった数
        p2f.point++;//プレイヤー２がフォアサイドでの獲得ポイント数
      }else{
        p2b.serviceace++;//プレイヤー２がバックサイドでサービスエースをとった数
        p2b.point++;//プレイヤー２がバックサイドでの獲得ポイント数
      }
    }else{
      if(foreback == 0){
        p2f.returnace++; //プレイヤー２がフォアサイドでリターンエースをとった数
        p2f.returnin++;  //プレイヤー２がフォアサイドでリターンが入った数
        p2f.allreturn++; //プレイヤー２がフォアサイドでリターンをうった数
        p2f.point++;//プレイヤー２がフォアサイドでの獲得ポイント数
      }else{
        p2b.returnace++; //プレイヤー２がバックサイドでリターンエースをとった数
        p2b.returnin++;  //プレイヤー２がバックサイドでリターンが入った数
        p2b.allreturn++; //プレイヤー２がバックサイドでリターンをうった数
        p2b.point++;//プレイヤー２がバックサイドでの獲得ポイント数
      }
    }
  });
  //------fault----return-miss-------------------------------------------------
  $(fault).click(function(){
    if(server == 0){
      if(j == 0){
        if(foreback == 0){
          p1f.fault++; //プレイヤー１がフォアサイドでファーストサーブをフォルトした数
          p1f.fserve++; //プレイヤー１がフォアサイドでファーストサーブをうった数
        }else{
          p1b.fault++; //プレイヤー１がバックサイドでファーストサーブをフォルトした数
          p1b.fserve++; //プレイヤー１がバックサイドでファーストサーブをうった数
        }
      }else{
        if(foreback == 0){
          p1f.doublefault++; //プレイヤー１がフォアサイドでセカンドサーブをフォルトした数
          p1f.sserve++;      //プレイヤー１がフォアサイドでセカンドサーブをうった数
          p2f.point++;       //プレイヤー2がフォアサイドでの獲得ポイント
        }else{
          p1b.doublefault++;//プレイヤー１がバックサイドでセカンドサーブをフォルトした数
          p2b.sserve++;   //プレイヤー１がバックサイドでセカンドサーブをうった数
          p2b.point++;    //プレイヤー2がバックサイドでの獲得ポイント
        }
      }
    }else{
      if(foreback == 0){
        p1f.returnmiss++;//プレイヤー１がフォアサイドでリターンをみすった数
        p1f.allreturn++; //プレイヤー１がフォアサイドでリターンをうった数
        p2f.point++;    //プレイヤー2がフォアサイドで獲得ポイント
      }else{
        p1b.returnmiss++;//プレイヤー１がバックサイドでリターンをミスった数
        p1b.allreturn++; //プレイヤー１がバックサイドでリターンをうった数
        p2b.point++;     //プレイヤー2がバックサイドでの獲得ポイント
      }
    }
  });
  $(rm).click(function(){
    if(server == 1){
      if(j == 0){
        if(foreback == 0){
          p2f.fault++;  //プレイヤー２がフォアサイドでファーストサーブをフォルトした数
          p2f.fserve++; //プレイヤー２がフォアサイドでファーストサーブをうった数
        }else{
          p2b.fault++;//プレイヤー２がバックサイドでファーストサーブをフォルトした数
          p2b.fserve++; //プレイヤー２がバックサイドでファーストサーブをうった数
        }
      }else{
        if(foreback == 0){
          p2f.doublefault++;//プレイヤー２がフォアサイドでセカンドサーブをフォルトした数
          p2f.sserve++;    //プレイヤー２がフォアサイドでセカンドサーブをうった数
          p1f.point++;     //プレイヤー１がフォアサイドでポイント獲得数
        }else{
          p2b.doublefault++;//プレイヤー２がバックサイドでセカンドサーブをフォルトした数
          p2b.sserve++;    //プレイヤー２がバックサイドでセカンドサーブをうった数
          p1b.point++;     //プレイヤー１がバックサイドでポイント獲得数
        }
      }
    }else{
      if(foreback == 0){
        p2f.returnmiss++;  //プレイヤー２がフォアサイドでリターンミスをした数
        p2f.allreturn++;   //プレイヤー２がフォアサイドでリターンをうった数
        p1f.point++;       //プレイヤー１がフォアサイドでの獲得ポイント数
      }else{
        p2b.returnmiss++; //プレイヤー２がバックサイドでリターンミスをした数
        p2b.allreturn++;  //プレイヤー２がバックサイドでリターンをうった数
        p1b.point++;      //プレイヤー２がバックサイドでのポイント獲得数
      }
    }
  });
});


