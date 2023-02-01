const router = require('express').Router();

/* Journey List Route */
router.use('/highlights', require('./highlights.route'));
router.use('/journeylist', require('./journeyList.route'));
router.use('/stationlist', require('./stationList.route'));
router.use('/user', require('./user.route'));

module.exports = router;
