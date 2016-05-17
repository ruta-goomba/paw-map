var turf = require('turf');
var fs = require('fs');
var path = require('path');

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

var border_poly;
fs.readFile(path.join(__dirname, 'uk_border.geojson'), 'utf8', function (err, data) {
  if (err) throw err;
  border_poly = JSON.parse(data);
  //console.log(border_poly.geometry.coordinates[0][0][0]);
});


var cleaned_grid = {"geometry": { "coordinates": []}};
var uncleaned_grid;

fs.readFile(path.join(__dirname, 'uk_grid.json'), 'utf8', function (err, data) {
  if (err) throw err;
  uncleaned_grid = JSON.parse(data);
  for (var i=0; i< uncleaned_grid.geometry.coordinates.length; i++) {
    pt.geometry.coordinates = uncleaned_grid.geometry.coordinates[i];
    if (turf.inside(pt, border_poly)) {
      cleaned_grid.geometry.coordinates.push(pt.geometry.coordinates);
      console.log('point inside');
    } else {
      console.log('point outside');
    }
  }
  fs.writeFileSync(path.join(__dirname,'uk_cleaned_grid.json'), JSON.stringify(cleaned_grid, null, 2) , 'utf-8');
});


