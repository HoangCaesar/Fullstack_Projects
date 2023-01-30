// Project import
const { StationList } = require('../../models');

const getStationList = async () => {
    try {
        const stationList = await StationList.find({});
        return stationList;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = getStationList;
