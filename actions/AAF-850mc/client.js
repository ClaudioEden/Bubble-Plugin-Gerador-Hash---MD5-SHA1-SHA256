function(properties, context) {


  //Load any data 


var crypto = require('crypto')
var shasum = crypto.createHash('sha1')
shasum.update('foo')
shasum.digest('hex') 
  //Do the operation



}