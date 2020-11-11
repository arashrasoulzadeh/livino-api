const Validator = require('fastest-validator')

class ValidationError extends Error {
    constructor(errors, message = 'Validation Error') {
        super(message)
        this.errors = errors
        this.status = 400
    }

    toJSON() {
        return {}
    }
}
/**
 * run validator on request 
 * @param {object} schema 
 * @param {string} type 
 */
module.exports = function (schema, type = 'body') {
    const v = new Validator()
    const check = v.compile(schema)
    return async function (req, res, next) {
        const isValid = check(req[type])
        if (isValid === true) {
            return next()
        }
        throw new ValidationError(isValid)
    }
}