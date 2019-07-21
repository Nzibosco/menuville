const router = require("express").Router();
const menuController = require("../../controllers/menuController");

// Matches with "/api/books"
router.route("/")
  .get(menuController.findAll)
  .post(menuController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(menuController.findById)
  .put(menuController.update)
  .delete(menuController.delete);

module.exports = router;
