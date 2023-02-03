const createError = require('http-errors');

// Project import
const { User } = require('../../models');
const { userValidate } = require('../../helpers/validation');

// ========================================== CHECK USER SERVICE ===============================================

const checkUser = async (body) => {
    try {
        const { email, password } = body;

        const { error } = userValidate(body);
        if (error) {
            throw createError(error.details[0].message);
        }

        const user = await User.findOne({ email });
        if (!user) {
            throw createError.NotFound('User is not registered');
        }

        const isValid = await user.isCheckPassword(password);
        if (!isValid) throw createError.Unauthorized();

        const isVerified = user.verified;
        if (!isVerified) throw createError.Unauthorized();

        return user;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = checkUser;
