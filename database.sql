-- ����� �������
CREATE DATABASE IF NOT EXISTS hmstr_database;

-- ������ �������
USE hmstr_database;

-- ����� ���� �������
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    wallet_address VARCHAR(255) NOT NULL,
    telegram_id VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ����� ���� ���ʝ��
CREATE TABLE IF NOT EXISTS invites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    inviter_telegram_id VARCHAR(255) NOT NULL,
    invitee_telegram_id VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (inviter_telegram_id) REFERENCES users(telegram_id)
);
