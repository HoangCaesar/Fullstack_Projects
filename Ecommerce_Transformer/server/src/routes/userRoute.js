const router = require('express').Router();
const { userController } = require('../controllers');

router.post('/', userController.register);
router.get('/verify/:id/:token', userController.verify);

module.exports = router;