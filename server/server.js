const app = require("./app");

const PORT = process.env.PORT || 3001;

const { loadPlanetsData } = require("./src/models/planets.model");

async function startServer() {
  await loadPlanetsData();
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT} on localhost:${PORT}`);
  });
}

startServer();
