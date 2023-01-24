const getAll = async (req, res, next) => {
    try {
        console.log(a)
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
