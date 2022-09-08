const router = require('express').Router();
const { orderController } = require('../controllers');
const { verifyToken, verifyAdminToken } = require('../handlers/tokenHandler');

router.post('/', verifyToken, orderController.create);
router.get('/income', verifyAdminToken, orderController.getIncome);
router.get('/', verifyAdminToken, orderController.getAll);
router.get('/:userId', verifyAdminToken, orderController.getUserOrder);
router.put('/:id', verifyAdminToken, orderController.update);
router.delete('/:id', verifyAdminToken, orderController.delete);


module.exports = router;
