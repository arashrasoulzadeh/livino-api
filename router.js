const router = require('express-async-router').AsyncRouter()
const parser = require('./parsers')
const validator = require('./validator')





function jsonPost(path, validatorSchema, validateType, callback) {
    router.post(path, parser.jsonParser, validator(validatorSchema, validateType), callback);
}


module.exports.routes = router
module.exports.jsonPost = jsonPost