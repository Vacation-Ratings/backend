'use strict';

const VacationModel = require('../models/vacation.js');

const express = require('express');
const vacationRoutes = express.Router();

vacationRoutes.get('/vacation', handleGet);
vacationRoutes.get('/vacation/:id', handleGet);
vacationRoutes.post('/vacation', handleCreate);

async function handleGet(req, res) {
    let queryLocation = {};
    let queryData = req.params.id;
    if (queryData) {
        queryData = { $regex: '' + queryData, $options: 'i' }
        queryLocation = {location: queryData};
        let allVacation = await VacationModel.find(queryLocation);
        if (allVacation.length !== 0) {
            res.status(200).json(allVacation);
        } else {
            queryLocation = {country: queryData};
            allVacation = await VacationModel.find(queryLocation);
            res.status(200).json(allVacation);
        }
    } else {
        let allVacation = await VacationModel.find(queryLocation);
        res.status(200).json(allVacation);
    }
}

async function handleCreate(req, res) {
    let obj = req.body;
    let newVacation = await VacationModel.create(obj);
    res.status(201).json(newVacation);
}

module.exports = vacationRoutes;
