const mongoose = require('mongoose');
const { schemaOptions } = require('./schemOptions');
const Schema = mongoose.Schema;

const cartSchema = new Schema(
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
    },
    schemaOptions
);

module.exports = mongoose.model('Cart', cartSchema);
