const express = require('express');
const app = express();

// app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  next();
})

const port = 9000

// mock data
const products = [
  {
    id: '1001',
    name: 'Nike Air 1',
    category: 'Shoes',
    price: 9900,
    imgUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-07-NMmm1B.png'
  },
  {
    id: '1002',
    name: 'Gucci Belt',
    category: 'Accessories',
    price: 15000,
    imgUrl: 'https://image.makewebeasy.net/makeweb/m_1920x0/Yb8McSsRb/March_Week1_23/GUCCI_BELT_3_CM_80_BLACK_CALF_GHW_5438.jpg'
  },
  {
    id: '1003',
    name: 'Adidas NMD R1',
    category: 'Shoes',
    price: 5000,
    imgUrl: 'https://d2cva83hdk3bwc.cloudfront.net/adidas-nmd-r1-pk--og---black-red-blue--1.jpg'
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