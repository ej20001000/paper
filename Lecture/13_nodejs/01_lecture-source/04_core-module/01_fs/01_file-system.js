const fs = require('fs');

// fs.mkdir('test-dir', (err) => console.log(err));
// fs.rmdir('test-dir', (err) => console.log(err));

fs.mkdirSync('test-sync-dir');
fs.rmdirSync('test-sync-dir');