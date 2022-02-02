const express = require("express");
const { httpGetAllPlanets } = require("./planets.controller");

const app = express();

const planetsRouter = express.Router();

planetsRouter.get("/planets", httpGetAllPlanets);

module.exports = planetsRouter;
