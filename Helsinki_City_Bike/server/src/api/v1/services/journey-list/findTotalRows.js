// Project import
const { May_2021Highlights, June_2021Highlights, July_2021Highlights } = require('../../models');

// ======================================== HIGHLIGHT SERVICE =======================================
const findTotalRows = async (month = '5') => {
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

module.exports = findTotalRows;
