"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const controllers = require("./controllers");
const path = require("path");
const port = process.env.PORT || 8080;

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("x-powered-by", false);

app.use(bodyParser.json());

app.use("/scripts",
  express.static(path.join(__dirname, "..", "node_modules", "axios", "dist")),
  express.static(path.join(__dirname, "public", "scripts"))
);

app.use("/styles",
  express.static(path.join(__dirname, "..", "node_modules", "bulma", "css")),
  express.static(path.join(__dirname, "public", "styles"))
);

app.get("/", controllers.viewController.home);

app.post("/pixelate", controllers.textController.pixelate);

app.use((err, req, res, next) => {
  console.error("Unhandled server error", err);

  if (res.headersSent) {
    return next(err);
  }

  return res.sendStatus(500);
});

if (require.main === module) {
  app.listen(port, (err) => {
    if (err) {
      console.error("Failed to start server", err);
    } else {
      console.info(`Server listening on port ${port}`);
    }
  });
}

module.exports = app;
