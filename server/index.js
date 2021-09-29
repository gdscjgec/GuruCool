const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(express.json({ limit: "25mb" }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("App is running");
});

app.listen("5000", () => {
  console.log("App is running on port 5000");
});
