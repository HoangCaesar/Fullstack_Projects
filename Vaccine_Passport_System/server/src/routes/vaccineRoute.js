const router = require('express').Router();
const tokenHandler = require('../handlers/tokenHandler');
const { vaccineController, vaccineLotController } = require('../controllers');

// vaccine created by admin
router.post(
    '/',
    tokenHandler.verifyAdminToken,
    vaccineController.create
);

router.get(
    '/',
    tokenHandler.verifyAdminToken,
    vaccineController.getAll
);

router.get(
    '/:id',
    tokenHandler.verifyAdminToken,
    vaccineController.getOne
);

router.put(
    '/:id',
    tokenHandler.verifyAdminToken,
    vaccineController.update
);

router.delete(
    '/:id',
    tokenHandler.verifyAdminToken,
    vaccineController.delete
);

// vaccine lot

router.post(
    '/lots',
    tokenHandler.verifyAdminToken,
    vaccineLotController.create
);

router.get(
    '/lots/get-all',
    tokenHandler.verifyAdminToken,
    vaccineLotController.getAll
);

router.get(
    '/lots/get-all/:id',
    tokenHandler.verifyAdminToken,
    vaccineLotController.getOne
);

router.put(
    '/lots/get-all/:id',
    tokenHandler.verifyAdminToken,
    vaccineLotController.update
);

router.delete(
    '/lots/get-all/:id',
    tokenHandler.verifyAdminToken,
    vaccineLotController.delete
);

module.exports = router;
