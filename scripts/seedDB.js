const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const bookSeed = [
  {
    title: "Stampede",
    author: "admin",
    body:
      "Great little cocktail bar in Fremont.  Outstanding drinks, staff can be pretty sassy.  Be sure to check out their neon bathrooms.",
    date: new Date(Date.now())
  },
  {
    title: "Volunteer Park",
    author: "admin",
    body:
      "Great place for a day date.  You can have a picnic, visit the conservatory, or go see the asian art museum",
    date: new Date(Date.now())
  },
  {
    title: "Pike's Place Market",
    author: "admin",
    body:
      "Okay so you think this would make a great date idea... It doesn't.  It's crowded, it's stressful, it's overwhelming.  Hard to meet up for a date here.",
    date: new Date(Date.now())
  }
];

const userSeed = [
  {
    name: "testusername",
    email: "testemail@email.com",
    password: "testpassword",
    date: new Date(Date.now())
  }
];

// db.Post.remove({})
//   .then(() => db.Post.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    console.log(data)
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

