// Project import
const {
    May_2021Highlights,
    June_2021Highlights,
    July_2021Highlights,
    May_2021JourneyList,
    June_2021JourneyList,
    July_2021JourneyList,
} = require('../../models');

// ======================================== HIGHLIGHT SERVICE =======================================
const findHighlights = async () => {
    // May
    const totalRowsInMay = await May_2021JourneyList.estimatedDocumentCount()
        .then((count) => console.log(count))
        .catch((err) => {
            throw err;
        });
    const totalDurationInMay = await May_2021JourneyList.aggregate([
        {
            $group: {
                _id: null,
                total: {
                    $sum: '$Duration',
                },
            },
        },
    ])
        .then((result) => console.log(result[0].total))
        .catch((err) => {
            throw err;
        });
    // June
    const totalRowsInJune = await June_2021JourneyList.estimatedDocumentCount()
        .then((count) => console.log(count))
        .catch((err) => {
            throw err;
        });
    const totalDurationInJune = await June_2021JourneyList.aggregate([
        {
            $group: {
                _id: null,
                total: {
                    $sum: '$Duration',
                },
            },
        },
    ])
        .then((result) => console.log(result[0].total))
        .catch((err) => {
            throw err;
        });
    // July
    const totalRowsInJuly = await July_2021JourneyList.estimatedDocumentCount()
        .then((count) => console.log(count))
        .catch((err) => {
            throw err;
        });
    const totalDurationInJuly = await July_2021JourneyList.aggregate([
        {
            $group: {
                _id: null,
                total: {
                    $sum: '$Duration',
                },
            },
        },
    ])
        .then((result) => console.log(result[0].total))
        .catch((err) => {
            throw err;
        });
};

module.exports = findHighlights;
