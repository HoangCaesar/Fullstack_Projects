const router = require('express').Router();
const { userController } = require('../controllers');

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

module.exports = router;
