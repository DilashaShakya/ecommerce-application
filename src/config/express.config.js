const express = require("express");
const router = require("./router.config");

const app = express();

//mounting routes
app.use("/api/v1", router)

module.exports = app; 