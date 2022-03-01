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
router.delete('/remove-from-favorite/:id', UserController.removeFromFavorite);
router.get('/user-favorites/:id', UserController.getUserFavorites);
router.get('/check-if-is-favorite/:id', UserController.checkIfFavorited);

module.exports = router;
