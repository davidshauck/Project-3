import axios from "axios";

export default {
  // Gets all students
  getStudents: function() {
    return axios.get("/api/students");
  },
  // Gets the student with the given id
  getStudent: function(id) {
    return axios.get("/api/students/" + id);
  },
  // Deletes the student with the given id
  deleteStudent: function(id) {
    return axios.delete("/api/students/" + id);
  },
  // Saves a student to the database
  saveStudent: function(studentData) {
    return axios.post("/api/students", studentData);
  },
  // Saves a tutor to the database
  saveTutor: function(tutorData) {
    return axios.post("/api/tutors", tutorData);
  },
  getTutors: function() {
    return axios.get("/api/tutors/");
  },
  getTutor: function(id) {
    return axios.get("/api/tutors/" + id);
  },
  saveReview: function(tutorData) {
    return axios.put("/api/tutors", tutorData);
  },
};
