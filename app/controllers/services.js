var service = require('./../models/service');
var url = require('url');


exports.getServices = function (req, res) {

  service.find(function (err, services) {
    if (err) {
      return handleError(res, err);
    }
    return res.send(200, services);
  });

};