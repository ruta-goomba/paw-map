var Transform = require('stream').Transform; 
var inherits = require('util').inherits;
var request = require('request');
var async = require('async');


function JSONEncode(content, options) {  
  if ( ! (this instanceof JSONEncode))
    return new JSONEncode(options);

  if (! options) options = {};
  options.objectMode = true;
  Transform.call(this, options);
  this.date = content;
}

inherits(JSONEncode, Transform);

var counter = 0;

JSONEncode.prototype._transform = function _transform(obj, encoding, callback) {  
  var self = this;
  var total_length = obj.coordinates.length; 
  var iter_limits = Array.apply(null, {length: total_length}).map(Number.call, Number);
  var prev_limit = 0;
  async.each(iter_limits, function(limit, callback_one){
    try {
      async.each(obj.coordinates.slice(prev_limit, limit), function(coords, cb) {
        prev_limit = limit;
        endpoint = 'https://data.police.uk/api/crimes-street/all-crime?lat='+coords[1]+'&'+'lng='+coords[0]+'&date='+self.date;
        request(endpoint, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            var output = JSON.parse(body);
            obj.crimes = [coords, output];
            cb();
          } else {
            console.log(error);
          }
        });
      }, function(err) {
        if (err) {
          console.log('failed to process');
        } else {
          if (limit === 0){
            self.push("{\"crimes\": [");
          } else if (limit === total_length-1){
            setTimeout(function(){self.push(JSON.stringify(obj.crimes)+']}')}, 1000);
          } else {
            self.push(JSON.stringify(obj.crimes)+',');
          }
          console.log(counter++);
        }
      });
    } catch(err) {
      return callback(err);
    }
  }, function(error_one){
    if(error_one){
      console.log('failed to estimate limits');
    } else {
      callback_one();
      callback()
    }
  })
};

module.exports = JSONEncode;
