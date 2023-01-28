// Project import
const { calculateHighlights, findHighlights } = require('../services');

// ======================================== JOURNEY LIST CONTROLLER =======================================
const getHighlights = async (req, res, next) => {
    try {
        await calculateHighlights();
        const data = await findHighlights();
        
        res.json({
            status: 'success',
            data,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getHighlights,
};
