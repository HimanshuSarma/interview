const express = require('express');
const adminControllers = require('../controllers/adminControllers');

const App = express.Router();

App.post('/api/admin/postProduct', adminControllers.postProduct);

module.exports.adminRoutes = App;