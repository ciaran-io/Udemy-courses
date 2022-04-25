const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  images: [String],
  imageCover: {
    type: String,
    required: [true, 'A tour must have a imageCover'],
  },
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  priceDiscount: Number,
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantitiy: {
    type: Number,
    default: 0,
  },
  startDates: [Date],
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a decription'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
