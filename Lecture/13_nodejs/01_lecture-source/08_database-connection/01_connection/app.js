const mysql = require('mysql');

const connectionInfo = {
    host: 'localhost',
    user: 'harulog',
    password: 'harulog',
    database: 'menu',
    port: 3306
};

const connection = mysql.createConnection(connectionInfo);

connection.connect();

const query = 'SELECT * FROM TBL_MENU';


connection.query(query, (error, results, fields) => {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
});



connection.end(); 