jQuery(function($){
    var cname = $("#cname");
    var create = $("#create");
    create.click(function(){
      if(cname.val() == "" || cname.val() == "作成者の名前を入力してください"){
        window.alert("作者名を入力してください");
      }else{
        location.href = "/stage2";
      }
    });
});
