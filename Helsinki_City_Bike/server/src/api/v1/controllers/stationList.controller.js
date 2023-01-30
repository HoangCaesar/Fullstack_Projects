// Project import
const {
    findStationlist,
    findAddress,
    countJourney,
    createStationList,
    checkLength,
    getStationList,
    findTotalRowsInStationList,
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
    const { _page, _limit, _sort, _order, name_like } = req.query;
    console.log(_page, _limit, _sort, _order, name_like);
    try {
        const data = await getStationList(
            _page === '' ? undefined : _page,
            _limit === '' ? undefined : _limit,
            _sort === '' ? undefined : _sort,
            _order === '' ? undefined : _order,
            name_like
        );
        let pagination;

        if (!name_like) {
            const totalRows = await findTotalRowsInStationList.findTotalRowsWithoutName_Like();
            pagination = {
                _page: Number(_page) || 1,
                _limit: _limit || 10,
                _totalRows: totalRows,
            };
        } else {
            const totalRows = await findTotalRowsInStationList.findTotalRowsWithName_Like(
                name_like
            );
            pagination = {
                _page: Number(_page) || 1,
                _limit: _limit || 10,
                _totalRows: totalRows,
            };
        }

        res.json({
            status: 'success',
            data,
            pagination,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createList,
    getList,
};
