class Exception extends Error {
    constructor(errors, message = 'Data Error') {
        super(message)
        this.errors = errors
        this.status = 400
    }

    toJSON() {
        return {}
    }
}

module.exports = Exception