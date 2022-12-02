const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    multipleStatements: true
})

const initialSetupQueries = `create database if not exists interview; 
use interview; 
create table if not exists products (
    id int(11) not null auto_increment,
    title varchar(255) not null,
    image longtext,
    price int(11) not null,
    primary key (id)
);
create table if not exists queries (
    id int(11) not null auto_increment,
    name varchar(255) not null,
    email varchar(255) not null,
    phone mediumint,
    query mediumtext,
    primary key (id)
);`

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        connection.query(
        initialSetupQueries, (err, res) => {
            // console.log(err, res);
            if (!err) {
                console.log(`Database initialisation successful.`);
                process.exit();
            }
        });
    }
})
