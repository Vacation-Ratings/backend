'use strict';

const express = require('express');

const apiRoutes = express.Router();

// apiRoutes.get('/user:id', handleGetUser);
// apiRoutes.post('/user', handleNewUser);
apiRoutes.put('/user:id', handleUpdateUser);
apiRoutes.delete('/user:id', handleDeleteUser);

// async function handleGetUser (req, res) {
//   const id = req.params.id;
//   let user = await req.user.get(id);
//   res.status(200).json(user);
// }

// async function handleNewUser (req, res) {
//   let obj = req.body;
//   let newUser = await req.user.create(obj);
//   res.status(201).json(newUser);
// }

async function handleUpdateUser (req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedUser = await req.user.update(id, obj);
  res.status(200).json(updatedUser);
}

async function handleDeleteUser (req, res) {
  let id = req.params.id;
  let deletedUser = await req.user.delete(id);
  res.status(200).json(deletedUser);
}

module.exports = apiRoutes;