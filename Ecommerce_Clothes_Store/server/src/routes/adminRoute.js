const router = require('express').Router();
const { adminController } = require('../controllers');
const { verifyAdminToken, verifyToken } = require('../handlers/tokenHandler')

router.post('/login', adminController.login);
router.get('/get-all-user', verifyAdminToken, adminController.getAllUser);
router.get('/get-user/:id', verifyToken, adminController.getUser);
router.get('/stats', verifyAdminToken, adminController.getStats);
router.post('/check-token', verifyToken, (req, res) => {
    res.status(200).json('Authorized');
});

module.exports = router;