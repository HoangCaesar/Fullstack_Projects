// Project import
const {
    May_2021Highlights,
    June_2021Highlights,
    July_2021Highlights,
    May_2021JourneyList,
    June_2021JourneyList,
    July_2021JourneyList,
} = require('../../models');

// ======================================== COMMON SERVICE: CHECKLENGTH =======================================

const checkLength = async () => {
    // May
    const highlightsDocumentInMay = await May_2021Highlights.findOne();

    const totalRowsInMay = await May_2021JourneyList.estimatedDocumentCount()
        .then((count) => {
            return count;
        })
        .catch((err) => {
            throw err;
        });
    // June
    const highlightsDocumentInJune = await June_2021Highlights.findOne();

    const totalRowsInJune = await June_2021JourneyList.estimatedDocumentCount()
        .then((count) => {
            return count;
        })
        .catch((err) => {
            throw err;
        });
    // July
    const highlightsDocumentInJuly = await July_2021Highlights.findOne();

    const totalRowsInJuly = await July_2021JourneyList.estimatedDocumentCount()
        .then((count) => {
            return count;
        })
        .catch((err) => {
            throw err;
        });

    if (
        highlightsDocumentInMay.totalRows !== totalRowsInMay ||
        highlightsDocumentInJune.totalRows !== totalRowsInJune ||
        highlightsDocumentInJuly.totalRows !== totalRowsInJuly
    ) {
        return true;
    }

    return false;
};

module.exports = checkLength;
