var async = require('async'),
  fs = require('fs'),
  path = require('path'),
  all_heat_maps = ['violent-crime', 'anti-social-behaviour', 'vehicle-crime', 'other-crime', 'theft-from-the-person', 'shoplifting', 'robbery', 'public-order', 'possession-of-weapons', 'other-theft', 'drugs', 'criminal-damage-arson', 'burglary', 'bicycle-theft'],
  all_dates = ['2015-05','2015-06', '2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04'],
  read_path = 'json/uk/dates/',
  topValues = [];


function findTopSpots(date){
  async.eachSeries(all_heat_maps, function(heatmap, cb){
    fs.readFile(path.resolve(read_path + date +'/selected_crimes',
        heatmap+'_heatmap.json'), 'UTF8',
      function(err, data){
        if (err) {throw err};
        var parsedData = JSON.parse(data);
        var topIndices = findIndicesOfMax(parsedData, 3);
        for (var i = 0; i<topIndices.length; i++){
          topValues.push(parsedData[topIndices[i]]);
        }
        console.log('writing to file...');
        fs.writeFile(path.resolve(read_path + date +'/selected_crimes',
            heatmap+'_top_spots.json'),
          JSON.stringify(topValues), 'utf8',
          function(err){
            if (err) {throw err};
          }
        );
        topValues = [];
        cb();
      });
  }, function (err){
    if (err) {throw err};
    console.log('top spots files created');
  });
}

function findIndicesOfMax(inp, count) {
  var outp = [];
  for (var i = 0; i < inp.length; i++) {
    outp.push(i); // add index to output array
    if (outp.length > count) {
      outp.sort(function(a, b) { return inp[b]['weight'] - inp[a]['weight']; }); // descending sort the output array
      outp.pop(); // remove the last index (index of smallest element in output array)
    }
  }
  return outp;
}

findTopSpots('2016-04');
