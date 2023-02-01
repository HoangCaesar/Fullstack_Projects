const router = require('express').Router();
const { userController } = require('../controllers');

// register
router.post('/register', userController.register);
// verify
router.get('/verify/:id/:token', userController.verify);
// login
router.post('/login', userController.login);

module.exports = router;
