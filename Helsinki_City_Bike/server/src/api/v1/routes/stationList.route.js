const router = require('express').Router();
const { stationListController } = require('../controllers')

/* GET Journey List */
router.get('/', stationListController.getList);

module.exports = router;
