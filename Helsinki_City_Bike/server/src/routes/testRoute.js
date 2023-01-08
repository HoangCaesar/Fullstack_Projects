const router = require('express').Router();
const { testController } = require('../controllers');

router.get('/', testController.helloTest);

module.exports = router;
