// Project import
const findJourneyList = require('../services/journey-list/findJourneyList');

// ======================================== JOURNEY LIST CONTROLLER =======================================
const getAll = async (req, res, next) => {
    const { _month, _page, _limit, _sort, _order } = req.query;
    try {
        const list = await findJourneyList(
            _month === '' ? undefined : _month,
            _page === '' ? undefined : _page,
            _limit === '' ? undefined : _limit,
            _sort === '' ? undefined : _sort,
            _order === '' ? undefined : _order
        );
        res.json({
            status: 'success',
            data: list,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAll,
};
