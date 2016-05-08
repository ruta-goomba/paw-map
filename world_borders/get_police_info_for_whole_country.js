var fs = require('fs');
var path = require('path');
var request = require('request');
var async = require('async');

var uk_crimes_grid_2016_01 = {"geometry": {"coordinates": [],"crimes": []}};
var uk_cleaned_grid;
var lat;
var lng;
var endpoint;
var total_length;
var counter=0;

(function query_police_api() {
  fs.readFile(path.join(__dirname, 'uk_cleaned_grid.json'), 'utf8', function (err, data) {
    if (err) throw err;
    uk_cleaned_grid = JSON.parse(data);
    total_length = uk_cleaned_grid.geometry.coordinates.length;
    async.each(uk_cleaned_grid.geometry.coordinates, function(coords, callback) {
      endpoint = 'https://data.police.uk/api/crimes-street/all-crime?lat='+coords[1]+'&'+'lng='+coords[0]+'&date=2016-01';
      console.log(endpoint);
      request(endpoint, function (error, response, body) {
        console.log('executing... total length is '+ total_length + ' and counter is ' + counter++);
        if (!error && response.statusCode == 200) {
          var output = JSON.parse(body);
          console.log('request output is '+output);
          uk_crimes_grid_2016_01.geometry.coordinates.push(coords);
          uk_crimes_grid_2016_01.geometry.crimes.push(output);
          if (counter%5000 === 0 || counter ===total_length-1){
            fs.writeFileSync(path.join(__dirname,'uk_crimes_grid_2016_01_'+counter+'.json'), JSON.stringify(uk_crimes_grid_2016_01, null, 2) , 'utf-8');
            uk_crimes_grid_2016_01 = {"geometry": {"coordinates": [],"crimes": []}};
          }
          callback();
        } else {
          console.log(error);
        }
      });
    }, function(err) {
      if (err) {
        console.log('failed to process');
      } else {
        console.log('created crimes grid files');
      }
    });
  });
}());

