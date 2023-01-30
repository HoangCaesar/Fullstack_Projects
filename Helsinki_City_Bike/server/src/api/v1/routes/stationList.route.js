const router = require('express').Router();
const { stationListController } = require('../controllers')

/* GET Journey List */
router.get('/', stationListController.createList);

module.exports = router;
