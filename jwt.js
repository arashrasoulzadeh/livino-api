const jwt = require("jsonwebtoken")
const secret = "something_secret"

function authenticateToken(req, res, next) {
    // Gather the jwt access token from the request header
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401) // if there isn't any token

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(err)
        if (err) return res.sendStatus(403)
        req.user = user
        next() // pass the execution off to whatever request the client intended
    })
}
/**
 * generate jwt token with user name
 * @param {string} username 
 */
function generateAccessToken(username) {
    // expires after half and hour (1800 seconds = 30 minutes)
    expires = '1800s'
    token = jwt.sign({
        username
    }, secret, {
        expiresIn: expires
    });
    return {
        token: token,
        expires: expires
    }
}

module.exports = jwt
module.exports.generateAccessToken = generateAccessToken