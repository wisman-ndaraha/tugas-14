// dbms
const mysql = require('mysql');


// connection
const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'arkademy'
})

// export

module.exports = connection;