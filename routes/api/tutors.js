const router = require("express").Router();
const siteController = require("../../controllers/siteController");

// Matches with "/api/tutors"
router.route("/")
  .get(siteController.findAllTutors)
  .put(siteController.saveReview)
  .post(siteController.createTutor);

router.route("/search").post(siteController.findAllTutors)
// Matches with "/api/tutors/:id"
router.route("/:id")
  .get(siteController.findTutorById)
  // .put(siteController.saveReview)
  .delete(siteController.removeTutor);

module.exports = router;
