'use strict';

const mongoose = require.Schema(
  {

    id: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: [true, 'Email is required'],
    },

    name: {
      type: String,
      required: [true, 'Name is required'],
    },

    lastname: {
      type: String,
      required: false,
    },

    wishList: {
      type: String,
      required: false,
    },

    description: {
      type: String,
      required: false,
    },

    blogs: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

const Trip = mongoose.model('User', userSchema);

module.exports = { User };