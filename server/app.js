const express = require("express");
const compression = require("compression");
const planetsRouter = require("./src/planets/planets.router");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(compression());
app.use(planetsRouter);

module.exports = app;
