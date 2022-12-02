const mySql = require('../database_connection').databaseConnection;

const postQuery = async (req, response) => {
    console.log(req.body);
    try {
        mySql.query(`insert into queries (name, email, phone, query) values('${req.body.name}', '${req.body.email}', ${req.body.phone}, '${req.body.query}')`, 
        (err, res) => {
            if (!err && res) {
                response.sendStatus(200);
            } else {
                response.sendStatus(500);
            }
        })
    } catch (err) {
        response.sendStatus(500);
    }
}

const getAllQueries = async (req, response) => {
    console.log(req.body);
    try {
        mySql.query(`select * from queries`, 
        (err, res) => {
            if (!err && res) {
                response.status(200).json(res);
            } else {
                response.sendStatus(500);
            }
        })
    } catch (err) {
        response.sendStatus(500);
    }
}

module.exports = {
    postQuery,
    getAllQueries
}