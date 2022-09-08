const router = require('express').Router();

/* GET home page. */
router.use('/user', require('./userRoute'));
router.use('/admin', require('./adminRoute'));
router.use('/product', require('./productRoute'));
router.use('/cart', require('./cartRoute'));
router.use('/order', require('./orderRoute'));
router.use('/payment', require('./paymentRoute'));

module.exports = router;
