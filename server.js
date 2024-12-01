require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const routes = require('./routes/userRoutes');

const app = express();

// ������� ����
app.use(bodyParser.json());
app.use(morgan('combined', { 
    stream: fs.createWriteStream(path.join(__dirname, '../logs/server.log'), { flags: 'a' }) 
}));

// ������� �����
app.use(express.static(path.join(__dirname, '../public')));

// ������� API
app.use('/api', routes);

// ���� � ���� ����
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
