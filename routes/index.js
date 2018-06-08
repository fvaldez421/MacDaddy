const path = require("path");
const router = require("express").Router();
const userRoutes = require("./api/users");
const mealRoutes = require("./api/meals");
const recipeRoutes = require("./api/recipes");

// API Routes
router.use("/api", userRoutes);
router.use("/api", mealRoutes);
router.use("/api", recipeRoutes);

//If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
