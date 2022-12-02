const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'interview',
    multipleStatements: true
})

module.exports.databaseConnection = connection;