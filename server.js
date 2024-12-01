require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const routes = require('./routes/userRoutes');

const app = express();

// ÊäÙíãÇÊ ÓÑæÑ
app.use(bodyParser.json());
app.use(morgan('combined', { 
    stream: fs.createWriteStream(path.join(__dirname, '../logs/server.log'), { flags: 'a' }) 
}));

// ãÓíÑåÇí Úãæãí
app.use(express.static(path.join(__dirname, '../public')));

// ãÓíÑåÇí API
app.use('/api', routes);

// æÑÊ æ ÔÑæÚ ÓÑæÑ
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
