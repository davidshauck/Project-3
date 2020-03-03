const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorSchema = new Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  photo: { type: String },
  status: { type: Number },
  expertise: { type: Array },
  bio: { type: String },
  rating: { type: Number },
  date: { type: Date, default: Date.now }
});

// Execute before each user.save() call
tutorSchema.pre("save", function(callback) {
  let user = this;

  // Break out if the password hasn't changed
  if (!user.isModified("password")) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

tutorSchema.methods.verifyPassword = function(password, cb) {
  bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const Tutor = mongoose.model("Tutor", tutorSchema);

module.exports = Tutor;