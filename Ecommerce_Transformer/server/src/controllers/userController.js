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

        await sendEmail(savedUser.email, 'Please Verify Your Email', message);

        res.status(200).json('An Email sent to your account please verify');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

exports.verify = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) return res.status(400).send('Invalid link');

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send('Invalid link');

        await User.updateOne({ _id: user._id, verified: true });
        await Token.findByIdAndRemove(token._id);

        res.send('Email verified sucessfully');
    } catch (error) {
        res.status(400).send('An error occured');
    }
};
