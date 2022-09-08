const router = require('express').Router();
const { userController } = require('../controllers');

router.post('/', userController.register);

module.exports = router;