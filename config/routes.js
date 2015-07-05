
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var dashboard = require('dashboard');
var services = require('./../app/controllers/services');
var categories = require('./../app/controllers/categories');
var locations = require('./../app/controllers/locations');


/**
 * Expose
 */

module.exports = function (app, passport) {

  app.get('/', dashboard.index);

  app.get('/getCategories', categories.getCategories);

  app.get('/getServices', services.getServices);

  app.get('/getLocations', locations.getlocations);

  //  app.post('/addService', services.addService);

  app.post('/addService', function(req, res) {
    var name = req.body.name;
    console.log(name);

  });














  /**
   * Error handling
   */


  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
