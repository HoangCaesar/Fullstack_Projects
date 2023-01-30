const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { testDatabase, stationListDatabase } = require('../databases/init.multi.mongodb');

// Project import
const modelOptions = require('./modelOptions');

// ========================================== STATION LIST MODEL ===============================================
// address ::: nested objects
const addressSchema = new Schema(
    {
        label: String,
        countryCode: String,
        countryName: String,
        stateCode: String,
        state: String,
        county: String,
        city: String,
        district: String,
        street: String,
        postalCode: String,
    },
    modelOptions
);

// position ::: nested objects
const positionSchema = new Schema(
    {
        lat: Number,
        lng: Number,
    },
    modelOptions
);

// combine address
const addressObjectSchema = new Schema(
    {
        address: addressSchema,
        position: positionSchema,
    },
    modelOptions
);

// count ::: nested objects
const returnCountSchema = new Schema(
    {
        returnCountMay: Number,
        returnCountJune: Number,
        returnCountJuly: Number,
    },
    modelOptions
);

const departureCountSchema = new Schema(
    {
        departureCountMay: Number,
        departureCountJune: Number,
        departureCountJuly: Number,
    },
    modelOptions
);

// combine count
const countObjectSchema = new Schema(
    {
        returnCount: returnCountSchema,
        departureCount: departureCountSchema,
    },
    modelOptions
);

// main schema
const stationlistSchema = new Schema(
    {
        station: String,
        address: addressObjectSchema,
        count: countObjectSchema,
    },
    modelOptions
);

const StationList = stationListDatabase.model('station_list', stationlistSchema);
const TestStationList = testDatabase.model('station_list', stationlistSchema);

module.exports = {
    StationList,
    TestStationList,
};
