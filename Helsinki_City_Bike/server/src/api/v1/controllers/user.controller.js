

// ========================================== USER CONTROLLER ===============================================

const register = async (req, res, next) => {
    try {
        res.json({
            status: 'success',
            data: 'true'
        })
    } catch (err) {
        next(err)
    }
};

module.exports = {
    register
}

