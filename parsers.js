var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})

module.exports.jsonParser = jsonParser
module.exports.urlencodedParser = urlencodedParser