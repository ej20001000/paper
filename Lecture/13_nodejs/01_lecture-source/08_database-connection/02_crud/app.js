const express = require('express');
const app = express();
const mysql = require('mysql');
const connectionInfo = {
    host: 'localhost',
    user: 'harulog',
    password: 'harulog',
    database: 'menu',
    port: 3306
};

