const router = require('express').Router();
const { adminController } = require('../controllers');

router.get('/', adminController.helloAdmin);

module.exports = router;