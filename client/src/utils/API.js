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
  getTutors: function(query) {
    return axios.post("/api/tutors/search", {data: query});
  },
  getTutor: function(id) {
    return axios.get("/api/tutors/" + id);
  },
  saveReview: function(tutorData) {
    return axios.put("/api/tutors", tutorData);
  },
  saveStudentMessage: function(studentData) {
    return axios.put("/api/students", studentData);
  },
  saveTutorMessage: function(tutorData) {
    return axios.put("/api/tutors/messages", tutorData);
  },
  // Searches the  books according to the search criteria given in the form
  getNewVideos: function(req) {
    console.log("HERE")
    return axios.get(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        req +
        "&key=AIzaSyDyLzwyfpgQMxCuuUK1VXdvTc34-wMzGi0"
    );
  }
};
