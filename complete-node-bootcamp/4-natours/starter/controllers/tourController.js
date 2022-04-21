const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkParamId = (req, res, next) => {
  const id = Number(req.params.id);
  const tour = tours.find((tour) => tour.id === id);

  !tour
    ? res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    })
    : next();
};

// Handle failed update request
exports.checkBody = (req, res, next) => {
  !req.body.name || !req.body.price
    ? res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    })
    : next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

// get tour by id
exports.getOneTour = (req, res) => {
  const id = Number(req.params.id);
  const tour = tours.find((tour) => tour.id === id);
  res.status(200).json({ status: 'success', data: { tour } });
};

// create a tour
exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = { id: newId, ...req.body };

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

// update a tour
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: 'Updated tour here',
  });
};

// Delete a tour
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success, tour removed',
    data: null,
  });
};
