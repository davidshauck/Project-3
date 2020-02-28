const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  photo: { type: String },
  interests: { type: Array, required: true },
  bio: { type: String, rquired: true },
  date: { type: Date, default: Date.now }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;