
/**
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Location schema
 */

var LocationSchema = new Schema({
  name: { type: String, default: '' }
});


module.exports = mongoose.model('locations', LocationSchema, 'locations');