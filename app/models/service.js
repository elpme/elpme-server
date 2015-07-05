
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

//module.exports = mongoose.model('service', ServicesSchema, 'puneServices');

module.exports = {
  pune: mongoose.model('service', ServicesSchema, 'puneServices'),
  hyd: mongoose.model('service', ServicesSchema, 'hydServices')
};
