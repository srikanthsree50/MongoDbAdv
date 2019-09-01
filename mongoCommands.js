

var mongodb = require('mongodb');                   //MONGO COMMANDS
var mongoose = require('mongoose');
// var Mongoclient = mongodb.MongoClient;
// var url = 'mongodb://localhost:27017/mydb';     //CREATING ADB AND CONNECTING TO IT

//  Mongoclient.connect(url,function(err,db){
//      if (err) throw err;
// console.log('db created');
// db.close();
//  });

// var mongodb = require('mongodb');

// var Mongoclient = mongodb.MongoClient;
// var url = 'mongodb://localhost:27017/';

//  Mongoclient.connect(url,function(err,db){
//      if (err) throw err;
//      var dbo = db.db('mydb');                             //CREATING COLLECTIONS
//      dbo.createCollection('customers',function(err,res){
//         if (err) throw err;
     
// console.log('collection created');
// db.close();
//     });
//  });


// var mongodb = require('mongodb');

// var Mongoclient = mongodb.MongoClient;
// var url = 'mongodb://localhost:27017/';

//  Mongoclient.connect(url,function(err,db){               //INSERTING SINGLE DOCUMENT
//      if (err) throw err;
//      var dbo = db.db('mydb');
//      var myobj = { name: "Company Inc", address: "Highway 37" };
//      dbo.collection('customers').insertOne(myobj,function(err,res){
//         if (err) throw err;
// console.log('single document inserted');
// db.close();
//     });
// //  });

 var MongoClient = require('mongodb').MongoClient;
 var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { Orderer: 'John', address: 'Highway 71'},
    { Orderer: 'Peter', address: 'Lowstreet 4'},
    { Orderer: 'Amy', address: 'Apple st 652'},
    { Orderer: 'Hannah', address: 'Mountain 21'}
   // INSERT MANY DOCUMENTS AT ONCE
  ];
  dbo.collection("orders").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");                                                //READING FIRST DATA FROM DB
//   dbo.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");                                                //READING ALL DATA FROM DB
//   dbo.collection("customers").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");                                                //FILTERING SOME DATA FROM DB USING LOOPS
//   dbo.collection("customers").find({},{address : 0}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     for(i=0;i<result.length;i++){
//         console.log(result[i].name);
//     }
 
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");                        //FILTERING DATA ON CONDITIONS
//   var query = { address: "Park Lane 38" };
//   dbo.collection("customers").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");                        //FILTERING DATA ON REGULAR EXPRESSIONS
//   var query = { address: /^S/ };                  //NAME STARTING WITH S
//   dbo.collection("customers").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");                        //SORTING DATA : NAME
//   var mysort = { name: 1};                  //ASCENDING:1//DESCENDING:-1
//   dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");                        //DELETING SINGLE DATA : ADDRESS
//   var myquery = { address: 'Mountain 21' };       
//   dbo.collection("customers").deleteOne(myquery,function(err, result) {
//     if (err) throw err;
//     console.log('document deleted successfully');
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");                        //DELETING MULTIPLE DATA : ADDRESS
//   var myquery = { address: '/^O/' };              //USING REGULAR EXPRESSIONS
//   dbo.collection("customers").deleteMany(myquery,function(err, obj) {
//     if (err) throw err;
//     console.log(obj.result.n +' documents deleted successfully');
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");                                //DROPING A COLLECTION
//   dbo.collection("customers").drop(function(err, obj) {   //USING DROP METHOD
//     if (err) throw err;
//     if(obj)
//     console.log('Collection dropped successfully');
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");                                //DROPING A COLLECTION
//   dbo.dropCollection("customers",function(err, obj) {   //USING DROPCOLLECTION METHOD
//     if (err) throw err;
//     if(obj)
//     console.log('Collection dropped successfully');
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");                       //UPDATING ALL FIELDS OR REPLACING 
//   var myquery = { address: "Valley 345" };       
//   var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
//   dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");                       //UPDATING A SINGLE SPECIFIC FIELD 
//   var myquery = { address: "Valley 345" };
//   var newvalues = { $set: { address: "Canyon 123" } };
//   dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");                     //    UPDATING MULTIPLE FIELDS ON
//   var myquery = { address: /^S/ };             //     ADDRESS START WITH S
//   var newvalues = {$set: {name: "Minnie"} };
//   dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log(res.result.nModified + " document(s) updated");
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
                                                    
// MongoClient.connect(url, function(err, db) {        // LIMITING RECORDS TO DISPLAY
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find().limit(5).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection('orders').aggregate([
//     { $lookup:
//        {                                     //JOINING TWO COLLECTION DOCUMENTS
//          from: 'products',
//          localField: 'product_id',
//          foreignField: '_id',
//          as: 'orderdetails'
//        }
//      }
//     ]).toArray(function(err, res) {
//     if (err) throw err;
//     console.log(JSON.stringify(res));
//     db.close();
//   });
// });
