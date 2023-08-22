const express = require('express');
const morgan = require('morgan');

const app = express();


app.use(morgan('dev'));

app.use(express.json());

const UserRouter = require('./src/routes/user-routes');
app.use('/users', UserRouter);

app.listen(8888, () => console.log('Listening on port 8888') );