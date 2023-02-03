const router = require('express').Router();
const { userController } = require('../controllers');
const { verifyAccessToken } = require('../middlewares/verifyToken');

// register
router.post('/register', userController.register);
// verify
router.get('/verify/:id/:token', userController.verify);
// login
router.post('/login', userController.login);
// refresh-token
router.post('/refresh-token', userController.refreshToken);
// logout
router.post('/logout', userController.logout);
// check-accessToken
router.post('/check-accessToken', verifyAccessToken, userController.checkAccessToken);
// check-refreshToken
router.post('/check-refreshToken', userController.checkRefreshToken);


module.exports = router;
