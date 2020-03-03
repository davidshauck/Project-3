const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/codehortDB"
);

const tutorSeed = [
  {
    first: "Jim",
    last: "Dhima",
    email: "jim@jim.com",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UN08XVAMD-91d7f7c5aa77-512",
    password: "444",
    status: 2,
    expertise: [
      "Javascript",
      "React",
      "Angular",
    ],
    bio:
      "I've been coding since I was in diapers",
    rating: 2.4,
    reviews: [
      {
      reviewer: "",
      title: "",
      review: "",
      }
    ],
    date: new Date(Date.now())
  },
  {
    first: "Justin",
    last: "Rice",
    email: "justin@justin.com",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UMKKNMWAW-aed8cd16208f-512",
    password: "333",
    status: 2,
    expertise: [
      "Mongo",
      "SQL",
      "Node.js",
    ],
    bio:
      "If anyone would like to learn about database architecture, come see me.",
    rating: 4.8,
    reviews: [
      {
      reviewer: "",
      title: "",
      review: "",
      }
    ],
    date: new Date(Date.now())
  },
  {
    first: "Dan",
    last: "Levenson",
    email: "dan@dan.com",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UMYD1375K-526a14ab8189-512",
    password: "222",
    status: 2,
    expertise: [
      "Ruby",
      "React"
    ],
    bio:
      "I'm the Jacob deGrom of coding.",
    rating: "4.5",
    reviews: [
      {
      reviewer: "",
      title: "",
      review: "",
      }
    ],
    date: new Date(Date.now())
  },
  {
    first: "Irving",
    last: "Angulo",
    email: "irving@irving.com",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UMS1L0BQ9-3df4a04a4703-512",
    password: "111",
    status: 2,
    expertise: [
      "Javascript",
      "React",
      "Angular",
    ],
    bio:
      "I am Irving dammit!",
    rating: "5.0",
    reviews: [
      {
      reviewer: "",
      title: "",
      review: "",
      }
    ],
    date: new Date(Date.now())
  }
];

db.Tutor
  .remove({})
  .then(() => db.Tutor.collection.insertMany(tutorSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



  db.tutors.insertOne(
    {
      first: "Jim",
      last: "Dhima",
      email: "jim@jim.com",
      photo: "https://ca.slack-edge.com/TMU2T4ECF-UN08XVAMD-91d7f7c5aa77-512",
      password: "444",
      status: 2,
      expertise: [
        "Javascript",
        "React",
        "Angular",
      ],
      bio:
        "I've been coding since I was in diapers",
      rating: 2.4,
      reviews: [
        {
        reviewer: "",
        title: "",
        review: "",
        }
      ],
      date: new Date(Date.now())
    }
    )
