const { Product } = require('../models');

// CREATE: /api/product/
exports.create = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// GET ALL PRODUCTS: /api/product/
exports.getAll = async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let list;
        if (qNew) {
            list = await Product.find({}).limit(5).sort({ createdAt: -1 });
        } else if (qCategory) {
            list = await Product.find({categories: qCategory}).limit(5).sort({ createdAt: -1 });
        } else {
            list = await Product.find({}).sort({ createdAt: -1 });
        }
        res.status(200).json(list);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// GET PRODUCT: /api/product/:id
exports.getOne = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// UPDATE: /api/product/:id
exports.update = async (req, res) => {
    const { id } = req.params;
    try {
        const updateProduct = await Product.findByIdAndUpdate(
            id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updateProduct);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};

// DELETE: /api/product/:id
exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json('Product has been deleted!');
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
