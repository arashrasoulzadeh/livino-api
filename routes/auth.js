const router = require('../router')
const authValidators = require('../validators/authValidators')
const authActions = require('../actions/authActions')

class UnauthorizedError extends Error {
    constructor(message) {
        super(message || 'You do not have access')
        this.status = 403
    }
}

// routes

router.jsonPost('/register', authValidators.registerValidator, "body", authActions.registerAction);

module.exports = router.routes