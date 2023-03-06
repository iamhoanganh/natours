const express = require('express');
const viewController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingControler = require('../controllers/bookingController');

const router = express.Router();

router.get(
  '/',
  bookingControler.createBooking,
  authController.isLoggedIn,
  viewController.getOverview
);
router.get('/tour/:slug', authController.isLoggedIn, viewController.getTour);

// login
router.get('/login', authController.isLoggedIn, viewController.getLoginForm);
router.get('/me', authController.protect, viewController.getAccount);
router.get('/my-tours', authController.protect, viewController.getMyTours);

module.exports = router;