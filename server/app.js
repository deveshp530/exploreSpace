const express = require("express");
const path = require("path");
const morgan = require("morgan");
const compression = require("compression");
const planetsRouter = require("./src/routes/planets/planets.router");
const launchesRouter = require("./src//routes/launches/launches.router");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));
app.use(compression());
app.use(planetsRouter);
app.use(launchesRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
