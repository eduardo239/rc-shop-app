const express = require('express');

const ItemController = require('./item-controller');

const router = express.Router();

router.post('/create-new-product', ItemController.createItem);
router.get('/products', ItemController.items);
router.get('/product/:id', ItemController.itemById);
router.delete('/delete-product/:id', ItemController.deleteItem);
router.put('/update-product/:id', ItemController.updateItem);

module.exports = router;
