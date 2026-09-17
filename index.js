const express = require("express");

const HomeController = require("./Controllers/HomeControllers");
const path = require("path");

const PORT = 2715;

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "View"));

app.use(express.static(__dirname + "/public"));

app.get("/home", HomeController.home);

app.listen(PORT, () => {
  console.log("Serve is running on port " + PORT);
});
