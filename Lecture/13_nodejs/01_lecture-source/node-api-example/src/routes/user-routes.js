const express = require('express');
const route = express.Router();
const UserController = require('../controller/user-controller');

route.get('/', UserController.findAllUsers);
route.get('/:userId', UserController.findUserById);

module.exports = route;