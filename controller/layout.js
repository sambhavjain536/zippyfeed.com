var express=require('express');
var router=express.Router();
var user = require("../model/user");
var mongodb=require("mongodb");



router.get('/', function(req, res) {
    console.log("layout is started");
    res.render("layout");

  });
  router.post("/",function(req,res){
  

    // var fname =req.body.fname;
    // var lname=req.body.lname;
    // var email=req.body.email;
    // var number=req.body.number;
    // var msg=req.body.msg;
  
    user.insert(req.body, function(err, result){
      if(err){
          console.log("errrrr",err);
      }
      if(result)

      {
        console.log(result);
      
        res.render("layout");
        console.log("herer is redirect pagre is open");
      }
      
      
  });


  })


  



  module.exports=router;