var express=require("express");
var app=express();
var bodyparser=require("body-parser");
app.set("view engine","ejs");


app.use(bodyparser());
 
 app.use(express.static("public"));


 app.use( require("./controller/default"))



 app.listen(process.env.PORT ||2028,function(req,res){  
    console.log("server start")
});              