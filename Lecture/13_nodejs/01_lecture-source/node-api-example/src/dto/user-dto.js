class UserDTO {

    id;
    name;
    age;
    email;

    constructor(data) {
        this.name = data.name;
        this.age = data.age;
        this.email = data.email;
    }

    setId(id) {
        this.id = id;
    }
}

module.exports = UserDTO;