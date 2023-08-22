const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>GET : /menu 요청에 대한 라우터 분리 후 응답</h1>');
});

router.get('/:menuCode', (req, res) => {
});

router.post('/', (req, res) => {
});

router.put('/', (req, res) => {
});

router.delete('/', (req, res) => {
});