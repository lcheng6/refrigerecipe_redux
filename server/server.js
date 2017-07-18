require('./config/config');

const express = require('express');
var logger = require('winston');
var cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');

var users_route = require('./routes/users_routes');
var carts_route = require('./routes/carts_routes');
var fridges_route = require('./routes/fridges_routes');
//var saved_recipes_route = require('./routes/saved_recipes_routes');

var app = express();
//use and only use body parser for JSON
app.use(bodyParser.json());
const port = process.env.PORT;


app.use('/api/users', users_route);
app.use('/api/carts', carts_route);
app.use('/api/fridges', fridges_route);
//app.use('/api/saved_recipes', saved_recipes_route);


app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};