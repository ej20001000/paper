const fs = require('fs');
const userDB = require('../data/user.json');
const path = require('path');

exports.findAllUsers = () => {
    return userDB;
}

exports.findUserById = (userId) => userDB.filter(user => user.id == userId);

exports.insertUser = (userDTO) => {
    const initialLength = userDB.length;

    userDTO.setId(userDB[userDB.length - 1].id + 1);

    userDB.push(userDTO);

    if(initialLength < userDB.length) {
        const userDBPath = path.join(__dirname, '../data/user.json');
        fs.writeFileSync(userDBPath, JSON.stringify(userDB)); 

        return true;
    }

    return false;
    
}

exports.updateUser = (id, userDTO) => {
    const user = userDB.find(user => user.id == id);

    user.age = userDTO.age;
    user.name = userDTO.name;
    user.email = userDTO.email;

    fs.writeFileSync(path.join(__dirname, '../data/user.json'), JSON.stringify(userDB));

    return user;
}

exports.deleteUser = (id) => {
    const initialLength = userDB.length;

    userDB.splice(userDB.findIndex(user => user.id == id), 1);

    if(initialLength > userDB.length) {
        fs.writeFileSync(path.join(__dirname, '../data/user.json'), JSON.stringify(userDB));

        return true;
    }

    return false;
}