// Project import
const { findStationlist, findAddress, countJourney } = require('../services');

// ======================================== STATION LIST CONTROLLER =======================================

const getList = async (req, res, next) => {
    try {
        const infoStation = []
        const stationList = await findStationlist();
        // const countStation = stationList.map(async (station) => {
        //     const count = await countJourney(station);
        //     return count;
        // });
        for(const station of stationList) {
            const count = await countJourney(station);
            infoStation.push({
                station,
                count
            })
        }

        // const addressInfo = await findAddress('Helsinki');

        res.json({
            status: 'success',
            // data: stationList.length,
            // addressInfo: addressInfo,
            infoStation: infoStation
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getList,
};
