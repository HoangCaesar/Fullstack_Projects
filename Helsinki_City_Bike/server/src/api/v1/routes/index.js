const router = require('express').Router();

/* Journey List Route */
router.use('/journeylist', require('./journeyList.route'));
router.use('/highlights', require('./highlights.route'));
router.use('/stationlist', require('./stationList.route'));

module.exports = router;
