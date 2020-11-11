const {
    MongoClient
} = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const client = new MongoClient(uri, {
    useUnifiedTopology: true
});
client.connect();
const database = client.db("livino");


module.exports = client
module.exports.db = database