var Location = require('./../models/location');
//var url = require('url');


exports.getlocations = function (req, res) {

  Location.find(function (err, locations) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).send(locations);
  });

};