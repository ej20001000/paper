const express = require('express');
const app = express();

app.listen(8888, () => {
    console.log('Server is running port 8888!');
});

app.use((req, res, next) => {
    // res.send('<h1>Hello World!</h1>');
    // res.send('hello world2!');
    // res.send([
    //     { id: 1, name: 'Hong', age: 30 },
    //     { id: 2, name: 'Lee', age: 40 },
    //     { id: 3, name: 'Yoo', age: 16 }
    // ]);

    // res.json([
    //     { id: 1, name: 'Hong', age: 30 },
    //     { id: 2, name: 'Lee', age: 40 },
    //     { id: 3, name: 'Yoo', age: 16 }
    // ]);
    
    // jsonp() : cors가 활성화 되기 이전에 데이터를 요청하던 방식이다
    //           보안상의 이슈로 현재는 거의 사용하지 않는다

    res.status(404).send('<h1>Not Found</h1>');
});