const mongoose = require('mongoose');
require('dotenv').config();

// ======================================== MULTI MONGODB - connect mongodb databases =======================================
const {
    MONGODB_05_2021_URI,
    MONGODB_06_2021_URI,
    MONGODB_07_2021_URI,
    MONGODB_TEST_URI,
    MONGODB_STATION_LIST_URI,
} =
    // eslint-disable-next-line no-undef
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

const testDatabase = newConnection(MONGODB_TEST_URI);
const stationListDatabase = newConnection(MONGODB_STATION_LIST_URI);
const may_2021Database = newConnection(MONGODB_05_2021_URI);
const june_2021Database = newConnection(MONGODB_06_2021_URI);
const july_2021Database = newConnection(MONGODB_07_2021_URI);

module.exports = {
    testDatabase,
    stationListDatabase,
    may_2021Database,
    june_2021Database,
    july_2021Database,
};
