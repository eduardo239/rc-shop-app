const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Address = new Schema({
  street: { type: String, required: true },
  number: { type: String, required: true },
  complement: { type: String, required: false },
  districty: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zipcode: { type: String, required: true },
});

const Items = new Schema({
  itemId: { type: String, required: true },
  price: { type: Number, required: true },
  promo: { type: String, required: false },
  quantity: { type: Number, required: true },
  total: { type: Number, required: true },
  name: { type: String, required: true },
  color: { type: String, required: true },
  storage: { type: String, required: true },
});

const Order = new Schema(
  {
    userId: { type: String, required: true },
    items: [{ type: Items, required: true }],
    address: { type: Address, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', Order);
