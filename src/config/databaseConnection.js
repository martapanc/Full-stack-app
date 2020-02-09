const MongoClient = require('mongodb').MongoClient;
const dbCredentials = require('./config').mongoDB;
const util = require('util');

let mongoDB;

const connection =
    'mongodb+srv://%s:%s@cluster0-yx4fl.azure.mongodb.net/test?retryWrites=true&w=majority';

const setupDB = callback => {
    const uri = util.format(
        connection,
        dbCredentials.username,
        dbCredentials.password
    );

    MongoClient.connect(
        uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (error, client) => {
            mongoDB = client.db('full-stack-server');

            if (error) {
                return callback(error);
            }

            return callback('Connected to Database');
        }
    );
};

const getDB = () => {
    return mongoDB;
};

module.exports = { setupDB, getDB };
