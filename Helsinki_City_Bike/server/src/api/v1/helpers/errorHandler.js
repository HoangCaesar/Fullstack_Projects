const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        status: err.status || 500,
        message: err.message
    })
}

module.exports = errorHandler;