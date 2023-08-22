const userDB = require('../data/user.json');

exports.findAllUsers = () => {

    return userDB;

}

exports.findUserById = (userId) => userDB.filter(user => user.id == userId);

exports.insertUser = (user) => {
    userDB.length;
    userDB.push(user);
    return user;
}