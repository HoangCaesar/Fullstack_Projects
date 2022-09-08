const CryptoJs = require('crypto-js');
const { Admin } = require('../models');

exports.createAdmin = async () => {
    const username = process.env.DEFAULT_ADMIN_USERNAME;
    const password = process.env.DEFAULT_ADMIN_PASSWORD;

    try {
        const admin = await Admin.findOne({ username });
        if (admin !== null) {
            return true
        }
        const newAdmin = new Admin({
            username,
            password: CryptoJs.AES.encrypt(
                password,
                process.env.PASSWORD_SECRET_KEY
            )
        });
        await newAdmin.save();
        console.log('--------------------------');
        console.log('Admin created with');
        console.log(`Username => ${username}`);
        console.log(`Password => ${password}`);
        console.log('--------------------------');
    }
    catch (err) {
        console.log(err);
        return false
    }
}