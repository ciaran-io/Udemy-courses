const express = require('express');

const router = express.Router();
const tourController = require('./../controllers/tourController');

router.param('id', tourController.checkParamId);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

router
  .route('/id=:id')
  .patch(tourController.updateTour)
  .get(tourController.getOneTour)
  .delete(tourController.deleteTour);

module.exports = router;
