const router = require('express').Router();
const { stationListController } = require('../controllers')

// create list
router.post('/', stationListController.createList);
// get list
router.get('/', stationListController.getList);

module.exports = router;
