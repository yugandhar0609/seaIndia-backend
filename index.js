const express = require("express");
const Connect = require("./comman/connection");
const router = require("./Routes/UserRoutes");
const cors = require('cors')

const app = express();
app.use(express.json());
Connect();
const port = 5000;
app.use(cors())
app.use(router);

app.listen(port, () => {
  console.log("Server is connected...:",port);
});