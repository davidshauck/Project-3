const router = require("express").Router();
const studentRoutes = require("./students");
const tutorRoutes = require("./tutors");
const videoRoutes = require("./videoVD");

// Routes
router.use("/students", studentRoutes);
router.use("/tutors", tutorRoutes);
// video Routes
router.use("/videos", videoRoutes);
// end video Routes

module.exports = router;
