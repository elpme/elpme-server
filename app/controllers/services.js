var Service = require('./../models/service');


exports.getServices = function (req, res) {

  Service[req.query.location].find(function (err, services) {
    if (err) {
      return handleError(res, err);
    }
    console.log("sending response");
    return res.status(200).send(services);
  });

};


exports.addService = function (req, res) {
  console.log("Service request received");
  var name = req.body.name;

  Service.findOne({ name: { $regex: new RegExp(name, "i") } },
    function(err, doc) { // Using RegEx - search is case insensitive
      console.log("in result");
      if(!err && !doc) {
        var newService = new Service();
        newService.name = name;

        newService.save(function(err) {
          if(!err) {
            res.json(201, {message: "Service created with name: " +
              newService.name , csrfToken: req.csrfToken()});
          }
          else {
            res.json(500, {message: "Could not create service. Error: " + err});
          }
        });
      }
      else if(!err) {
        // already exists.
        res.json(403, {message: "Service with that name already exists, please update instead of create or create a new service with a different name."});
      }
      else {
        res.json(500, { message: err});
      }
    });
};