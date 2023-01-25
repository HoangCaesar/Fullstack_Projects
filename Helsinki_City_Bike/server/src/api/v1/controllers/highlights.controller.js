// Project import
const { findHighlights } = require('../services');

// ======================================== JOURNEY LIST CONTROLLER =======================================
const getHighlights = async (req, res, next) => {
    try {
        await findHighlights();
        res.json({
            status: 'success',
            data: [1, 2, 3],
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getHighlights,
};
