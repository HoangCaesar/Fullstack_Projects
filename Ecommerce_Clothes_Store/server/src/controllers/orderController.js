const { Order } = require('../models');

// CREATE: /api/order/
exports.create = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        console.log(savedOrder);
        res.status(200).json(savedOrder);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// GET ALL: /api/order/
exports.getAll = async (req, res) => {
    try {
        const list = await Order.find({}).sort({ createdAt: -1 });
        res.status(200).json(list);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// GET USER ORDER: /api/order/:userId
exports.getUserOrder = async (req, res) => {
    const { userId } = req.params;
    try {
        const order = await Order.findOne({ userId });
        res.status(200).json(order);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// UPDATE: /api/order/:id
exports.update = async (req, res) => {
    const { id } = req.params;
    try {
        const updateOrder = await Order.findByIdAndUpdate(
            id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updateOrder);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// DELETE: /api/order/:id
exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        await Order.findByIdAndDelete(id);
        res.status(200).json('Order has been deleted!');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// GET MONTHLY INCOME: /api/order/income

exports.getIncome = async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: '$createdAt' },
                    sales: '$amount',
                },
            },
            {
                $group: {
                    _id: '$month',
                    total: { $sum: '$sales' },
                },
            },
        ]);
        console.log(income);
        res.status(200).json(income);
    } catch (err) {}
};
