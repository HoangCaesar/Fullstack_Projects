const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { schemaOptions } = require('./modelOptions');
const Joi = require('joi');

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            min: 3,
            max: 255,
        },
        password: {
            type: String,
            required: true,
        },
        verified: {
            type: Boolean,
            default: false,
        },
    },
    schemaOptions
);

const User = mongoose.model('User', userSchema);

const validate = (user) => {
    const schema = Joi.object({
        username: Joi.string().required().min(3).max(255),
        email: Joi.string().required(),
        password: Joi.string().required()
    });
    return schema.validate(user);
};

module.exports = {
    User,
    validate
};
