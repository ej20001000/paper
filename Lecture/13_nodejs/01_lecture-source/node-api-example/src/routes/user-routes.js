const express = require('express');
const route = express.Router();
const UserController = require('../controller/user-controller');

route.get('/', UserController.findAllUsers);
route.get('/:userId', UserController.findUserById);
route.post('/', UserController.insertUser);
route.put('/:userId', UserController.updateUser);
route.delete('/:userId', UserController.deleteUser);

module.exports = route;
