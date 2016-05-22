var Transform = require('stream').Transform; 
var inherits = require('util').inherits;
var request = require('request');
var async = require('async');


function JSONEncode(content, options) {  
  if ( ! (this instanceof JSONEncode))
    return new JSONEncode(content, options);

  if (! options) options = {};
  options.objectMode = true;
  Transform.call(this, options);
  this.date = content;
}

inherits(JSONEncode, Transform);


JSONEncode.prototype._transform = function _transform(obj, encoding, callback) {  
  var self = this;
  var counter = 0;
  async.eachLimit(obj.coordinates, 10, function(coords, cb) {
    endpoint = 'https://data.police.uk/api/crimes-street/all-crime?lat='+coords[1]+'&'+'lng='+coords[0]+'&date='+self.date;
    request(endpoint, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var output = JSON.parse(body);
        obj.crimes = [coords, output];
        if (counter === 0){
          self.push("{\"crimes\": [");
          cb();
        } else if (counter === obj.coordinates.length-1){
          setTimeout(function(){self.push(JSON.stringify(obj.crimes)+']}')}, 1000);
          setTimeout(function(){cb()}, 2000);
        } else {
          self.push(JSON.stringify(obj.crimes)+',');
          cb();
        }
        console.log(counter++);
      } else {
        console.log(error);
        cb();
      }
    });
  }, function(err) {
    if (err) {
      console.log('failed to process');
    } else {
      callback();
    }
  });
};

module.exports = JSONEncode;
