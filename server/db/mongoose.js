var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//TODO: fix the deprecation warning here
let db = mongoose.connect(process.env.MONGODB_URI);

// Show any mongoose errors if the connection is not made for some reason.
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});

module.exports = {mongoose};
