const mySql = require('../database_connection').databaseConnection;

const postProduct = async (req, response) => {
    try {
        mySql.query(`insert into products (title, image, price) values ('${req.body.title}', '${req.body.image}', ${req.body.price})`, (err, res) => {
            console.log(err, res);
            if (!err && res.affectedRows === 1) {
                response.sendStatus(200);
            } else {
                response.sendStatus(500);
            }
        })
    } catch (err) {
        console.log(12);
        response.sendStatus(500);
    }
    
}


module.exports = {
    postProduct
}