var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("bossboxing");

  var myobj = 
  {
    id: '1003',
    name: 'Adidas NMD R1',
    category: 'Shoes',
    price: 5000,
    imgUrl: 'https://d2cva83hdk3bwc.cloudfront.net/adidas-nmd-r1-pk--og---black-red-blue--1.jpg'
  }
  dbo.collection("products").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});