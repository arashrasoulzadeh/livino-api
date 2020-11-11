const mongo = require('../database');
const UserAlreadyRegisteredException = require('../exceptions/UserAlreadyRegisteredException');


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

    results = await mongo.db.collection("customers").find(query).count();
    var exists = results != 0


    if (!exists) {
        await mongo.db.collection("customers").insertOne(customer, function (err, res) {
            if (err) throw err;
        });
    } else {
        throw new UserAlreadyRegisteredException()
    }
    return {
        status: "registration completed."
    };
}



module.exports.registerAction = registerAction