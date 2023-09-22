const express = require('express');
const { createOrder, fetchOrdersByUser, updateOrder, deleteOrder, fetchAllOrders } = require('../controller/Order.js');
const router = express.Router();


router.post('/', createOrder)
      .get('/user/:userId', fetchOrdersByUser)
      .patch('/:id', updateOrder)
      .delete('/:id', deleteOrder)
      .get('/', fetchAllOrders)

      
exports.router = router;