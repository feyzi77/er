const express = require('express');
const router = express.Router();
const { buyPosition, getInvites } = require('../controllers/userController');

// ���� ���� �����
router.post('/buy_position', buyPosition);

// ���� ������ ���� ���ʝ��
router.get('/invite/:telegram_id', getInvites);

module.exports = router;
