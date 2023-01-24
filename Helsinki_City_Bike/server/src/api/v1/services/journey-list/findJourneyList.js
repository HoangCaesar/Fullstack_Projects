// Project import
const { May_2021JourneyList, June_2021JourneyList, July_2021JourneyList } = require('../../models');

// ======================================== JOURNEY LIST SERVICE =======================================
const findJourneyList = async (
    month = '5',
    page = '1',
    limit = '15',
    sort = undefined,
    order = 'desc'
) => {
    const skip = (Number(page) - 1) * Number(limit);
    const sortInfo = {};
    sortInfo[sort] = order;
    // May
    if (month === '5') {
        if (sort === undefined) {
            const list = await May_2021JourneyList.find({}).skip(skip).limit(Number(limit));
            return list;
        } else {
            const list = await May_2021JourneyList.find({})
                .sort(sortInfo)
                .skip(skip)
                .limit(Number(limit));
            return list;
        }
    }

    // June
    else if (month === '6') {
        if (sort === undefined) {
            const list = await June_2021JourneyList.find({}).skip(skip).limit(Number(limit));
            return list;
        } else {
            const list = await June_2021JourneyList.find({})
                .sort(sortInfo)
                .skip(skip)
                .limit(Number(limit));
            return list;
        }
    }

    // July
    else if (month === '7') {
        if (sort === undefined) {
            const list = await July_2021JourneyList.find({}).skip(skip).limit(Number(limit));
            return list;
        } else {
            const list = await July_2021JourneyList.find({})
                .sort(sortInfo)
                .skip(skip)
                .limit(Number(limit));
            return list;
        }
    }
};

module.exports = findJourneyList;
