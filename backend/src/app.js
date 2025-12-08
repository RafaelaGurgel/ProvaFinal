const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const resourceRoutes = require("./routes/resources");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/resources", resourceRoutes);

module.exports = app;
