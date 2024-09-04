const express = require('express');
const { sendEmail } = require('../controllers/emailcontroller');

const router = express.Router();

router.post('/send-email', sendEmail);

module.exports = router;
