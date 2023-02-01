// Project import
const { StationList } = require('../../models');

// ======================================== HIGHLIGHT SERVICE =======================================
const findTotalRowsWithoutName_Like = async () => {
    const totalRows = await StationList.estimatedDocumentCount()
        .then((count) => {
            return count;
        })
        .catch((err) => {
            throw err;
        });

    return totalRows;
};

const findTotalRowsWithName_Like = async (name_like = undefined) => {
    let regex = new RegExp(`${name_like}`, 'i');

    const list = await StationList.aggregate([
        {
            $match: {
                $or: [
                    {
                        station: {
                            $regex: regex,
                        },
                    },
                ],
            },
        },
    ]);
    return list.length;
};

module.exports = { findTotalRowsWithoutName_Like, findTotalRowsWithName_Like };
