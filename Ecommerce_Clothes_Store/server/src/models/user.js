const mongoose = require('mongoose');
const { schemaOptions } = require('./schemOptions');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    schemaOptions
);

module.exports = mongoose.model('User', userSchema);
