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
const findTotalRowsWithoutName_Like = async (month = '5') => {
    // May
    if (month === '5') {
        const highlightsDocument = await May_2021Highlights.findOne({});
        return highlightsDocument.totalRows;
    }

    // June
    else if (month === '6') {
        const highlightsDocument = await June_2021Highlights.findOne({});
        return highlightsDocument.totalRows;
    }

    // July
    else if (month === '7') {
        const highlightsDocument = await July_2021Highlights.findOne({});
        return highlightsDocument.totalRows;
    }
};

const findTotalRowsWithName_Like = async (month = '5', name_like = undefined) => {
    let regex = new RegExp(`${name_like}`, 'i');

    // May
    if (month === '5') {
        const list = await May_2021JourneyList.aggregate([
            {
                $match: {
                    $or: [
                        {
                            'Departure station name': {
                                $regex: regex,
                            },
                        },
                        {
                            'Return station name': {
                                $regex: regex,
                            },
                        },
                    ],
                },
            },
        ]);
        return list.length;
    }

    // June
    else if (month === '6') {
        const list = await June_2021JourneyList.aggregate([
            {
                $match: {
                    $or: [
                        {
                            'Departure station name': {
                                $regex: regex,
                            },
                        },
                        {
                            'Return station name': {
                                $regex: regex,
                            },
                        },
                    ],
                },
            },
        ]);

        return list.length;
    }

    // July
    else if (month === '7') {
        const list = await July_2021JourneyList.aggregate([
            {
                $match: {
                    $or: [
                        {
                            'Departure station name': {
                                $regex: regex,
                            },
                        },
                        {
                            'Return station name': {
                                $regex: regex,
                            },
                        },
                    ],
                },
            },
        ]);

        return list.length;
    }
};

module.exports = { findTotalRowsWithoutName_Like, findTotalRowsWithName_Like };
