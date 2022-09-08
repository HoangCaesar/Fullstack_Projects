const router = require('express').Router();
const { productController } = require('../controllers');
const { verifyAdminToken, verifyToken } = require('../handlers/tokenHandler');

router.post('/', verifyAdminToken, productController.create);
router.get('/', productController.getAll);
router.get('/:id', verifyToken, productController.getOne);
router.put('/:id', verifyAdminToken, productController.update);
router.delete('/:id', verifyAdminToken, productController.delete);

module.exports = router;
