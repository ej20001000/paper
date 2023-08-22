const UserService = require('../service/user-service');
const HttpStatus = require('http-status');

exports.findAllUsers = (req, res) => {
    const users = UserService.findAllUsers();

    res.status(HttpStatus.OK).send({
        status: HttpStatus.OK,
        message: 'OK',
        results: users
    });
}

exports.findUserById = (req, res) => {
    const userId = req.params.userId;
    const user = UserService.findUserById(userId);

    res.status(HttpStatus.OK).send({
        status : HttpStatus.OK,
        message : 'OK',
        results : user
    });
}