module.exports = {
    // Journey List
    findJourneyList: require('./journey-list/findJourneyList'),
    calculateHighlights: require('./journey-list/findHighlights').calculate,
    findHighlights: require('./journey-list/findHighlights').find,
    findTotalRows: require('./journey-list/findTotalRows'),
    // Station List
    findStationlist: require('./station-list/findStationlist'),
    findAddress: require('./station-list/findAddress'),
    countJourney: require('./station-list/countJourney'),
    createStationList: require('./station-list/createStationList'),
    getStationList: require('./station-list/getStationList'),
    findTotalRowsInStationList: require('./station-list/findTotalRowsInStationList'),
    getOneStation: require('./station-list/getOneStation'),
    // common
    checkLength: require('./common/checkLength'),
};
