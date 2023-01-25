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
        totalRows: {
            type: Number,
        },
        'totalDuration(hours)': {
            type: Number,
        },
        'totalDistance(km)': {
            type: Number,
        },
        longestDuration: {
            type: Number,
        },
        longestDistance: {
            type: Number,
        },
        averageDuration: {
            type: Number,
        },
        averageDistance: {
            type: Number,
        },
    },
    modelOptions
);

const TestHighlights = testDatabase.model('highlights', journeylistSchema);
const May_2021Highlights = may_2021Database.model('highlights', journeylistSchema);
const June_2021Highlights = june_2021Database.model('highlights', journeylistSchema);
const July_2021Highlights = july_2021Database.model('highlights', journeylistSchema);

module.exports = {
    TestHighlights,
    May_2021Highlights,
    June_2021Highlights,
    July_2021Highlights,
};
