const { Admin, User } = require('../models');
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');

// LOGIN: /api/admin/login
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });
        if (!admin) return res.status(403).json('Wrong username or password');
        const decrytPwd = CryptoJs.AES.decrypt(
            admin.password,
            process.env.PASSWORD_SECRET_KEY
        ).toString(CryptoJs.enc.Utf8);
        if (decrytPwd !== password) return res.status(403).json('Wrong username or password');

        const token = jwt.sign(
            {
                id: admin._id,
            },
            process.env.TOKEN_SECRET_KEY,
            { expiresIn: '1h' }
        );
        admin.password = undefined;

        res.status(200).json({
            admin,
            token,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// GET ALL USER: /api/admin/get-all-user
exports.getAllUser = async (req, res) => {
    const query = req.query.new;
    try {
        const list = query
            ? await User.find({}).limit(5).sort({ createdAt: -1 })
            : await User.find({}).sort({ createdAt: -1 });
        for (const user of list) {
            user.password = undefined;
        }
        res.status(200).json(list);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// GET USER: /api/admin/getUser/:id
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// GET STATS: /api/admin/stats
exports.getStats = async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: '$createdAt' },
                },
            },
            {
                $group: {
                    _id: '$month',
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
