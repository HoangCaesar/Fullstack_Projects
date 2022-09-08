const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const CryptoJs = require('crypto-js');
const { User, Token } = require('../models');
const { validate } = require('../models/user');
const sendEmail = require('../handlers/emailHandler');

exports.register = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        let user = await User.findOne({ email });
        console.log(user);
        if (user) return res.status(403).json('This email is already used!');
        user = await User.findOne({ username });
        if (user) return res.status(403).json('This name already exists!');

        const newUser = new User({
            ...req.body,
            password: CryptoJs.AES.encrypt(password, process.env.PASSWORD_SECRET_KEY),
        });
        const savedUser = await newUser.save();

        const token = jwt.sign(
            {
                id: savedUser._id,
            },
            process.env.TOKEN_SECRET_KEY
        );

        const newToken = new Token({
            userId: savedUser._id,
            token,
        });
        const savedToken = await newToken.save();

        const message = `${process.env.BASE_URL}/user/verify/${savedUser.id}/${savedToken.token}`;
        await sendEmail(savedUser.email, 'Verify Email', message);

        // res.status(200).json('An Email sent to your account please verify');

        res.status(201).json({
            user: savedUser,
            savedToken,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
