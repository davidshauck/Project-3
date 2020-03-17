const db = require("../models");
const mongoose = require("mongoose");

// Defining methods for the siteController
module.exports = {
  findAllStudents: function(req, res) {
    let query = { status: 1 }
    db.User
      // .find(req.query)
      .find(query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    // db.Student
    //   .find(req.query)
    //   .sort({ date: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
    res.send('ok')
  },
  findAllTutors: function(req, res) {
    let query = req.body.data ? {categories:req.body.data, status: 2} : {status:2}
    console.log("HERE'S THE QUERY", req.body.data)
    db.User
      // .find(req.query)
      .find(query)
      .sort({ date: -1 })
      .then(dbModel => {
        console.log(dbModel) 
        res.json(dbModel)
      }).catch(err => res.status(422).json(err));
  },
  findStudentById: function(req, res) {
    console.log("AM I HERE?")
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findTutorById: function(req, res) {
    console.log("RES ", req.query.reviews);
    db.User
      .findById(req.params.id)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createStudent: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createTutor: function(req, res) {
    console.log(req.body)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateStudent: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveReview: function(req, res) {
    console.log("HIT REVIEWS", req.body)
   console.log(req.body)
    db.User
   .update(
      { _id: mongoose.Types.ObjectId(req.body.id)},
      { $push: { reviews: req.body } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveStudentMessage: function(req, res) {
    console.log("STUDENT MESSAGE", req.body)
     db.User
    .update(
       { _id: mongoose.Types.ObjectId(req.body.id)},
       { $push: { messages: req.body } })
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
   },
   saveTutorMessage: function(req, res) {
    console.log("HIT TUTOR MESSAGES", req.body)
     db.User
    .update(
       { _id: mongoose.Types.ObjectId(req.body.id)},
       { $push: { messages: req.body } })
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
   },
  removeStudent: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeTutor: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
