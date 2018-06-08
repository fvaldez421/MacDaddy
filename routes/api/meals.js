const router = require("express").Router();
const mealsController = require("../../controllers/mealsController");

// Matches with "/api/meals"
router.route("/meals")
    .get(mealsController.findAll)
    .post(mealsController.create);

// Matches with "/api/meals/user/:id"
// router.route("/meals/user/:id")
//     .get(mealsController.findByUser);

// Matches with "/api/meals/:id"
router.route("/meals/:id")
    .get(mealsController.findById)
    .put(mealsController.update)
    .delete(mealsController.remove);

module.exports = router;
