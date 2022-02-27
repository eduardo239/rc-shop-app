const express = require('express');

const UserController = require('./user-controller');

const router = express.Router();

router.post('/create-new-user', UserController.newUser);
router.get('/users', UserController.allUsers);
router.get('/user/:id', UserController.userById);
router.delete('/delete-user/:id', UserController.deleteUser);
router.put('/update-user/:id', UserController.updateUser);
router.get('/username/:username', UserController.userByUsername);
router.put('/add-to-favorite/:id', UserController.addToFavorite);

module.exports = router;
