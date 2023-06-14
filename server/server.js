// Express Setting.
const express = require('express');
const app = express();
const port = 9000

app.use(express.json())
const Product = require('./models/productModel')

// MongoDB Setting.
const mongoose = require('mongoose');
var url = 'mongodb+srv://admin:1234@cluster0.pnjkkaj.mongodb.net/eCommerce?retryWrites=true&w=majority'
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

app.get('/products', async(req, res) => {
  try {
      const products = await Product.find({});
      res.status(200).json(products);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})


app.post('/products', async(req, res) => {
  try{
    const product = await Product.create(req.body)
    console.log(product)
    res.status(200).json(product)

  }catch (error){
    console.log(error)
    res.status(500).json({message: error.message})
  }
})