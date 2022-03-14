'use strict';

const express = require('express');
const router = express.Router();
const { Users } = require('../model/user.js');
const basicAuth = require('../middleware/basic.js');
const bearAuth = require('../middleware/bearer.js');

router.post('/signup', async (req, res) => {
  try {
    let userRecord = await Users.create(req.body);
    const output = {
      user: userRecord,
      token: userRecord.token,
    };
    res.status(201).json(output);
  } catch (err) {
    res.status(400).send({ err });
  }
});

router.post('/signin', basicAuth, (req, res, next) => {
  const user = {
    user: req.user,
    token: req.user.token,
  };
  res.status(200).json(user);
});

router.authRouter.get('/users', bearerAuth, permissions('delete'), async (req, res, next) => {
  const userRecords = await users.findAll({});
  const list = userRecords.map(user => user.username);
  res.status(200).json(list);
});

module.exports = router;