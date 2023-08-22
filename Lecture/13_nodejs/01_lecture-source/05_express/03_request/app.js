const express = require('express');
const app = express();

app.listen(8888, () => {
    console.log('Server is running port 8888!');
});

app.use((req, res) => {
    const headers = req.headers;
    console.log(headers);

    // const accept = req.headers.accept;
    const accept = req.header('accept');
    console.log(accept);

    const query = req.query;
    console.log(query);
});