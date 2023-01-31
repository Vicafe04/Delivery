const mysql = require("mysql");

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delivery'
});

module.exports = con;