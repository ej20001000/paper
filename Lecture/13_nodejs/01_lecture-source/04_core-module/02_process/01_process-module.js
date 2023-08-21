const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.greeting);

console.log({
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PWD: process.env.DB_PWD,
    DB_USER: process.env.DB_USER
});