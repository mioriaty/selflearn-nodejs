const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");

const app = express();
const port = 8866;

app.use(express.static(path.join(__dirname, "public")));

// http logger
app.use(morgan("combined"));

// tamplate engine
const hbs = handlebars.create({
  extname: ".hbs",
  partialsDir: [path.join(__dirname, "resources", "views", "partials")],
});

app.engine("hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  console.log(req.query.q);
  res.render("search");
});

app.listen(port, () => {
  console.log(`listen on port localhost:${port}`);
});