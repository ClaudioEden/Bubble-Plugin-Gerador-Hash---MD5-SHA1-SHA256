function(properties, context) {


const { createHash } = require('crypto');

function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}



}