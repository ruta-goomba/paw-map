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

var output = {"location":undefined, weight:0},
    counter = 0,
    end_of_array_counter = 0,
    start_of_array_counter = 0,
    end_of_object_detector = 0,
    start_of_array_detector = 0,
    form_coords_array = false,
    first_coord_passed = false,
    crimes_array_not_empty = false,
    first_push_done = false,
    coords_array = [];

JSONClean.prototype._transform = function _transform(obj, encoding, callback) {  
  var self = this;
  // detect beginning of the object
  if (counter === 0){
    self.push("[");
  } 

  //detect end of the object
  if (obj.name === "endArray"){
    if (counter - end_of_array_counter === 1){
      end_of_object_detector++;
      if (end_of_object_detector === 1){
        if (output.weight > 0){
          if (first_push_done){
            self.push(','+JSON.stringify(output, null, "\t"));
            //console.log('added coord '+ counter);
            output = {"location":undefined, weight:0};
          } else {
            self.push(JSON.stringify(output, null, "\t"));
            output = {"location":undefined, weight:0};
            first_push_done = true;
          }
          crimes_array_not_empty = false;
        }
      }
      if (end_of_object_detector === 2){
        self.push("]");
      }
      end_of_array_counter = counter;
    } else {
      end_of_object_detector = 0;
      end_of_array_counter = counter;
    }
  }

  // detect presence of crimes under specific coordinate
  if (obj.name === "startObject"){
    if (counter - start_of_array_counter === 1){
      output.location = coords_array;
      crimes_array_not_empty = true;
    }
  }

  if (crimes_array_not_empty){
    if(obj.value === self.crime_category){
      output.weight++;
    }
  }



  // re-create each coordinates array from stream
  if (form_coords_array){
    if (obj.name === "numberChunk"){
      if (first_coord_passed){
        if (coords_array[1]){
          coords_array[1] = coords_array[1]+obj.value;
        } else {
          coords_array.push(obj.value);
        }
      } else {
        if (coords_array[0]){
          coords_array[0] = coords_array[0]+obj.value;
        } else {
          coords_array.push(obj.value);
        }
      }
    } else if (obj.name === "endNumber"){
      first_coord_passed = true;
    } 
  } else {
    coords_array = [];
  }

  // detect when coordinates array starts
  if (obj.name === "startArray"){
    if (counter - start_of_array_counter === 1){
      start_of_array_detector++;
      if (start_of_array_detector === 1){
        form_coords_array = true;
      }
      start_of_array_counter = counter;
    } else {
      start_of_array_detector = 0;
      start_of_array_counter = counter;
      form_coords_array = false;
      first_coord_passed = false;
    }
  }

  //increment counter
  counter++;
  // stream through the object
  async.eachLimit(obj.crimes, 30, function(stream_object, cb){
    cb();
  }, function(err){
    if (err){
      console.log('failed to process');
    } else {
      callback();
    }
  });
};

module.exports = JSONClean;
