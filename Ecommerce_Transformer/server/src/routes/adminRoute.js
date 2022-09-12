const router = require('express').Router();
const { adminController } = require('../controllers');
const tokenHandler = require('../handlers/tokenHandler');

router.get('/', adminController.helloAdmin);
router.post(
    '/check-token',
    tokenHandler.verifyToken,
    (req, res) => {
        res.status(200).json('Authorized');
    }
);

module.exports = router;