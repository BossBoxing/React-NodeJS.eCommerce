const express = require('express');
const app = express();

app.use(express.json());

const port = 9000

// mock data
const products = [
  {
    id: '1001',
    name: 'Nike Air 1',
    category: 'Shoes',
    price: 9900
  },
  {
    id: '1002',
    name: 'Gucci Belt',
    category: 'Accessories',
    price: 15000
  },
  {
    id: '1003',
    name: 'Adidas NMD R1',
    category: 'Shoes',
    price: 5000
  }
];

app.get('/products', (req, res) => {
  res.json(products);
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