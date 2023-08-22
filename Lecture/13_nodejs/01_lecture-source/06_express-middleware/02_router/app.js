const express = require('express');
const app = express();

app.listen(8888, () => {
    console.log('Server is running port 8888!');
});

// app.get('/', (req, res) => {
//     res.send('<h1>GET : / 요청에 대한 응답</h1>');
// });

// app.get('/user', (req, res) => {
//     res.send('<h1>GET : /user 요청에 대한 응답</h1>');
// });

// app.get('/menu', (req, res) => {
//     res.send('<h1>GET : /menu 요청에 대한 응답</h1>');
// });

// app.use(logger('dev'));

const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const menuRouter = require('./routes/menu');

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/menu', menuRouter);