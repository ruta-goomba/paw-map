var fs = require('fs');
var path = require('path');

function ReadStream(filename) {  
  var readstream = fs.createReadStream(filename, {encoding: 'utf8'});
  return readstream;
}

module.exports = ReadStream;