const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const menuRouter = require('./src/routes/menu-route');
app.use('/menus', menuRouter);

app.listen(8888, () => console.log('Listening on port 8888') );
