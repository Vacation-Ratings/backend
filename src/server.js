'use strict';

// Third party libraries
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Esoteric imports
const vacationRoutes = require('./routes/vacation.js');
const logger = require('./middleware/logger.js');

// Instantiating the server
const express = require('express');
const app = express();
app.use(logger);
app.use(cors());
app.use(express.json());

// Database things
const PORT = process.env.PORT || 3001;

//===============Mongoose database setup===============
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.once('open', function () {
  console.log(`Database connection successful!`);
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});

app.use(vacationRoutes);
