const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Project import
const { testDatabase, userDatabase } = require('../databases/init.multi.mongodb');

const tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
});

const TestToken = testDatabase.model('token', tokenSchema);
const Token = userDatabase.model('token', tokenSchema);

module.exports = { TestToken, Token };
