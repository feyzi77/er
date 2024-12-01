const db = require('../models/database');

// ÎÑíÏ ÌÇíÇå
exports.buyPosition = async (req, res) => {
    const { wallet_address, telegram_id, username } = req.body;

    try {
        await db.query(
            `INSERT INTO users (wallet_address, telegram_id, username) VALUES (?, ?, ?)`, 
            [wallet_address, telegram_id, username]
        );
        res.status(200).json({ message: 'Position purchased successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error buying position', error });
    }
};

// ÏÑíÇÝÊ áíÓÊ ÏÚæÊåÇ
exports.getInvites = async (req, res) => {
    const { telegram_id } = req.params;

    try {
        const [invites] = await db.query(
            `SELECT * FROM invites WHERE inviter_telegram_id = ?`, 
            [telegram_id]
        );
        res.status(200).json(invites);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching invites', error });
    }
};
