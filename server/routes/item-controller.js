const { isEmpty } = require('../helper');
const Item = require('../models/item');

const createItem = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a item',
    });
  }
  const item = new Item(body);

  if (!item) {
    return res.status(400).json({ success: false, error: `err` });
  }

  item
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: item._id,
        message: 'Item created',
        item,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        err,
        message: 'Item not created',
      });
    });
};

const items = (req, res) => {
  Item.find({}, (err, items) => {
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

const itemById = (req, res) => {
  Item.findOne({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!item) {
      return res.status(404).json({ success: false, error: `Item not found` });
    }
    return res.status(200).json({ success: true, data: item });
  })
    .clone()
    .catch((err) => console.error(err));
};

const deleteItem = (req, res) => {
  Item.findOneAndDelete({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!item) {
      return res.status(404).json({ success: false, error: `Item not found` });
    }
    return res.status(200).json({ success: true, data: item });
  })
    .clone()
    .catch((err) => console.error(err));
};

const updateItem = (req, res) => {
  const body = req.body;
  if (isEmpty(body)) {
    return res.status(400).json({
      success: false,
      error: `You must provider a body to update`,
    });
  }
  Item.findOne({ _id: req.params.id }, (err, item) => {
    if (err) {
      return res.status(404).json({
        err,
        message: `Item not found`,
      });
    }
    item.name = body.name;
    item.price = body.price;
    item.poster = body.poster;

    item
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: item._id,
          message: `Item updated!`,
          item,
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
  createItem,
  items,
  deleteItem,
  updateItem,
  itemById,
};
