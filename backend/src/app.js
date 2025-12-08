const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
const resourceRoutes = require('./routes/resources');
const authRoutes = require('./routes/authRoutes');

app.use('/auth', authRoutes);
app.use('/resources', resourceRoutes);

module.exports = app;
