const router = require('express').Router();

/* Journey List Route */
router.use('/journeylist', require('./journeyList.route'));

module.exports = router;
