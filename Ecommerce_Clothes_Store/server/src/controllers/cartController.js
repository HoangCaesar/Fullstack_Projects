const { Cart } = require('../models');

// CREATE: /api/cart/
exports.create = async (req, res) => {
    try {
        const newCart = new Cart(req.body);
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// GET ALL: /api/cart/
exports.getAll = async (req, res) => {
    try {
        const list = await Cart.find({}).sort({ createdAt: -1 });
        res.status(200).json(list);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// GET USER CART: /api/cart/:userId
exports.getUserCart = async (req, res) => {
    const { userId } = req.params;
    try {
        const cart = await Cart.findOne({ userId });
        res.status(200).json(cart);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// UPDATE: /api/cart/:id
exports.update = async (req, res) => {
    const { id } = req.params;
    try {
        const updateCart = await Cart.findByIdAndUpdate(
            id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updateCart);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// DELETE: /api/cart/:id
exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        await Cart.findByIdAndDelete(id);
        res.status(200).json('Order has been deleted!');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
