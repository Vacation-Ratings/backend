'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const User = require('./user');
const Trip = require('./vactaion');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

let db = new Sequelize(DATABASE_URL);

const UserModel = User(db, DataTypes);
const TripModel = Trip(db, DataTypes);

UserModel.hasMany(TripModel, { foreignKey: 'userId', sourceKey: 'tripId' });
TripModel.belongsTo(UserModel, { foreignKey: 'userId', sourceKey: 'tripId' })

module.exports = {
  db,
  // UserCollection: new Collection(UserModel),
  // VacationCollection: new Collection(VacationModel),
};