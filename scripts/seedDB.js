const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rateadate");

const postSeed = [
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

const usersSeed = [
  {
    username: "testusername",
    email: "testemail@email.com",
    password: "testpassword",
    date: new Date(Date.now())
  }
];

let postPromise = db.Post.remove({})
  .then(() => db.Post.collection.insertMany(postSeed));

let usersPromise = db.User.remove({})
  .then(() => db.User.collection.insertMany(usersSeed));
  
Promise.all([postPromise, usersPromise]).then(values => {
  console.log(values);
  process.exit(0);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
