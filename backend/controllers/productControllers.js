const mySql = require('../database_connection').databaseConnection;

const getProducts = async (req, response) => {
    const {limit} = req.params;
    try {
        mySql.query(`select * from products limit ${limit}`, (err, res) => {
            console.log(err, res);
            if (!err && res) {
                response.status(200).json(res);
            } else {
                response.sendStatus(500);
            }
        })
    } catch (err) {
        if (!response.headersSent)
            response.sendStatus(500);
    }
    
}

const getProductsPaginated = async (req, response) => {
    const {limit, lastProductId} = req.params;
    try {
        mySql.query(`select * from products where id > ${lastProductId} limit ${limit}`, (err, res) => {
            console.log(err, res);
            if (!err && res) {
                response.status(200).json(res);
            } else {
                response.sendStatus(500);
            }
        })
    } catch (err) {
        if (!response.headersSent)
            response.sendStatus(500);
    }
    
}


module.exports = {
    getProducts,
    getProductsPaginated
}