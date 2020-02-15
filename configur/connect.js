
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sambhavzippy:sambhav@cluster0-4lfub.mongodb.net/sambhavzippy?retryWrites=true&w=majority";
module.exports.init=function(cb){
    MongoClient.connect(url,cb)     
}
