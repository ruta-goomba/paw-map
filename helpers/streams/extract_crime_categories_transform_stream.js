var Transform = require('stream').Transform; 
var inherits = require('util').inherits;
var async = require('async');


function JSONClean(content, options) {  
  if ( ! (this instanceof JSONClean))
    return new JSONClean(content, options);

  if (! options) options = {};
  options.objectMode = true;
  Transform.call(this, options);
  this.crime_category = content;
}

inherits(JSONClean, Transform);

var output = {"location":undefined, weight:0};
var counter = 0;

JSONClean.prototype._transform = function _transform(obj, encoding, callback) {  
  var self = this;
  var first_write = true;
  var total_length = obj.length;
  var prev_limit = 0;
  var iter_limits = Array.apply(null, {length: total_length}).map(Number.call, Number);
  async.each(iter_limits, function(limit, callback_one){
    try{
      async.each(obj.slice(prev_limit, limit), function(coord, inner_callback){
        prev_limit = limit;
        if (coord[1][0]){
          for (i=0; i<coord[1].length; i++){
            if (coord[1][i].category === self.crime_category){
              output.location=coord[0];
              counter++;
            }
          }
        }
        inner_callback();
      }, function(err){
        if (err){
          console.log('failed to process');
        } else {
          if (limit === 0){
            self.push('[');
          } 
          if (counter>0){
            output.weight = counter;
            if (!first_write){
              self.push(','+JSON.stringify(output));
            } else {
              self.push(JSON.stringify(output));
              first_write = false;
            }
          }
          if (limit === total_length-1){
            setTimeout(function(){self.push(']')}, 2000);
          }
          //console.log(counter);
          counter = 0;
        }
      });
    } catch(err){
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

module.exports = JSONClean;
