'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'secretstring';

const { Schema } = mongoose;

const userSchema = new Schema({

  userId: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },

  password: {
    type: String,
    required: [true, 'Password is required'],
    unique: true,
  },

  username: {
    type: String,
    required: [true, 'Name is required'],
  },

  lastname: {
    type: String,
    required: false,
  },

  wishList: {
    type: [String],
    required: false,
  },

  description: {
    type: String,
    required: false,
  },

  blogs: {
    type: [Number],
    required: false,
  },

  follow: {
    type: [String],
    required: false,
  },

  role: { type: DataTypes.ENUM('user', 'writer', 'editor', 'admin'), required: true, defaultValue: 'user' },
  token: {
    type: DataTypes.VIRTUAL,
    get() {
      return jwt.sign({ username: this.username }, SECRET);
    },
    set(tokenObj) {
      let token = jwt.sign(tokenObj, SECRET);
      return token;
    },
  },
  capabilities: {
    type: DataTypes.VIRTUAL,
    get() {
      const acl = {
        user: ['read'],
        writer: ['read', 'create'],
        editor: ['read', 'create', 'update'],
        admin: ['read', 'create', 'update', 'delete'],
      };
      return acl[this.role];
    },
  },

// Not sure how to make this work or if we need it \/
  userSchema.beforeCreate(async (user) => {
    let hashedPass = await bcrypt.hash(user.password, 10);
    user.password = hashedPass;
  }),

  users.authenticateBasic = async function (username, password) {
    const user = await this.findOne({ where: { username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) return user;
    throw new Error('Invalid User');
  },

  users.authenticateToken = async function (token) {
    try {
      const parsedToken = jwt.verify(token, SECRET);
      const user = this.findOne({ where: { username: parsedToken.username } });
      if (user) return user;
      throw new Error('User Not Found');
    } catch (e) {
      throw new Error(e.message);
    }
  },
})
  // return users;

const User = mongoose.model("User", userSchema);

module.exports = User;