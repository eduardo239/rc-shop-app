const { isEmpty } = require('../helper');
const User = require('../models/User');

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
  console.log(req.body);

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

module.exports = {
  newUser,
  allUsers,
  deleteUser,
  userById,
  updateUser,
  userByUsername,
};
