const express = require('express');
const productControllers = require('../controllers/productControllers');

const App = express.Router();

App.get('/api/products/getProducts/:limit', productControllers.getProducts);
App.get('/api/products/getProductsPaginated/:limit/:lastProductId', productControllers.getProductsPaginated);

module.exports.productRoutes = App;