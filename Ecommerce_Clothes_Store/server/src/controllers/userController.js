const mongoose = require('mongoose');
const { User } = require('../models');
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');

// REGISTER: /api/user/register
exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(403).json('This email is already used for another account');

        user = await User.findOne({ username });
        if (user) return res.status(403).json('This user is already existed');

        const newUser = new User({
            ...req.body,
            password: CryptoJs.AES.encrypt(password, process.env.PASSWORD_SECRET_KEY).toString(),
        });
        const savedUser = await newUser.save();

        res.status(201).json({
            user: savedUser,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// LOGIN: /api/user/login
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(401).json('Wrong password or user name');

        const decryptPwd = CryptoJs.AES.decrypt(
            user.password,
            process.env.PASSWORD_SECRET_KEY
        ).toString(CryptoJs.enc.Utf8);
        if (decryptPwd !== password) return res.status(401).json('Wrong password or user name');

        const token = jwt.sign(
            {
                id: user._id,
            },
            process.env.TOKEN_SECRET_KEY,
            { expiresIn: '3d' }
        );
        user.password = undefined;

        res.status(200).json({
            user,
            token,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// GET: /api/user/

// UPDATE: /api/user/:id
exports.update = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user && user._id.toString() !== req.params.id)
            return res.status(403).json('This name is already used by another user!');

        user = await User.findOne({ email });
        if (user && user._id.toString() !== req.params.id)
            return res.status(403).json('This email is already used by another user!');

        if (password) {
            req.body.password = CryptoJs.AES.encrypt(
                password,
                process.env.PASSWORD_SECRET_KEY
            ).toString();
        }

        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );

        res.status(200).json(updateUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// DELETE: /api/user/:id
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.status(200).json('User has been deleted!');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
