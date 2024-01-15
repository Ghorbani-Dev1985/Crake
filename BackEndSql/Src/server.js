const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const crakeDB = require("./DB/crakeDB");
const usersRoutes = require("./Routes/userRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", usersRoutes);

app.listen(2000, () => {
  console.log("Server run on port 2000");
});
