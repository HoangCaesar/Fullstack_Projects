const JWT = require('jsonwebtoken');
const createError = require('http-errors');

// ========================================== JWT SERVICE ===============================================

const signAccessToken = async (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId,
        };
        // eslint-disable-next-line no-undef
        const secret = process.env.ACCESS_TOKEN_SECRET;
        const options = {
            expiresIn: '1h', // 10m10s
        };

        JWT.sign(payload, secret, options, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });
};

const signRefreshToken = async (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId,
        };
        // eslint-disable-next-line no-undef
        const secret = process.env.REFRESH_TOKEN_SECRET;
        const options = {
            expiresIn: '1y', // 10m10s
        };

        const A_YEAR_IN_SECONDS = 365 * 24 * 60 * 60;
        JWT.sign(payload, secret, options, (err, token) => {
            if (err) reject(err);
            client
                .set(userId.toString(), token)
                .then(() => resolve(token))
                .catch((err) => reject(createError.InternalServerError()));
            client.expire(userId.toString(), A_YEAR_IN_SECONDS);
        });
    });
};

module.exports = {
    signAccessToken,
    signRefreshToken,
};
