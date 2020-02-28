const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/tutors"
router.route("/")
  .get(booksController.findAllTutors)
  .post(booksController.createTutor);

// Matches with "/api/tutors/:id"
router.route("/:id")
  .get(booksController.findTutorById)
  .put(booksController.updateTutor)
  .delete(booksController.removeTutor);

module.exports = router;
