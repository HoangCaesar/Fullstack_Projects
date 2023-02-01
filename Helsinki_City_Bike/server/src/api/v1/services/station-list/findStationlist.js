// Project import
const { May_2021JourneyList, June_2021JourneyList, July_2021JourneyList } = require('../../models');

// ======================================== STATION LIST SERVICE - FIND THE LIST =======================================

const findStationlist = async () => {
    // Departure
    const departureStationsMay = await May_2021JourneyList.distinct('Departure station name');
    const departureStationsJune = await June_2021JourneyList.distinct('Departure station name');
    const departureStationsJuly = await July_2021JourneyList.distinct('Departure station name');

    const allDepartureStations = [
        ...departureStationsMay,
        ...departureStationsJune,
        ...departureStationsJuly,
    ];
    const uniqueDepartureStations = [...new Set(allDepartureStations)];

    // Return
    const returnStationsMay = await May_2021JourneyList.distinct('Return station name');
    const returnStationsJune = await June_2021JourneyList.distinct('Return station name');
    const returnStationsJuly = await July_2021JourneyList.distinct('Return station name');

    const allReturnStations = [...returnStationsMay, ...returnStationsJune, ...returnStationsJuly];
    const uniqueReturnStations = [...new Set(allReturnStations)];

    const allStations = [...uniqueDepartureStations, ...uniqueReturnStations];
    // we use the Set object to remove any duplicates from allStations and store the result in uniqueStations
    const uniqueAllStations = [...new Set(allStations)];

    return uniqueAllStations;
};

module.exports = findStationlist;
