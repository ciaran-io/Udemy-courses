const Review = require('../models/reviewModel');
// const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
// 1. create response for failed request using the wrong fields
// 2. create a response for retrieving all reviews
// 3. create a response for creating a review

// Handle failed update request
exports.checkBody = (req, res, next) => {
  if (!req.body.review || !req.body.rating) {
    return res.status(400).josn({
      status: 'fail',
      message: 'Missing review or rating',
    });
  }
  next();
};

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.user) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

// Create a review
exports.createReview = factory.createOne(Review);
// Update review
exports.updateReview = factory.updateOne(Review);
// Delete review
exports.deleteReview = factory.deletOne(Review);
// Get one review
exports.getReview = factory.getOne(Review);
// Get all reviews
exports.getAllReviews = factory.getAll(Review);
