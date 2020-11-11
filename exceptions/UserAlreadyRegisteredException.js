const Exception = require('./Exception');
class UserAlreadyRegisteredException extends Exception {
    constructor(errors) {
        super("user registered.")
        this.errors = {
            email: "User Registered Before."
        }
        this.status = 400
    }
}

module.exports = UserAlreadyRegisteredException