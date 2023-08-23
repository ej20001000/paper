const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('dev'));

app.use(express.json());

const paintingRouter = require('./src/routes/painting-route');
const artistRouter = require('./src/routes/artist-route');

app.use('/paintings', paintingRouter);
app.use('/artists', artistRouter);


app.listen(8888, () => {
    console.log('Server is running on port 3000');
});