const createError = require('http-errors');
const path = require('path');

// Project import
const {
    createUser,
    createToken,
    verifyRegisterToken,
    checkUser,
    jwt_service,
} = require('../services');
const sendMail = require('../helpers/sendMail');
const { verifyRefreshToken } = require('../middlewares/verifyToken');
const client = require('../databases/int.redis');

// ========================================== USER CONTROLLER ===============================================

const register = async (req, res, next) => {
    // eslint-disable-next-line no-undef
    const { BASE_URL } = process.env;

    try {
        // verify, validate and create User
        const savedUser = await createUser(req.body);
        // create token based on user
        const savedToken = await createToken(savedUser);
        // generate link to send a verify email
        const link = `${BASE_URL}/user/verify/${savedUser._id}/${savedToken.token}`;
        const name = savedUser.name;
        const email = savedUser.email;
        const subject = 'Welcome to Helsinki City Bike';

        await sendMail(email, name, subject, link);

        return res.json({
            status: 'success',
            message: 'We sent you a veify email, please check it',
        });
    } catch (err) {
        next(err);
    }
};

const refreshToken = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            throw createError.BadRequest();
        }

        const { userId } = await verifyRefreshToken(refreshToken);
        const newAccessToken = await jwt_service.signAccessToken(userId);
        const newRefreshToken = await jwt_service.signRefreshToken(userId);
        res.json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        });
    } catch (error) {
        next(error);
    }
};

const verify = async (req, res, next) => {
    try {
        const isToken = await verifyRegisterToken(req);

        if (!isToken) res.json({ status: 'error', data: 'Invalid token' });

        // eslint-disable-next-line no-undef
        res.sendFile(path.join(__dirname, '../html/verify.html'));
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const user = await checkUser(req.body);

        if (!user) res.json({ status: 'error', data: 'Unauthorized' });

        const accessToken = await jwt_service.signAccessToken(user._id);
        const refreshToken = await jwt_service.signRefreshToken(user._id);
        res.json({
            name: user.name,
            accessToken,
            refreshToken,
        });
    } catch (error) {
        next(error);
    }
};

const logout = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            throw createError.BadRequest();
        }
        const { userId } = await verifyRefreshToken(refreshToken);
        client.del(userId.toString()).catch(() => {
            throw createError.InternalServerError();
        });

        res.json({
            message: 'Logout!',
        });
    } catch (error) {
        next(error);
    }
};

const checkAccessToken = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            message: 'Access token is valid',
        });
    } catch (error) {
        next(error);
    }
};

const checkRefreshToken = async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            throw createError.BadRequest();
        }
        await verifyRefreshToken(refreshToken);

        res.json({
            status: 'success',
            message: 'Refresh token is valid',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    verify,
    login,
    refreshToken,
    logout,
    checkAccessToken,
    checkRefreshToken,
};
