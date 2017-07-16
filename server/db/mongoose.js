var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//TODO: fix the deprecation warning here
mongoose.connect(process.env.MONGODB_URI);


module.exports = {mongoose};
