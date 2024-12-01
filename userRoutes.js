const express = require('express');
const router = express.Router();
const { buyPosition, getInvites } = require('../controllers/userController');

// ãÓíÑ ÎÑíÏ ÌÇíÇå
router.post('/buy_position', buyPosition);

// ãÓíÑ ÏÑíÇİÊ áíÓÊ ÏÚæÊåÇ
router.get('/invite/:telegram_id', getInvites);

module.exports = router;
