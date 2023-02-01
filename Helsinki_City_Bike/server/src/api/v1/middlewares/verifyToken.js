const createError = require('http-errors');

// ========================================== VERIFY TOKEN MIDLEWARES ===============================================

const verifyAccessToken = (req, res, next) => {
    if (!req.headers['authorization']) {
        return next(createError.Unauthorized());
    }

    const authHeader = req.headers['authorization'];
    const bearerToken = authHeader.split(' ');
    const token = bearerToken[1];

    // eslint-disable-next-line no-undef
    JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, payload) => {
        if (error) {
            if (error.name === 'JsonWebTokenError') {
                return next(createError.Unauthorized());
            }
            return next(createError.Unauthorized(error.message));
        }
        req.payload = payload;
        next();
    });
};

const verifyRefreshToken = (refreshToken) => {
    return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-undef
        JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, payload) => {
            if (error) {
                return reject(error);
            }
            client
                .get(payload.userId)
                .then((res) => {
                    if (refreshToken === res) {
                        return resolve(payload);
                    }
                    return reject(createError.Unauthorized());
                })
                .catch(() => {
                    return reject(createError.InternalServerError());
                });
        });
    });
};

module.exports = {
    verifyAccessToken,
    verifyRefreshToken,
};