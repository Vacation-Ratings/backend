'use strict';

const express = require('express');
const apiRoutes = express.Router();

apiRoutes.get('/vacation', handelGetAll);
apiRoutes.post('/vacation', handleCreate);
apiRoutes.delete('/vacation', handleDelete);
apiRoutes.put('/vacation',handleUpdate);

async function handleGetAll(req, res) {
    let allVacation = await ListItem.findAll();
    res.status(200).json(allVacation);
}

async function handleCreate(req, res) {
    let obj = req.body;
    let newTrip = await ListItem.create(obj);
    console.log(newTrip);
    res.status(201).json(newTrip);
}

async function handleUpdate(req, res) {
    const id = req.params.id;
    const obj = req.body;
    const foundItem = await ListItem.findOne({ where: id });
    let updatedItem = await foundRecord.update(obj);
    res.status(200).json(updatedItem);
}

async function handleDelete(req, res) {
    let id = req.params.id;
    let deleteItem = await ListItem.delete({ where: id });
    res.status(200).json(deleteItem);
}

module.exports = apiRoutes;


