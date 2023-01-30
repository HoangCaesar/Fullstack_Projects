// Project import
const { findStationlist, findAddress, countJourney, createStationList } = require('../services');

// ======================================== STATION LIST CONTROLLER =======================================

const createList = async (req, res, next) => {
    try {
        const infoStation = [];
        // find the list of stations (1)
        const stationList = await findStationlist();
        // find address of each station (2)
        const addressInfo = await findAddress(stationList);
        // count the number of departure and return of each station (3)
        // add (1),(2) and (3) to infoStation
        for (const station of stationList) {
            const count = await countJourney(station);
            // find index of a station in stationList
            const findIndexOfStation = (element) => element === station;
            const indexOfStation = stationList.findIndex(findIndexOfStation)

            infoStation.push({
                station,
                address: addressInfo[indexOfStation],
                count,
            });
        }

        await createStationList(infoStation);

        res.json({
            status: 'success',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createList,
};
