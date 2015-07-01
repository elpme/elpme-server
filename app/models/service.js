
/**
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Services schema
 */

var ServicesSchema = new Schema({
  name: { type: String, default: '' }
});


module.exports = mongoose.model('Services', ServicesSchema);
