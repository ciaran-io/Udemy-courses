const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();
// router.param('id', tourController.checkParamId);
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/id=:id')
  .get(tourController.getOneTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
