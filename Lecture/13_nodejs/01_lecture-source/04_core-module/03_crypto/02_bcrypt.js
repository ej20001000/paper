const bcrypt = require('bcrypt');
const saltRounds = 10;

const rawPassword = 'password';

bcrypt.genSalt(saltRounds, (err, salt) => {

    if(err) return console.log(err);

    bcrypt.hash(rawPassword, salt, (err, hash) => {
        if(err) return console.log(err);

        const bcryptPassword = hash;
        console.log(bcryptPassword);

        bcrypt.compare(rawPassword, bcryptPassword, (err, compare) => {
            console.log(compare);
        });
    });
});