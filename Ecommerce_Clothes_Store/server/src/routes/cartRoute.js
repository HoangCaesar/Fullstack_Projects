const router = require('express').Router();
const { cartController } = require('../controllers');
const { verifyToken, verifyAdminToken } = require('../handlers/tokenHandler');

router.post('/', verifyToken, cartController.create);
router.get('/', verifyAdminToken, cartController.getAll);
router.get('/:userId', verifyToken, cartController.getUserCart);
router.put('/:id', verifyToken, cartController.update);
router.delete('/:id', verifyToken, cartController.delete);

module.exports = router;
