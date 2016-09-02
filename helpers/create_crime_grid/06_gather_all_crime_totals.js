var async = require('async'),
  fs = require('fs'),
  path = require('path'),
  all_categories = ['violent-crime', 'anti-social-behaviour', 'vehicle-crime',
    'other-crime', 'theft-from-the-person', 'shoplifting', 'robbery',
    'public-order', 'possession-of-weapons', 'other-theft', 'drugs',
    'criminal-damage-arson', 'burglary', 'bicycle-theft'],
  read_path = 'json/uk/crimes/',
  total = {};

function gather_all_crime_totals (){
  async.eachSeries(all_categories, function(category, cb){
    fs.readFile(path.resolve(read_path,
        category+'_total_crimes.json'), 'UTF8',
      function(err, data){
        if (err) {throw err};
        var parsedData = JSON.parse(data);
        console.log(category);
        total[category] = parsedData;
        cb();
      });
  }, function (err){
    if (err) {throw err};
    fs.writeFile(path.resolve(read_path,'total_crimes.json'),
      JSON.stringify(total), 'utf8',
      function(err){
        if (err) {throw err};
        console.log('data written to file');
      });
  });
}

gather_all_crime_totals();
