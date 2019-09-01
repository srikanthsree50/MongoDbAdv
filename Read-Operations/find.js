const mongodb = require('mongodb');
const mongoose = require('mongoose');


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("moviedata");                                                //FILTERING SOME DATA FROM DB USING LOOPS
  dbo.collection("movies").find({"rating.average":{$gt:5}}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    for(i=0;i<result.length;i++){
        console.log(result[i].name);
    }
 
    db.close();
  });
});




// MongoClient.connect(url,{useNewUrlParser:true , useUnifiedTopology:true}, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("moviedata");                                                //READING USING FIND ONE 
//   dbo.collection("movies").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.genres);
//     db.close();
//   });
// });



//var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("moviedata");                                                //READING ALL DATA FROM DB USING FIND METHOD
//   dbo.collection("movies").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });
