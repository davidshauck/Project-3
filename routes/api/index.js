const router = require("express").Router();
const studentRoutes = require("./students");
const tutorRoutes = require("./tutors");

// Routes
router.use("/students", studentRoutes);
router.use("/tutors", tutorRoutes);


module.exports = router;
