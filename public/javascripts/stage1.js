jQuery(function($){
    "use strict";
    window.onload = function(){
      $(function(){
        $("#loading").fadeOut();
        $("#container").fadeIn();
      });
    }
    $("#create").click(function(){
          location.href = "/stage2";
      });
});
