const router = require('express').Router();
const { userController } = require('../controllers');

// register
router.post('/register', userController.register);

module.exports = router;
