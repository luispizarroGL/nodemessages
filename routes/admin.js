const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /get-messages/2020-04-27 => GET
// router.get('/get-messages/:date', adminController.getMessages);

// /get-messages?from=2020-04-27 => GET
router.get('/get-messages', adminController.getMessages);

// /add-message => POST
router.post('/add-message', adminController.postAddMessage);

module.exports = router;
