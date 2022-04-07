require("./config/db");
const express = require("express");
const app = express();
const RestoRoute = require("./routes/Resto");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/resto", RestoRoute);

app.listen(3001, () => {
  console.log("server running at: http://localhost:" + 3001);
});
