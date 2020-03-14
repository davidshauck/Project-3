const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/codehortDB"
);

const studentSeed = [
  {
    first: "Dave",
    last: "Hauck",
    email: "dave@dave.com",
    password: " ",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UMYCUP8E5-f99c481e727c-512",
    level: "beginner",
    status: 1,
    categories: [
      "javacript", 
      "react"
    ],
    bio:
      "Trying to learn javascript to impress the ladies",
    date: new Date(Date.now())
  },
  {
    first: "Rodney",
    last: "Julien",
    email: "rodney@rodney.com",
    password: " ",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UMTFVUGQZ-f8c64f387f92-512",
    level: "advanced",
    status: 1,
    categories: [
      "angular", 
      "mongo"
    ],
    bio:
      "I'm a sum'gun who loves to code",
    date: new Date(Date.now())
  },
  {
    first: "Achille",
    last: "Bavoua",
    email: "achille@achille.com",
    password: " ",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UMPL144FM-89deb0011ed2-512",
    level: "advanced",
    status: 1,
    categories: [
      "Javascript",
      "MySQL",
      "CSS"
    ],
    bio:
      "I'm too handsome to worry about coding",
    date: new Date(Date.now())
  },
  {
    first: "Ali",
    last: "Mustafa",
    email: "ali@ali.com",
    password: " ",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UN13LV7HT-9175ac33b69b-512",
    level: "advanced",
    status: 1,
    categories: [
      "Javascript",
      "Jquery",
      "HTML",
    ],
    bio:
      "I want to learn coding so I can work in a warm office",
    date: new Date(Date.now())
  }
];

db.Student
  .remove({})
  .then(() => db.Student.collection.insertMany(studentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  db.students.insert(
    [
      {
        first: "Dave",
        last: "Hauck",
        email: "dave@dave.com",
        password: " ",
        photo: "https://ca.slack-edge.com/TMU2T4ECF-UMYCUP8E5-f99c481e727c-512",
        level: "beginner",
        status: 1,
        categories: [
          "javacript", 
          "react"
        ],
        bio:
          "Trying to learn javascript to impress the ladies",
        reviews: [],
        date: new Date(Date.now())
      },
      {
        first: "Rodney",
        last: "Julien",
        email: "rodney@rodney.com",
        password: " ",
        photo: "https://ca.slack-edge.com/TMU2T4ECF-UMTFVUGQZ-f8c64f387f92-512",
        level: "advanced",
        status: 1,
        categories: [
          "angular", 
          "mongo"
        ],
        bio:
          "I'm a sum'gun who loves to code",
        date: new Date(Date.now())
      },
      {
        first: "Achille",
        last: "Bavoua",
        email: "achille@achille.com",
        password: " ",
        photo: "https://ca.slack-edge.com/TMU2T4ECF-UMPL144FM-89deb0011ed2-512",
        level: "advanced",
        status: 1,
        categories: [
          "Javascript",
          "MySQL",
          "CSS"
        ],
        bio:
          "I'm too handsome to worry about coding",
        date: new Date(Date.now())
      },
      {
        first: "Ali",
        last: "Mustafa",
        email: "ali@ali.com",
        password: " ",
        photo: "https://ca.slack-edge.com/TMU2T4ECF-UN13LV7HT-9175ac33b69b-512",
        level: "advanced",
        status: 1,
        categories: [
          "Javascript",
          "Jquery",
          "HTML",
        ],
        bio:
          "I want to learn coding so I can work in a warm office",
        date: new Date(Date.now())
      }
    ]
 )

 db.students.insertOne(
  {
    first: "Dave",
    last: "Hauck",
    email: "dave@dave.com",
    password: " ",
    photo: "https://ca.slack-edge.com/TMU2T4ECF-UMYCUP8E5-f99c481e727c-512",
    level: "beginner",
    status: 1,
    categories: [
      "javacript", 
      "react"
    ],
    bio:
      "Trying to learn javascript to impress the ladies",
    reviews: [],
    date: new Date(Date.now())
  }
 )
