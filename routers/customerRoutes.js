const customerController = require('../controllers/customerController');
const express = require('express');
const router = express.Router();

router.post('/create', customerController.createCustomer);
router.get('/all', customerController.getAllCustomers);

module.exports = router;