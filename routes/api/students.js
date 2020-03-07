const router = require("express").Router();
const siteController = require("../../controllers/siteController");

// Matches with "/api/books"
router.route("/")
  .get(siteController.findAllStudents)
  .post(siteController.createStudent);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(siteController.findStudentById)
  .put(siteController.updateStudent)
  .delete(siteController.removeStudent);


module.exports = router;
