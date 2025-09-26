const customerController = require('../controllers/customerController');
const express = require('express');
const router = express.Router();

router.post('/create', customerController.createCustomer);

module.exports = router;