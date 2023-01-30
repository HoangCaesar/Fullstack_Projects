const router = require('express').Router();
const { stationListController } = require('../controllers')

// create list
router.post('/', stationListController.createList);
// get list
router.get('/', stationListController.getList);
// get one station
router.get('/:id', stationListController.getOne);

module.exports = router;
