const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Item = new Schema(
  {
    name: { type: String, required: true },
    poster: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    info: { type: String, required: false },
    categories: [{ type: String, required: false }],
    storages: [{ type: String, required: false }],
    colors: [{ type: String, required: false }],
    specs: [{ type: String, required: false }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Item', Item);
