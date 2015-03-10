exports.stage2 = function(req,res){
  res.render("tennistage2");
};
exports.viewer = function(req,res){
  res.render("viewer")
};
exports.test = function(req,res){
  console.log("view test");
};
exports.stage3 = function(req,res){
  res.render("database");
};
