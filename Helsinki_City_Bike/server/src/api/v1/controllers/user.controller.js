const createError = require('http-errors');

// Project import
const { createUser,createToken } = require('../services');
const sendMail = require('../helpers/sendMail')

// ========================================== USER CONTROLLER ===============================================

const register = async (req, res, next) => {
    // eslint-disable-next-line no-undef
    const { BASE_URL } = process.env;

    try {
        // verify, validate and create User
        const savedUser = await createUser(req.body);
        // create token based on user
        const savedToken = createToken(savedUser)
        // generate link to send a verify email
        const link = `${BASE_URL}/user/verify/${savedUser._id}/${savedToken.token}`;

        return res.json({ status: 'success', data: link });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    register,
};
