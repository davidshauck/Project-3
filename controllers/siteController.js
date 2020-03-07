const db = require("../models");
const mongoose = require("mongoose");

// Defining methods for the siteController
module.exports = {
  findAllStudents: function(req, res) {
    db.Student
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllTutors: function(req, res) {
    let query = req.body.data ? {expertise:req.body.data} : {}
    db.Tutor
      // .find(req.query)
      .find(query)
      .sort({ date: -1 })
      .then(dbModel => {
        console.log(dbModel) 
        res.json(dbModel)
      }).catch(err => res.status(422).json(err));
  },
  findStudentById: function(req, res) {
    db.Student
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findTutorById: function(req, res) {
    console.log("RES ", req.query.reviews);
    db.Tutor
      .findById(req.params.id)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createStudent: function(req, res) {
    db.Student
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createTutor: function(req, res) {
    console.log(req.body)
    db.Tutor
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateStudent: function(req, res) {
    db.Student
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveReview: function(req, res) {
   console.log(req.body)
    db.Tutor
   .update(
      { _id: mongoose.Types.ObjectId(req.body.id)},
      { $push: { reviews: req.body } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));



      // .findOneAndUpdate({ _id: req.params.id }, req.body)
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
  },
  removeStudent: function(req, res) {
    db.Student
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeTutor: function(req, res) {
    db.Tutor
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
