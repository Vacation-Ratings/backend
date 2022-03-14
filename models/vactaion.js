'use strict';

const mongoose = require.Schema(
    {

        location: {
            type: String,
            required: [true, 'Location is required'],
            
        },

        country: {
            type: String,
            required: [true, 'Country is required'],
            minlength: [4, 'Country should be at least 4 characters'],
        },

        description: {
            type: String,
            validate: [
              {
                validator: rawValue => {
                  try {
                    JSON.parse(rawValue);
                    return true;
                  } catch (e) {
                    return false;
                  }
                },
                msg: 'Description has incorrect format',

              },
              {
                validator: rawValue => {
                  try {
                    const value = JSON.parse(rawValue);
                    let count = 0;
                    value.blocks.forEach(({ text }) => {
                      count += text.length;
                    });
                    return count > 100;
                  } catch (e) {
                    return false;
                  }
                },
                msg: 'Should have at least 50 characters',
              },
            ],
            required: [true, 'Description is required'],
          },
          duration: {
            type: Number,
            required: [true, 'Duration is required'],
            min: [1, 'Should be at least 1 day'],
            max: [365, 'Should be less than 366 days'],
          },
          rating: {
            type: Number,
            required: [true, 'Rating is required'],
            min: [1, 'Rating is required'],
            max: [5, 'Incorrect value is provided'],
          },
          expences: {
            type: Number,
            required: [true, 'Expenses is required'],
            min: [0, 'Should be non negative'],
          },
          userId: {
            type: String,
            required: true,
          },
        },
        { timestamps: true }
      );
      
      const Trip = mongoose.model('Trip', tripSchema);
      
      module.exports = { Trip };