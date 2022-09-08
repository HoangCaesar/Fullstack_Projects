const { User } = require("../models/user");

module.exports = {
    Admin: require('./admin'),
    User,
    Token: require('./token'),
};
