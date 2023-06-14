
// Express Setting.
const express = require('express');
const app = express();
const port = 9000

// MongoDB Setting.
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// Setting App To Allow connection with React.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.get('/products', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("bossboxing");
    dbo.collection("products").find().toArray(function(err, result){
      if(err) throw err;
      res.json(result);
      db.close();
    })
  });
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const result = products.find((product) => product.id === id);
  res.json(result);
});

app.post('/products', (req, res) => {
  const payload = req.body;
  res.json(payload);
});

app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

app.get('/products/cate/:category', (req, res) => {
  const { category } = req.params;
  const result = products.filter((product) => product.category === category);
  res.json(result);
});

app.listen(port, () => {
  console.log('Application is running on port ' + port);
});