const express = require('express');
const logger = require('morgan');

const app = express();

app.listen(8888, () => {
    console.log('Server is running port 8888!');
});

