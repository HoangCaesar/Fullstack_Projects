// Project import
const { May_2021JourneyList, June_2021JourneyList, July_2021JourneyList } = require('../../models');

// ======================================== JOURNEY LIST SERVICE =======================================
const findJourneyList = async (
    month = '5',
    page = '1',
    limit = '10',
    sort = undefined,
    order = 'desc',
    name_like = undefined
) => {
    const skip = (Number(page) - 1) * Number(limit);
    const sortInfo = {};
    sortInfo[sort] = order;
    let regex = new RegExp(`${name_like}`, 'i');
    if (!name_like) {
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
    }
    // Name_like
    else {
        // May
        if (month === '5') {
            if (sort === undefined) {
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
                ])
                    .skip(skip)
                    .limit(Number(limit));
                return list;
            } else {
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
                ])
                    .sort(sortInfo)
                    .skip(skip)
                    .limit(Number(limit));
                return list;
            }
        }

        // June
        else if (month === '6') {
            if (sort === undefined) {
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
                ])
                    .skip(skip)
                    .limit(Number(limit));
                return list;
            } else {
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
                ])
                    .sort(sortInfo)
                    .skip(skip)
                    .limit(Number(limit));
                return list;
            }
        }

        // July
        else if (month === '7') {
            if (sort === undefined) {
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
                ])
                    .skip(skip)
                    .limit(Number(limit));
                return list;
            } else {
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
                ])
                    .sort(sortInfo)
                    .skip(skip)
                    .limit(Number(limit));
                return list;
            }
        }
    }
};

module.exports = findJourneyList;
