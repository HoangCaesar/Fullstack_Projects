// Project import
const { StationList } = require('../../models');

const getOneStation = async (id) => {
    const station = await StationList.findOne({ _id: id });
    return station;
};

module.exports = getOneStation;
