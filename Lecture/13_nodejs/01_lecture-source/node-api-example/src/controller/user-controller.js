const UserService = require('../service/user-service');
const HttpStatus = require('http-status');
const UserDTO = require('../dto/user-dto');

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

exports.insertUser = (req, res) => {

    const createdUser = UserService.insertUser(new UserDTO(req.body));

    if(createdUser) {
        res.status(HttpStatus.CREATED).send({
            status : HttpStatus.CREATED,
            message : 'Created'
        });
    } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            status : HttpStatus.INTERNAL_SERVER_ERROR,
            message : 'Internal Server Error'
        });
    }
}

exports.updateUser = (req, res) => {
    const updatedUser = UserService.updateUser(req.params.userId, new UserDTO(req.body));

    res.status(HttpStatus.ACCEPTED).send({
        status : HttpStatus.ACCEPTED,
        message : 'Accepted',
        results : updatedUser
    })
}

exports.deleteUser = (req, res) => {
    const deleted = UserService.deleteUser(req.params.userId);

    if(deleted) {
        res.status(HttpStatus.ACCEPTED).send({
            status : HttpStatus.ACCEPTED,
            message : 'Deleted'
        });
    } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            status : HttpStatus.INTERNAL_SERVER_ERROR,
            message : 'Internal Server Error'
        });
    }
}