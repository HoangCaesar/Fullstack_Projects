const { May_2021JourneyList, June_2021JourneyList, July_2021JourneyList } = require('../../models');

const countJourney = async (stationList) => {
    // May
    var returnCountMay = await May_2021JourneyList.aggregate([
        {
            $match: {
                'Return station name': stationList,
            },
        },
        {
            $group: {
                _id: '$Return station name',
                count: { $sum: 1 },
            },
        },
    ]).then((res) => res[0]?.count || 0);

    var departureCountMay = await May_2021JourneyList.aggregate([
        {
            $match: {
                'Departure station name': stationList,
            },
        },
        {
            $group: {
                _id: '$Departure station name',
                count: { $sum: 1 },
            },
        },
    ]).then((res) => res[0]?.count || 0);

    // June
    var returnCountJune = await June_2021JourneyList.aggregate([
        {
            $match: {
                'Return station name': stationList,
            },
        },
        {
            $group: {
                _id: '$Return station name',
                count: { $sum: 1 },
            },
        },
    ]).then((res) => res[0]?.count || 0);

    var departureCountJune = await June_2021JourneyList.aggregate([
        {
            $match: {
                'Departure station name': stationList,
            },
        },
        {
            $group: {
                _id: '$Departure station name',
                count: { $sum: 1 },
            },
        },
    ]).then((res) => res[0]?.count || 0);

    // July
    var returnCountJuly = await July_2021JourneyList.aggregate([
        {
            $match: {
                'Return station name': stationList,
            },
        },
        {
            $group: {
                _id: '$Return station name',
                count: { $sum: 1 },
            },
        },
    ]).then((res) => res[0]?.count || 0);

    var departureCountJuly = await July_2021JourneyList.aggregate([
        {
            $match: {
                'Departure station name': stationList,
            },
        },
        {
            $group: {
                _id: '$Departure station name',
                count: { $sum: 1 },
            },
        },
    ]).then((res) => res[0]?.count || 0);

    return {
        returnCount: {
            returnCountMay,
            returnCountJune,
            returnCountJuly,
        },
        departureCount: {
            departureCountMay,
            departureCountJune,
            departureCountJuly,
        },
    };
};

module.exports = countJourney;
