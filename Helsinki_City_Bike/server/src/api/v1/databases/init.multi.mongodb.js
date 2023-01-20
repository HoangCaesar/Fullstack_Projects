const mongoose = require('mongoose');
require('dotenv').config();

// ======================================== MULTI MONGODB - connect mongodb databases =======================================

const { MONGODB_05_2021_URI, MONGODB_06_2021_URI, MONGODB_07_2021_URI, MONGODB_TEST_URI } =
    process.env;

function newConnection(uri) {
    const db = mongoose.createConnection(uri, {
        // Drops support for the old style urls.
        useNewUrlParser: true,
    });

    db.on('connected', function () {
        // Log all queries that mongoose fire in the application
        mongoose.set('debug', function (col, method, query, doc) {
            console.log(
                `Mongodb debug ::: ${this.conn.name}::${col}.${method}(${JSON.stringify(
                    query
                )},${JSON.stringify(doc)})`
            );
        });
        console.log(`Mongodb ::: connected ${this.name}`);
    });

    db.on('error', function (error) {
        console.log(`Mongodb ::: connection ${this.name} ${JSON.stringify(error)}`);
        db.close().catch(function () {
            return console.log(`Mongodb ::: failed to close connection ${this.name}`);
        });
    });

    db.on('disconnected', function (error) {
        console.log(`Mongodb ::: disconnected ${this.name} ${JSON.stringify(error)}`);
    });

    return db;
}

const journeyList05DB = newConnection(MONGODB_05_2021_URI);
const journeyList06DB = newConnection(MONGODB_06_2021_URI);
const journeyList07DB = newConnection(MONGODB_07_2021_URI);
const journeyListTestDB = newConnection(MONGODB_TEST_URI);

module.exports = {
    journeyList05DB,
    journeyList06DB,
    journeyList07DB,
    journeyListTestDB,
};
