const findJourneyList = require('../services/journey-list/findJourneyList');

const getAll = async (req, res, next) => {
    const { _month, _page, _limit, _sort, _order } = req.query;
    try {
        if (_month === '') {
            findJourneyList(undefined, _page, _limit, _sort, _order);
        } else if (_page === '') {
            findJourneyList(_month, undefined, _limit, _sort, _order);
        } else if (_limit === '') {
            findJourneyList(_month, _page, undefined, _sort, _order);
        } else if (_sort === '') {
            findJourneyList(_month, _page, _limit, undefined, _order);
        } else if (_order === '') {
            findJourneyList(_month, _page, _limit, _sort, undefined);
        }

        const list = findJourneyList(_month, _page, _limit, _sort, _order);

        res.json({
            status: 'success',
            elements: [
                {
                    msg: 'Post a user!',
                },
            ],
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAll,
};
