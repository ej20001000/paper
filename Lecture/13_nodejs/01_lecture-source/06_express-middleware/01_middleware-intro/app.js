const express = require('express');
const app = express();

app.listen(8888, () => {
    console.log('Server is running port 8888!');
});

// express middleware
app.use((req, res, next) => {
    console.log('first middleware');
    next();
});

app.use((req, res, next) => {
    console.log('second middleware');
    next();
});

app.use((req, res, next) => {
    console.log('third middleware');
    res.status(200).send('hello middleware!');
});