const express = require('express');
const queryControllers = require('../controllers/queryControllers');

const App = express.Router();

App.post('/api/query/post', queryControllers.postQuery);
App.get('/api/query/getAll', queryControllers.getAllQueries);

module.exports.queryRoutes = App;