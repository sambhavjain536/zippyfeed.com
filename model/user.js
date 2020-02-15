var connect=require("../configur/connect");


module.exports.insert=function(obj,cb){
    connect.init(function(err, client){
        console.log("++++++++++++++++++",err,"TTTTTTTTTTTTTTT");
          var db = client.db("sambhavzippy")
          db.collection('userzippy').insert(obj, cb)
      });

  }