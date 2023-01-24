var day=new Date().getDay();
var hours=new Date().getHours();
function test (req, res, next) {
    day>=1 && day<=5 && hours>=9 && hours<=17? next() : res.render('error')
 
  };
  module.exports=test