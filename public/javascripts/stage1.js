jQuery(function($){
    "use strict";
    window.onload = function(){
      $(function(){
        $("#loading").fadeOut();
        $("#container").fadeIn();
      });
    }
    $("#create").click(function(){
        if(confirm("試合データが作成されますがよろしいですか？")){
        
          location.href = "/stage2";
        }
      });
});
