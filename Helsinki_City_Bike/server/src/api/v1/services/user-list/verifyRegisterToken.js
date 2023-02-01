// Project import
const { Token, User } = require('../../models');

// ========================================== VERIFY TOKEN SERVICE ===============================================

const verifyRegisterToken = async (req) => {
    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) return false

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return false

        await User.updateOne({ _id: user._id, verified: true });
        await Token.findByIdAndRemove(token._id);

        return true;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = verifyRegisterToken;
