const router = require("express").Router();
const siteController = require("../../controllers/siteController");

// Matches with "/api/books"
router
  .route("/")
  .get(siteController.findAll)
  .post(siteController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(siteController.findById)
  .put(siteController.update)
  .delete(siteController.remove);

module.exports = router;
