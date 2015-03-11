jQuery(function($){
  "use strict";
  $(document).ready(function(){
      var parameter;
      parameter = location.search;
      parameter = parameter.substring(1,parameter.length);
      console.log(parameter);
  });
});
