var db = require("../models");

module.exports = function(app) {
  // Get all recipes
  app.get("/api/paintings", function(req, res) {
    db.Recipes.findAll({}).then(function(allPaintings) {
      res.json(allPaintings);
    });
  });

  
};
