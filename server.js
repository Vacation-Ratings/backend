'use strict';

const express = require('express');

// Get
app.get('/api/auth', auth, (req, res) => {
    res.json({
      isAuth: true,
      id: req.user._id,
      email: req.user.email,
      name: req.user.name,
      lastname: req.user.lastname,
      avatar: req.user.avatar,
    });
  });

// POST
app.post('/api/vacation', (req, res) => {
    const trip = new Trip(req.body);
  
    trip.save((err, doc) => {
      if (err) {
        return res.status(200).json({
          success: false,
          error: err,
        });
      }
  
      return res.status(200).json({
        success: true,
        tripId: doc._id,
      });
    });
  });
  
  app.post('/api/register', (req, res) => {
    const user = new User(req.body);
  
    user.save(err1 => {
      if (err1) return res.json({ success: false, error: err1 });
  
      return user.generateToken((err2, doc) => {
        if (err2) return res.status(400).send(err2);
  
        return res.cookie('auth', doc.token).json({
          success: true,
          id: doc._id,
        });
      });
    });
  });
  
  app.post('/api/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err1, user) => {
      if (err1) return res.status(400).send(err1);
      if (!user) {
        return res.json({
          isAuth: false,
          error: {
            field: 'email',
            message: 'Email not found',
          },
        });
      }
  

      user.comparePassword(req.body.password, (err2, isMatch) => {
        if (err2) return res.status(400).send(err2);
        if (!isMatch) {
          return res.json({
            isAuth: false,
            error: {
              field: 'password',
              message: 'Wrong password',
            },
          });
        }
    }
