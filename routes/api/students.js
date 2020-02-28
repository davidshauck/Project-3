const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAllStudents)
  .post(booksController.createStudent);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(booksController.findStudentById)
  .put(booksController.updateStudent)
  .delete(booksController.removeStudent);

module.exports = router;
