const mongo = require('../database');
const UserAlreadyRegisteredException = require('../exceptions/UserAlreadyRegisteredException');
const jwt = require('../jwt');


/**
 * match two passwords  
 * @param {string} pass1 
 * @param {string} pass2 
 */
function matchPassword(pass1, pass2) {
    return pass1 == pass2;
}

// route handlers
async function registerAction(req, res, next) {
    var customer = {
        email: req.body.email,
        password: req.body.password
    }

    //check if user exists
    var query = {
        email: req.body.email,
    }

    results = await mongo.db.collection("customers").findOne(query);
    var exists = results !== 0


    if (!exists) {
        await mongo.db.collection("customers").insertOne(customer, function (err, res) {
            if (err) throw err;
        });
        return login(customer);
    } else {
        if (matchPassword(customer['password'], results.password)) {
            return login(customer)
        } else {
            throw new UserAlreadyRegisteredException()
        }

    }
    return {
        status: "registration completed."
    };
}

async function login(customer) {
    return jwt.generateAccessToken(customer['username']);
}



module.exports.registerAction = registerAction