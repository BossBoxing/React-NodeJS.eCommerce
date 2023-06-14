
// Express Setting.
const express = require('express');
const app = express();
const port = 9000

// MongoDB Setting.
const mongoose = require('mongoose');
var url = 'mongodb+srv://admin:1234@cluster0.pnjkkaj.mongodb.net/?retryWrites=true&w=majority'
mongoose.Promise = global.Promise;
mongoose.connect(url)
  .then(() => {
    console.log('MongoDB Connection Successfully.')
    app.listen(port, () => {
      console.log('Application is running on port ' + port);
    });
  })
  .catch((error) => console.log(error))

// Setting App To Allow connection with React.
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
})

app.get('/products', (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("bossboxing");
    dbo.collection("products").find().toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      db.close();
    })
  });
});

app.get('/products/cate/:Category', (req, res) => {
  let Category = req.params.Category;
  if (Category === undefined || Category.length == 0) {
    return res.status(400).send({ error: true, message: "Please provide Category name" })
  }
  else {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("bossboxing");
      dbo.collection("products").find({ category: Category }).toArray(function (err, result) {
        if (err) throw err;
        if (result === undefined || result.length == 0)
        {
          message = "Category not found.";
        }
        else
        {
          message = "Successfully retrieved Category data."
        }
        res.json(result);
        db.close();
      })
    });
  }
});

// app.post('/products', (req, res) => {
//   const payload = req.body;
//   res.json(payload);
// });

// app.put('/products/:id', (req, res) => {
//   const { id } = req.params;
//   res.json({ id });
// });

// app.delete('/products/:id', (req, res) => {
//   const { id } = req.params;
//   res.json({ id });
// });