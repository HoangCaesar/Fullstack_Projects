const router = require('express').Router();
const { highlightsController } = require('../controllers')

/* GET Highlights */
router.get('/', highlightsController.getHighlights);

module.exports = router;
