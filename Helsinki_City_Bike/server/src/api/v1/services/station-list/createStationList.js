// Project import
const { StationList } = require('../../models');

const createStationList = async (data) => {
    try {
        StationList.insertMany(data, (error, docs) => {
            if (error) {
                console.error(error);
            } else {
                console.log(`${docs.length} documents were inserted`);
            }
        });
    } catch (error) {
        throw new Error(error)
    }
};

module.exports = createStationList;
