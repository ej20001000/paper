const mysql = require('mysql');
const connectionInfo = require('../config/db-config');

getConnection = () => {
    return mysql.createConnection(connectionInfo);
}

module.exports = getConnection;