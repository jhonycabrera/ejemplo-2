const mysql = require('mysql');

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || 'root'
const DB_NAME = process.env.DB_NAME || 'bd_arcav1'
const DB_PORT = process.env.DB_PORT || 3306

const db = mysql.createConnection({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME

});

db.connect(function(err){
    if (err) throw err;
    console.log('DATABASE CONNECTED');
});

module.exports = db;