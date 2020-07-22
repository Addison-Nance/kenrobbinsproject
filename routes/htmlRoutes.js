var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Recipes.findAll({}).then(function(okennyPaintings) {
      res.render("index", {
        msg: "Welcome!",
        examples: okennyPaintings
      });
    });
  });

  app.get("/about", function(req, res) {
    res.render("about", {
      style: '..public/styles/stlyes.css'
    });
  });

  app.get("/upload", function(req, res) {
    res.render("upload");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
