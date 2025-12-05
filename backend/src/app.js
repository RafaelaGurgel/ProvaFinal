const express = require('express');
const app = express();
const resourceRoutes = require('./routes/resources');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/resources', resourceRoutes);

module.exports = app;
const cors = require("cors");
app.use(cors());
