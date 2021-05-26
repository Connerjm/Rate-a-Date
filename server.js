//Imports.
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Server logger set to dev for consice and colored responses.
app.use(morgan("dev"));

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Connect to the mongo database.
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/rateadate",
    {
        //Required options to remove mongoose deprication errors.
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

//Start the server.
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
