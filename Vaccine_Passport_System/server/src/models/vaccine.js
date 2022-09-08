const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');
const Schema = mongoose.Schema;

const vaccineSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
}, schemaOptions);

module.exports = mongoose.model('Vaccine', vaccineSchema);