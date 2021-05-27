const mongoose = require('mongoose');

const ratingsSchema = new mongoose.Schema({
  roadId: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  ratedBy: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  roadSurface: {
    type: Number,
    required: true,
    max: 10,
    min: 1,
  },
  technicalMeans: {
    type: Number,
    required: true,
    max: 10,
    min: 1,
  },
  engineeringArrangement: {
    type: Number,
    required: true,
    max: 10,
    min: 1,
  },
  serviceObjects: {
    type: Number,
    required: true,
    max: 10,
    min: 1,
  },
  sanitaryElements: {
    type: Number,
    required: true,
    max: 10,
    min: 1,
  },
  artificialConstructions: {
    type: Number,
    required: true,
    max: 10,
    min: 1,
  },
  mean: {
    type: Number,
    required: true,
    max: 10,
    min: 1,
  },
});

module.exports = mongoose.model('Ratings', ratingsSchema);
