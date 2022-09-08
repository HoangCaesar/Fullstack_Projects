const mongoose = require('mongoose');
const { schemaOptions } = require('./schemOptions');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        products: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
        amount: {
            type: Number,
            required: true,
        },
        address: {
            type: Object,
            required: true,
        },
        status: {
            type: String,
            default: 'pending',
        },
    },
    schemaOptions
);

module.exports = mongoose.model('Order', orderSchema);
