const router = require('express').Router();
const { userController } = require('../controllers');
const { verifyToken } = require('../handlers/tokenHandler');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/:id', verifyToken, userController.update);
router.delete('/:id', verifyToken, userController.delete);

module.exports = router;
