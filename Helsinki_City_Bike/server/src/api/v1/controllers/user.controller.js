const createError = require('http-errors');

// Project import
const { User } = require('../models');
const { createUser } = require('../services');

// ========================================== USER CONTROLLER ===============================================

const register = async (req, res, next) => {
    try {
        const savedUser = await createUser(req.body);

        return res.json({ status: 'success', data: savedUser });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    register,
};
