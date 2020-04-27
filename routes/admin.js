const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /get-messages => GET
router.get('/get-messages/:date', adminController.getMessages);

// /add-message => POST
router.post('/add-message', adminController.postAddMessage);

module.exports = router;
