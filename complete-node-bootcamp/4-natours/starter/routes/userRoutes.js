const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgortPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Proetct all routes after authController middleware is called
router.use(authController.protect);
router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
);

router.get(
  '/userProfile',
  userController.getUserProfile,
  userController.getUser
);
router.patch('/updateMe', userController.updateMe);
router.delete('/deleteMe', userController.deleteMe);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/id=:id')
  .patch(userController.updateUser)
  .get(userController.getUser)
  .delete(userController.deleteUser);

module.exports = router;
