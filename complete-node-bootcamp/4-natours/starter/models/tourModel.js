const mongoose = require('mongoose');
const slugify = require('slugify');

// const validator = require('validator');

const tourSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a description'],
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty is either: easy, medium, difficult',
      },
    },
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration'],
    },
    guides: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
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
      maxlength: [
        40,
        'A tour name must have have less than or equal 40 characters',
      ],
      minlength: [
        10,
        'A tour name must have have more than or equal 10 characters',
      ],
      // validate: [validator.isAlpha, 'Tour name must only contain characters'],
    },
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: 'Point',
        },
        coordinantes: [Number],
        address: String,
        description: String,
        day: Number,
      },
    ],
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size'],
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price'],
    },
    priceDiscount: {
      type: Number,
      validate: {
        // only validates on new document creation
        validator: function (val) {
          return val < this.price;
        },
        // value is refering to the discount input request
        message: 'Discount price ({value}) should be below regular price',
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
    },
    ratingsQuantitiy: {
      type: Number,
      default: 0,
    },
    secretTours: {
      type: Boolean,
      default: false,
    },
    startDates: [Date],
    startLocation: {
      // GeoJSON
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinantes: [Number],
      address: String,
      description: String,
    },
    slug: String,
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a decription'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

tourSchema.virtual('durationOfWeeks').get(function () {
  return this.duration / 7;
});

// Virtual populate
tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id',
});

// DOCUMENT MIDDLEWARE: runs bedore .save() and .create()
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// tourSchema.pre('save', async function (next) {
//   const guidesPromise = this.guides.map(async (id) => await User.findById(id));
//   this.guides = await Promise.all(guidesPromise);

//   next();
// });

tourSchema.pre(/^find/, function (next) {
  this.find({ secretTours: { $ne: true } });
  this.start = Date.now();
  next();
});

// AGGREGATION MIDDLEWARE
tourSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { secretTours: { $ne: true } } });
  console.log(this.pipeline());
  next();
});

tourSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'guides',
    select: '-__V -passwordChangedAt ',
  });

  next();
});

tourSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds!`);
  console.log(docs);
  next();
});

// // tourSchema.pre('save', (next) => {
//   console.log('will save document');
//   next();
// });

// tourSchema.post('save', (doc, next) => {
//   console.log(doc);
//   next();
// });

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
