'use strict';

const mongoose = require('mongoose');

const vacationSchema = new mongoose.Schema({
    // City
    location: { type: String, required: true },
    country: { type: String, required: true, minlength: 4 },
    description: { type: String, required: true },
    duration: { type: Number },
    rating: { type: Number, required: true, min: 0, max: 5 },
    expences: { type: Number },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

const VacationModel = mongoose.model('Vacation', vacationSchema);

module.exports = VacationModel;
