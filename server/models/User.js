const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: { type: String, required: true, unique: true },
    uid: { type: String, required: true },
    avatar: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', User);
