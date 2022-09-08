const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');
const Schema = mongoose.Schema;

const userVaccineSchema = new Schema({
    vaccine: {
        type: Schema.Types.ObjectId,
        ref: 'Vaccine',
        required: true
    },
    vaccineLot: {
        type: Schema.Types.ObjectId,
        ref: 'VaccineLot',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, schemaOptions);

module.exports = mongoose.model('UserVaccine', userVaccineSchema);