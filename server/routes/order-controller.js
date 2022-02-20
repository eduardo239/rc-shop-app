const { isEmpty } = require('../helper');
const Order = require('../models/Order');

const orderNewItem = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a item',
    });
  }
  const item = new Order(body);

  if (!item) {
    return res.status(400).json({ success: false, error: `err` });
  }
  item
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: item._id,
        message: 'Item added',
        item,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        err,
        message: 'Item not added',
      });
    });
};

const deleteOrder = (req, res) => {
  console.log(req.params.id);
  Order.findOneAndDelete({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!item) {
      return res.status(404).json({ success: false, error: `Order not found` });
    }
    return res.status(200).json({ success: true, data: item });
  })
    .clone()
    .catch((err) => console.error(err));
};

const allOrders = (req, res) => {
  Order.find({}, (err, items) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!items.length) {
      return res.status(404).json({ success: false, error: `Items not found` });
    }

    return res.status(200).json({ success: true, data: items });
  })

    .clone()
    .catch((err) => console.error(err));
};

const orderById = (req, res) => {
  Order.findOne({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!item) {
      return res.status(404).json({ success: false, error: `Order not found` });
    }
    return res.status(200).json({ success: true, data: item });
  })
    .clone()
    .catch((err) => console.error(err));
};

const ordersByUserId = (req, res) => {
  Order.find({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!item) {
      return res
        .status(404)
        .json({ success: false, error: `Orders not found` });
    }
    return res.status(200).json({ success: true, data: item });
  })
    .clone()
    .catch((err) => console.error(err));
};

const updateOrder = (req, res) => {
  const body = req.body;
  if (isEmpty(body)) {
    return res.status(400).json({
      success: false,
      error: `You must provider a body to update`,
    });
  }
  Order.findOne({ _id: req.params.id }, (err, order) => {
    if (err) {
      return res.status(404).json({
        err,
        message: `Item not found`,
      });
    }

    for (let i = 0; i < order.items.length; i++) {
      order.items[i].price = body.items[i].price;
      order.items[i].quantity = body.items[i].quantity;
      order.items[i].promo = body.items[i].promo;
      order.items[i].total = body.items[i].total;
    }

    order.address.street = body.address.street;
    order.address.number = body.address.number;
    order.address.complement = body.address.complement;
    order.address.districty = body.address.districty;
    order.address.city = body.address.city;
    order.address.state = body.address.state;
    order.address.country = body.address.country;
    order.address.zipcode = body.address.zipcode;

    order
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: order._id,
          message: `Item updated!`,
          data: order,
        });
      })

      .catch((err) => {
        return res.status(404).json({
          err,
          message: `Item not updated@`,
        });
      });
  });
};

module.exports = {
  orderNewItem,
  deleteOrder,
  allOrders,
  orderById,
  ordersByUserId,
  updateOrder,
};
