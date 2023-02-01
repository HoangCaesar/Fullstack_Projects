const createError = require('http-errors');

// Project import
const { User } = require('../../models');
const { userValidate } = require('../../helpers/validation');

// ========================================== CREATE USER SERVICE ===============================================

const createUser = async (body) => {
    const { email } = body;

    try {
        const { error } = userValidate(body);
        if (error) {
            throw createError(error.details[0].message);
        }

        const isExist = await User.findOne({ email });

        if (isExist) {
            throw createError.Conflict(`${email} is ready been registered!`);
        }

        const user = new User({
            ...body,
        });

        const savedUser = await user.save();

        return savedUser;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = createUser;
