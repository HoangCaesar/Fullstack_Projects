const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// Project import
const { testDatabase, userDatabase } = require('../databases/init.multi.mongodb');
const modelOptions = require('./modelOptions');

// ========================================== USER MODEL ===============================================

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            required: true,
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
    modelOptions
);

UserSchema.pre('save', async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.password, salt);
        this.password = hashPassword;
        next();
    } catch (error) {
        next(error);
    }
});

UserSchema.methods.isCheckPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        next(error);
    }
};

const TestUser = testDatabase.model('user', UserSchema);
const User = userDatabase.model('user', UserSchema);

module.exports = {
    TestUser,
    User,
};
