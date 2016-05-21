var turf = require('turf'),
      fs = require('fs'),
    path = require('path'),
    border_poly;

var pt = {
  "type": "Feature",
  "properties": {
    "marker-color": "#f00"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [0, 0]
  }
};

function readinBorderPolygon(file_name, callback){
  fs.readFile(path.resolve('../geojson', file_name), 'utf8', function (err, data) {
    if (err) throw err;
    border_poly = JSON.parse(data);
    callback('Border data imported');
  });
}

function cleanGrid(country, border_file_name, rectangular_grid_file_name, cleaned_grid_file_name){
  readinBorderPolygon(border_file_name, console.log);
  var cleaned_grid = {"geometry": { "coordinates": []}};
  fs.readFile(path.resolve('../json/'+country, rectangular_grid_file_name), 'utf8', function (err, data) {
    if (err) throw err;
    var uncleaned_grid = JSON.parse(data);
    for (var i=0; i< uncleaned_grid.geometry.coordinates.length; i++) {
      pt.geometry.coordinates = uncleaned_grid.geometry.coordinates[i];
      if (turf.inside(pt, border_poly)) {
        cleaned_grid.geometry.coordinates.push(pt.geometry.coordinates);
        console.log('point inside');
      } else {
        console.log('point outside');
      }
    }
    fs.writeFileSync(path.resolve('../json/'+country, cleaned_grid_file_name), JSON.stringify(cleaned_grid, null, 2) , 'utf-8');
  });
}

//UK
cleanGrid('uk', 'uk_border.geojson', 'uk_grid.json', 'uk_cleaned_grid2.json');





