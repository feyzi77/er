-- «ÌÃ«œ œÌ «»Ì”
CREATE DATABASE IF NOT EXISTS hmstr_database;

-- «‰ Œ«» œÌ «»Ì”
USE hmstr_database;

-- «ÌÃ«œ ÃœÊ· ò«—»—«‰
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    wallet_address VARCHAR(255) NOT NULL,
    telegram_id VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- «ÌÃ«œ ÃœÊ· œ⁄Ê ùÂ«
CREATE TABLE IF NOT EXISTS invites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    inviter_telegram_id VARCHAR(255) NOT NULL,
    invitee_telegram_id VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (inviter_telegram_id) REFERENCES users(telegram_id)
);
