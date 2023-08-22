const express = require('express');
const logger = require('morgan');

const app = express();

app.listen(8888, () => {
    console.log('Server is running port 8888!');
});

const indexRouter = require('./routes/index-route');
const menuRouter = require('./routes/menu-route');

app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/menu', menuRouter);