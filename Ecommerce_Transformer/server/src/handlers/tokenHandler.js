const jwt = require('jsonwebtoken');
const { User } = require('../models');

const tokenDecode = (req) => {
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader);
    
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ')[1];
        try {
            const tokenDecoded = jwt.verify(bearer, process.env.TOKEN_SECRET_KEY);
            return tokenDecoded;
        } catch (err) {
            return false;
        }
    } else {
        return false;
    }
};

exports.verifyToken = async (req, res, next) => {
    const tokenDecoded = tokenDecode(req);

    if (tokenDecoded) {
        const user = await User.findById(tokenDecoded.id);
        if (!user) return res.status(403).json('Not allowed');

        req.user = user;
        next();
    } else {
        return res.status(401).json('Unauthorized');
    }
};
