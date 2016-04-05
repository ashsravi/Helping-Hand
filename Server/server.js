var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

// connect to mongo database named "hh"
mongoose.connect('mongodb://localhost/hh');

// configure our server with all the middleware and routing
// require('./config/middleware.js')(app, express);
require('./routes.js')(app, express);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// start listening to requests on port 8000
app.listen(8000);

// export our app for testing and flexibility, required by index.js
module.exports = app;