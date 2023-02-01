const createError = require('http-errors');

// Project import
const { User } = require('../models');
const { userValidate } = require('../helpers/validation');

// ========================================== USER CONTROLLER ===============================================

const register = async (req, res, next) => {
    const { email, username, password } = req.body;

    try {
        const { error } = userValidate(req.body);
        console.log(':::error validation:::', error);
        if (error) {
            throw createError(error.details[0].message);
        }

        res.json({
            status: 'success',
            data: 'true',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    register,
};
