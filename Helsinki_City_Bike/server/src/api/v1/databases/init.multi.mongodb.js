const mongoose = require('mongoose');

// ======================================== MULTI MONGODB - connect mongodb databases =======================================
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

module.exports = newConnection;
