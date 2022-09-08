const router = require('express').Router();
const { paymentController } = require('../controllers');

router.post('/', paymentController.checkout);

module.exports = router;
