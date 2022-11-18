const cuttly = require("./utils/cuttly");
const express = require("express");
const cuttlyRoute = require("./routes/cuttly");

const app = express();
app.use(express.json());
app.use(cuttlyRoute);

const port = 3000;

app.listen(port, () => {
  console.log("listening on port " + port);
});
