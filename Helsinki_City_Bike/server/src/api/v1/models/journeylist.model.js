const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {
    testDatabase,
    may_2021Database,
    june_2021Database,
    july_2021Database,
} = require('../databases/init.multi.mongodb');

// Project import
const modelOptions = require('./modelOptions');

// ========================================== JOURNEY LIST MODEL ===============================================

const journeylistSchema = new Schema(
    {
        Departure: {
            type: String,
            required: true,
        },
        Return: {
            type: String,
            required: true,
        },
        'Departure station id': {
            type: String,
            required: true,
        },
        'Departure station name': {
            type: String,
            required: true,
        },
        'Return station id': {
            type: String,
            required: true,
        },
        'Return station name': {
            type: String,
            required: true,
        },
        'Covered distance (m)': {
            type: String,
            required: true,
        },
        'Duration (sec': {
            type: mongoose.Schema.Types.Mixed,
        },
    },
    modelOptions
);

const TestJourneyList = testDatabase.model('journey_list', journeylistSchema);
const May_2021JourneyList = may_2021Database.model('journey_list', journeylistSchema);
const June_2021JourneyList = june_2021Database.model('journey_list', journeylistSchema);
const July_2021JourneyList = july_2021Database.model('journey_list', journeylistSchema);

module.exports = {
    TestJourneyList,
    May_2021JourneyList,
    June_2021JourneyList,
    July_2021JourneyList,
};
