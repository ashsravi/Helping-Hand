var productsController = require('./productsController.js');
var commentsController = require('./commentsController.js');
var express = require('express');

module.exports = function (app, express) {
  app.get('/*', productsController.allProducts);
  app.post('/api/*', commentsController.newComment);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(function (error, req, res, next) {
    // log the error then send it to the next middleware in
    console.error(error.stack);
    next(error);
  });
  app.use(function (error, req, res, next) {
    // send error message to client
    // message for gracefull error handling on app
    res.send(500, {error: error.message});
  });
};