const mysql = require('mysql')

const crakeDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crakeApp',
})

module.exports = crakeDB;