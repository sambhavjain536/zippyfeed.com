var express=require('express');
var router=express.Router();


router.get('/', function(req, res) {
    console.log("layout is started");
    res.render("layout");

  });


  module.exports=router;