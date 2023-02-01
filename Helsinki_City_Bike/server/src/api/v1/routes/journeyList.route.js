const router = require('express').Router();
const { journeyListController } = require('../controllers');

/* GET Journey List */
router.get('/', journeyListController.getAll);

module.exports = router;
