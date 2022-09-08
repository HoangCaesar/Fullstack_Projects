const mongoose = require('mongoose');
const { schemaOptions } = require('./schemOptions');
const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        categories: {
            type: Array,
        },
        size: {
            type: Array,
        },
        color: {
            type: Array,
        },
        price: {
            type: Number,
            required: true,
        },
        inStock: {
            type: Boolean,
            default: true,
        },
    },
    schemaOptions
);

module.exports = mongoose.model('Product', productSchema);
