// Express Setting.
const express = require('express');
const app = express();
const port = 9000

app.use(express.json())
const Product = require('./models/productModel')

// MongoDB Setting.
const mongoose = require('mongoose');
var url = 'mongodb+srv://admin:1234@cluster0.pnjkkaj.mongodb.net/eCommerce?retryWrites=true&w=majority'
mongoose.set("strictQuery", false)
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
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
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

app.delete('/products/delete/:id', async(req, res) =>{
  try{
    const {id} = req.params
    const product = await Product.findByIdAndDelete(id);
    if(!product)
    {
      return res.status(404).json({message:'cannot find any product with ID ${id}'})
    }
    res.status(200).json(product)
  }
  catch (error){
    res.status(500).json({message: error.message})
  }
})