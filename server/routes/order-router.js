const express = require('express');

const OrderController = require('./order-controller');

const router = express.Router();

router.post('/create-new-order', OrderController.orderNewItem);
router.get('/order/:id', OrderController.orderById);
router.get('/orders/:id', OrderController.ordersByUserId);
router.delete('/delete-order/:id', OrderController.deleteOrder);
router.get('/orders', OrderController.allOrders);
router.put('/update-order/:id', OrderController.updateOrder);

module.exports = router;
