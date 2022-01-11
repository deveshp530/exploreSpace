const { parse } = require("csv-parse");

const express = require("express");

const app = express();
const compression = require("compression");

const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));
app.use(compression());

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} on localhost:${PORT}`);
});
