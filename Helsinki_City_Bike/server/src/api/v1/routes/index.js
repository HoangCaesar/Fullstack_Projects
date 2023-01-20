const router = require('express').Router();

/* GET home page. */
router.use('/test', require('./testRoute'));

module.exports = router;
