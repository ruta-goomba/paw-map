var async = require('async'),
  fs = require('fs'),
  path = require('path'),
  all_heat_maps = ['violent-crime', 'anti-social-behaviour', 'vehicle-crime', 'other-crime', 'theft-from-the-person', 'shoplifting', 'robbery', 'public-order', 'possession-of-weapons', 'other-theft', 'drugs', 'criminal-damage-arson', 'burglary', 'bicycle-theft'],
  all_dates = ['2015-05','2015-06', '2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04'],
  total_crimes_object = {},
  total_crimes = 0;
  read_path = 'json/uk/dates/',
  write_path = 'json/uk/crimes/';

function read_in_heatmap_data() {
  async.eachSeries(all_heat_maps, get_crime_type_info, final_callback);
}

var get_crime_type_info = function(heatmap, callback){
  async.eachSeries(all_dates, function(date, cb){
    fs.readFile(path.resolve(read_path + date +'/selected_crimes',
        heatmap+'_heatmap.json'), 'UTF8',
      function(err, data){
        if (err) {throw err};
        var parsedData = JSON.parse(data);
        for (var i=0; i<parsedData.length; i++){
          total_crimes += parsedData[i]['weight'];
        }
        console.log(total_crimes);
        total_crimes_object[date]=total_crimes;
        total_crimes = 0;
        cb();
      });
  }, function (err){
    if (err) {throw err};
    fs.writeFile(path.resolve(write_path,
        heatmap+'_total_crimes.json'),
      JSON.stringify(total_crimes_object), 'utf8',
      function(err){
        if (err) {throw err};
        callback();
      });
    total_crimes_object = {};
    console.log('middle callback');
  });
}

var final_callback = function (err){
  if (err) {throw err};
  console.log('final callback');
}

read_in_heatmap_data();
