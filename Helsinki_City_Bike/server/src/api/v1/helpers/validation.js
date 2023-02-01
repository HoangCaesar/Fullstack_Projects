const Joi = require('joi');

// ========================================== VALIDATION USER ===============================================

const userValidate = data => {
    const userSchema = Joi.object({
        name: Joi.string().min(4).max(32),
        email: Joi.string().pattern(new RegExp('gmail.com')).email().lowercase().required(),
        password: Joi.string().min(4).max(32).required()
    });

    return userSchema.validate(data);
}

module.exports = {
    userValidate
}