const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorSchema = new Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  photo: { type: String },
  expertise: { type: Array, required: true },
  bio: { type: String, rquired: true },
  rating: { type: Number },
  date: { type: Date, default: Date.now }
});

const Tutor = mongoose.model("Tutor", tutorSchema);

module.exports = Tutor;
