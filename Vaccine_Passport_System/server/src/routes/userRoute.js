const router = require('express').Router();
const tokenHandler = require('../handlers/tokenHandler');
const { userController } = require('../controllers');

router.post(
    '/',
    tokenHandler.verifyAdminToken,
    userController.create
);

router.get(
    '/',
    tokenHandler.verifyAdminToken,
    userController.getAll 
);

router.get(
    '/:id',
    tokenHandler.verifyAdminToken,
    userController.getOne 
);

router.put(
    '/:id',
    tokenHandler.verifyAdminToken,
    userController.update 
);

router.delete(
    '/:id',
    tokenHandler.verifyAdminToken,
    userController.delete 
);

// add vaccinated to user

router.post(
    '/vaccinated',
    tokenHandler.verifyAdminToken,
    userController.vaccinated
);

// get user's places
router.get(
    '/:userId/place',
    tokenHandler.verifyToken,
    userController.getAllPlace
);

// add check in place user
router.post(
    '/checkin-place',
    tokenHandler.verifyToken,
    userController.checkinPlace
);

// get all place that user checked in
router.get(
    '/:userId/place-visited',
    tokenHandler.verifyToken,
    userController.placeVisited
);

module.exports = router;
