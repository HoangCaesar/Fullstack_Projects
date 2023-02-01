const router = require('express').Router();
const { userController } = require('../controllers');

// register
router.post('/', userController.register);

module.exports = router;
