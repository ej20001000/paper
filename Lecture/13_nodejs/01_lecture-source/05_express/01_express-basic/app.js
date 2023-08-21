// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(3000, () => {
//     console.log('Server is running port 3000!');
// });

require('express')().use((req, res) => {
    res.send('Hello World!');
}).listen(3000, () => {
    console.log('Server is running port 3000!');
});

