// Project import
const { findJourneyList, findTotalRows } = require('../services');

// ======================================== JOURNEY LIST CONTROLLER =======================================
const getAll = async (req, res, next) => {
    const { _month, _page, _limit, _sort, _order, name_like } = req.query;
    try {
        const list = await findJourneyList(
            _month === '' ? undefined : _month,
            _page === '' ? undefined : _page,
            _limit === '' ? undefined : _limit,
            _sort === '' ? undefined : _sort,
            _order === '' ? undefined : _order,
            name_like
        );
        
        const totalRows = await findTotalRows(_month === '' ? undefined : _month);

        const pagination = {
            _month: _month || 5,
            _page: Number(_page) || 1,
            _limit: _limit || 10,
            _totalRows: totalRows,
        };
        res.json({
            data: list,
            pagination,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAll,
};

