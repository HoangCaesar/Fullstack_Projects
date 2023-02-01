const jwt = require('jsonwebtoken');

// Project import
const { Token } = require('../../models');

// ========================================== VERIFY TOKEN SERVICE ===============================================

const createToken = async (savedUser) => {
    // eslint-disable-next-line no-undef
    const { JWT_TOKEN_SECRET_KEY } = process.env;

    try {
        const token = jwt.sign(
            {
                id: savedUser._id,
            },
            JWT_TOKEN_SECRET_KEY
        );

        const newToken = new Token({
            userId: savedUser._id,
            token,
        });
        const savedToken = await newToken.save();

        return savedToken;
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = createToken;
