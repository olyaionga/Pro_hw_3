const express = require('express');
const app = express();
const port = 3000;

let products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' }
];

app.use(express.json());

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const { name } = req.body;
  const newProduct = {
    id: products.length + 1,
    name
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.delete('/products', (req, res) => {
  products = [];
  res.sendStatus(204);
});

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});
