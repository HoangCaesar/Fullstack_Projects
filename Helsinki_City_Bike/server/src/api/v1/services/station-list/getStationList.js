// Project import
const { StationList } = require('../../models');

const getStationList = async (
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
        if (sort === undefined) {
            const list = await StationList.find({}).skip(skip).limit(Number(limit));
            return list;
        } else {
            const list = await StationList.find({}).sort(sortInfo).skip(skip).limit(Number(limit));
            return list;
        }
    }
    // Name_like
    else {
        if (sort === undefined) {
            const list = await StationList.aggregate([
                {
                    $match: {
                        $or: [
                            {
                                station: {
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
            const list = await StationList.aggregate([
                {
                    $match: {
                        $or: [
                            {
                                station: {
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
};

module.exports = getStationList;
