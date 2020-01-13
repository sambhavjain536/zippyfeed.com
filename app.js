var express=require("express");
var app=express();
var bodyparser=require("body-parser");

app.use( require("./controller/default"))

app.use(bodyparser());
 app.set("view engine","ejs");
 app.use(express.static("public"));






 app.listen(process.env.PORT ||2028,function(req,res){  
    console.log("server start")
});