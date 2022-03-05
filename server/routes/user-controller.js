const { isEmpty } = require('../helper');
const User = require('../models/User');
const Item = require('../models/item');

const newUser = (req, res) => {
  const body = req.body;

  if (isEmpty(body)) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user',
    });
  }

  const user = new User(body);

  if (!user) {
    return res.status(400).json({ success: false, error: `err` });
  }

  user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: 'User created',
        item: user,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        err,
        message: 'User not created',
      });
    });
};

const allUsers = (req, res) => {
  User.find({}, (err, items) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!items.length) {
      return res.status(404).json({ success: false, error: `Users not found` });
    }
    return res.status(200).json({ success: true, data: items });
  })
    .clone()
    .catch((err) => console.error(err));
};

const userById = (req, res) => {
  User.findOne({ uid: req.params.id }, (err, item) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!item) {
      return res.status(404).json({ success: false, error: `User not found` });
    }
    return res.status(200).json({ success: true, data: item });
  })
    .clone()
    .catch((err) => console.error(err));
};

const userByUsername = (req, res) => {
  User.findOne({ username: req.params.username }, (err, username) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (username) {
      return res.status(200).json({ success: true });
    }
    return res.status(200).json({ success: false });
  })
    .clone()
    .catch((err) => console.error(err));
};

const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true, data: user });
  })
    .clone()
    .catch((err) => console.error(err));
};

const updateUser = (req, res) => {
  const body = req.body;

  if (isEmpty(req.body)) {
    return res.status(400).json({
      success: false,
      error: `You must provider a body to update`,
    });
  }

  User.findOne({ uid: req.params.id }, (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: `Item not found`,
      });
    }
    user.email = body.email;
    user.avatar = body.avatar;
    user.username = body.username;

    user
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: user._id,
          message: `Item updated!`,
          item: user,
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

const addToFavorite = (req, res) => {
  Item.findById(req.body._id, (err, item) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!item) {
      return res.status(404).json({ success: false, error: `User not found` });
    }

    if (!err && item) {
      User.findOne({ uid: req.params.id }, (err, user) => {
        if (err) {
          return res.status(400).json({ success: false, error: err });
        }

        if (!user) {
          return res
            .status(404)
            .json({ success: false, error: `User not found` });
        }

        const contain = user.favorites_id.includes(item._id);
        if (!contain) {
          user.favorites_id.push(item._id);
          user.save();
          return res.status(200).json({ success: true, data: user });
        } else {
          return res.status(200).json({
            success: false,
            data: user,
            error: 'Item already in the array',
          });
        }
      })
        .clone()
        .catch((err) => console.error(err));
    }
  })
    .clone()
    .catch((err) => console.error(err));
};

const removeFromFavorite = (req, res) => {
  User.findOne({ uid: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: 'Item not found' });
    }

    const contain = user.favorites_id.includes(req.query.favoriteId);

    if (contain) {
      // check if the item is in the array
      const index = user.favorites_id.indexOf(req.query.favoriteId);
      // remove item from array
      user.favorites_id.splice(index, 1);

      user.save();
      return res.status(200).json({ success: true, data: user });
    } else {
      return res.status(200).json({
        success: false,
        data: user,
        error: 'Item not in the array',
      });
    }
  })
    .clone()
    .catch((err) => console.error(err));
};

const getUserFavorites = (req, res) => {
  User.findOne({ uid: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: 'Items not found' });
    }

    return res.status(200).json({ success: true, data: user.favorites_id });

    // TODO: filter fields
  })
    .populate('favorites_id')
    .clone()
    .catch((err) => console.error(err));
};

const checkIfFavorited = (req, res) => {
  User.findOne({ uid: req.params.id }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!user) {
      return res.status(404).json({ success: false, error: 'Item not found' });
    }

    const contain = user.favorites_id.includes(req.query.favoriteId);

    if (contain) {
      return res.status(200).json({ response: true });
    } else {
      return res.status(200).json({
        response: false,
        error: 'Item is not in the array',
      });
    }
  })
    .clone()
    .catch((err) => console.error(err));
};

const addToUserHistory = (req, res) => {
  const body = req.body;
  console.log(body);
  console.log(req.params);

  if (isEmpty(req.body)) {
    return res.status(400).json({
      success: false,
      error: `You must provider a body to update`,
    });
  }

  User.findOne({ uid: req.params.id }, (err, user) => {
    if (err) {
      return res.status(404).json({
        err,
        message: `User not found`,
      });
    }
    // FIXME: add item to history
    user.history_id.push(body._id);
    user.save();

    user
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: user._id,
          message: `User history updated!`,
          item: user,
        });
      })
      .catch((err) => {
        return res.status(404).json({
          err,
          message: `User history error@`,
        });
      });
  });
};

module.exports = {
  newUser,
  allUsers,
  deleteUser,
  userById,
  updateUser,
  userByUsername,
  addToFavorite,
  removeFromFavorite,
  getUserFavorites,
  checkIfFavorited,
  addToUserHistory,
};
