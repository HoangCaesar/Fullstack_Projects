// Project import
const { findStationlist } = require('../services');

// ======================================== STATION LIST CONTROLLER =======================================

const getList = async (req, res, next) => {
    try {
        const stationList = await findStationlist();
        res.send({
            status: 'success',
            data: [stationList.length],
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getList,
};
