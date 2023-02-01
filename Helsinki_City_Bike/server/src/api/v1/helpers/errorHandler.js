// Project import
const logEvents = require('./logEvents');

// ========================================== ERROR HANDLER ===============================================
const errorHandler = (err, req, res) => {
    logEvents(`${req.method} ${req.url} ::: ${err.message}`);
    res.status(err.status || 500);
    res.json({
        status: err.status || 500,
        message: err.message,
    });
};

module.exports = errorHandler;
