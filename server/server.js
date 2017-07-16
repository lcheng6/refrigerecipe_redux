require('./config/config');

const express = require('express');
var logger = require('winston');
var cookieParser = require('cookie-parser');

const bodyParser = require('body-parser');

var users_route = require('./routes/users_routes');

var app = express();
//use and only use body parser for JSON
app.use(bodyParser.json());
const port = process.env.PORT;


app.use('/api/users', users_route);
// POST /users
// app.post('/users', (req, res) => {
//     var body = _.pick(req.body, ['email', 'password', 'mobileNumber']);
//     var user = new User(body);
//
//     user.save().then(() => {
//         return user.generateAuthToken();
//     }).then((token) => {
//         res.header('x-auth', token).send(user);
//     }).catch((e) => {
//         //TODO: filter the e going to the server.
//         let ret_e  = e;
//         res.status(400).send(ret_e);
//     });
// });


app.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};