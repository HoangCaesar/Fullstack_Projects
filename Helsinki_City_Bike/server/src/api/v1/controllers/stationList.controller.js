// Project import
const {
    findStationlist,
    findAddress,
    countJourney,
    createStationList,
    checkLength,
    getStationList,
} = require('../services');

// ======================================== STATION LIST CONTROLLER =======================================

const createList = async (req, res, next) => {
    try {
        // If number of documents in dababase changes, reupload Station List
        const isChanged = await checkLength();

        if (isChanged) {
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
                const indexOfStation = stationList.findIndex(findIndexOfStation);

                infoStation.push({
                    station,
                    address: addressInfo[indexOfStation],
                    count,
                });
            }

            await createStationList(infoStation);

            res.json({
                message: 'Uploaded new Station List',
            });
        }

        res.json({
            message: 'Nothing changes',
        });
    } catch (error) {
        next(error);
    }
};

const getList = async (req, res, next) => {
    try {
        const stationList = await getStationList();

        res.json({
            status: 'success',
            data: stationList,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createList,
    getList
};
