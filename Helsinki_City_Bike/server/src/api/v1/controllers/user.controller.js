const createError = require('http-errors');
const path = require('path');

// Project import
const { createUser, createToken, verifyRegisterToken, checkUser } = require('../services');
const sendMail = require('../helpers/sendMail');

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

        return res.json({ status: 'success', data: link });
    } catch (err) {
        next(err);
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
        const isUser = await checkUser(req.body);

        if (!isUser) res.json({ status: 'error', data: 'Unauthorized' });

        const accessToken = await signAccessToken(user._id);
        const refreshToken = await signRefreshToken(user._id);
        res.json({
            accessToken,
            refreshToken
        })
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    verify,
    login,
};
