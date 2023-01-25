const router = require('express').Router();

/* Journey List Route */
router.use('/journeylist', require('./journeyList.route'));
router.use('/highlights', require('./highlights.route'));

module.exports = router;
