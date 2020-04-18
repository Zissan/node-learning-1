const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.listen(4000, () => {
  console.log("SERVER RUNNING ON PORT 4000");
});
