var fs = require('fs');
var path = require('path');

function WriteStream(filename) {  
  var writestream = fs.createWriteStream(filename, {encoding: 'utf8'});
  return writestream;
}

module.exports = WriteStream;