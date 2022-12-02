const express = require('express');
const databaseConnection = require('./database_connection.js');
const adminRoutes = require('./routes/admin_routes').adminRoutes
const productRoutes = require('./routes/product_routes').productRoutes
const queryRoutes = require('./routes/query_routes').queryRoutes
const cors = require('cors');
const bodyParser = require('body-parser');

const App = express();

App.use(cors({
    origin: '*'
}))

App.use(bodyParser.json())

App.listen(5005, () => {
    console.log('Server running');
})

App.use('/', adminRoutes);
App.use('/', productRoutes);
App.use('/', queryRoutes);
