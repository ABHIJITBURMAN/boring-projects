const express = require("express");
const timeout = require("connect-timeout");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/v1");

const app = express();
app.use(bodyParser.json());
app.use(timeout(5 * 60 * 1000));
app.use(cors());
app.options("*", cors());

// router path
app.use("/v1", routes);

module.exports = app;
