const createError = require('http-errors');

// Project import
const { createUser } = require('../services');
const sendMail = require('../helpers/sendMail')

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
