const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/users")
  .get(usersController.findByEmail)
  .post(usersController.create);

// Gets all users
router.route("/users/all")
  .get(usersController.findAll)
// Matches with "/api/users/:id"
router.route("/users/:_id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
