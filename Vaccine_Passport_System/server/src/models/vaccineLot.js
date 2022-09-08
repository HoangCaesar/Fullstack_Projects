const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');
const Schema = mongoose.Schema;

const vaccineLotSchema = new Schema({
    vaccine: {
        type: Schema.Types.ObjectId,
        ref: 'Vaccine',
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true 
    },
    quantity: {
        type: Number,
        required: true
    },
    vaccinated: {
        type: Number,
        required: true,
        default: 0
    },
}, schemaOptions);

module.exports = mongoose.model('VaccineLot', vaccineLotSchema);