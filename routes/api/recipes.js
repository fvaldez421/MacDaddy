const router = require("express").Router();
const recipeController = require("../../controllers/recipeController");

// Matches with "/api/recipes"
router.route("/recipes")
  .get(recipeController.findAll)
  .post(recipeController.create);

// Matches with "/api/recipes/:id"
router.route("/recipes/:id")
  .get(recipeController.findById)
  .put(recipeController.update)
  .delete(recipeController.remove);

router.route("/recipes/user/:id")
  .get(recipeController.findByUser);


module.exports = router;
