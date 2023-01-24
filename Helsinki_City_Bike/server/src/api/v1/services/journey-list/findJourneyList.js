// Project import
const {
    May_2021JourneyList,
    June_2021JourneyList,
    July_2021JourneyList,
} = require('../../models/journeylist.model');
const sortList = require('../../helpers/sortList')

const findJourneyList = async (
    month = '5',
    page = '1',
    limit = '15',
    sort = undefined,
    order = 'desc'
) => {
    const skip = (Number(page) - 1) * Number(limit);
    // May
    if (month === '5') {
        if (sort === undefined) {
            const list = await May_2021JourneyList.find({}).skip(skip).limit(Number(limit));
            return list;
        } else {
            const list = await May_2021JourneyList.find({})
                .skip(skip)
                .limit(Number(limit))
            const newList = sortList(sort, order, list);
            return newList;
        }
    } 

    // June
    else if (month === '6') {
        const list = await June_2021JourneyList.find({}).skip(skip).limit(Number(limit));
        return list;
    } 
    
    // July
    else if (month === '7') {
        const list = await July_2021JourneyList.find({}).skip(skip).limit(Number(limit));
        return list;
    }
};

module.exports = findJourneyList;
