const express = require("express");
const { getAllPlanets } = require("./planets.controller");

const app = express();

const planetsRouter = express.Router();

planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
