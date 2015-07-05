var Category = require('./../models/category');
//var url = require('url');


exports.getCategories = function (req, res) {

  Category.find(function (err, categories) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).send(categories);
  });

};