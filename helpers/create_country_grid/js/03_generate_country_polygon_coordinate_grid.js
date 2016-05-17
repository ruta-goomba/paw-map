var fs = require('fs');
var path = require('path');

var rectangle;
var grid = {"geometry": { "coordinates": []}};
var length=0;
var height=0;
var left_most;
var bottom_most;
var counter = 1;
fs.readFile(path.join(__dirname, 'uk_polygon.geojson'), 'utf8', function (err, data) {
  if (err) throw err;
  rectangle = JSON.parse(data);
  console.log(rectangle.geometry.coordinates[0]);
  for (i=0; i<rectangle.geometry.coordinates[0].length; i++){
    if (length === 0){
      length = Math.abs(rectangle.geometry.coordinates[0][i][0] - rectangle.geometry.coordinates[0][i+1][0]);
      if (rectangle.geometry.coordinates[0][i][0] < rectangle.geometry.coordinates[0][i+1][0]) {
         left_most = rectangle.geometry.coordinates[0][i][0];
      } else if (rectangle.geometry.coordinates[0][i][0] < rectangle.geometry.coordinates[0][i+1][0]) {
         left_most = rectangle.geometry.coordinates[0][i+1][0];
      }
    } else if (height === 0) {
      height = Math.abs(rectangle.geometry.coordinates[0][i][1] - rectangle.geometry.coordinates[0][i+1][1]);
      if (rectangle.geometry.coordinates[0][i][1] < rectangle.geometry.coordinates[0][i+1][1]) {
         bottom_most = rectangle.geometry.coordinates[0][i][1];
      } else if (rectangle.geometry.coordinates[0][i][1] < rectangle.geometry.coordinates[0][i+1][1]) {
         bottom_most = rectangle.geometry.coordinates[0][i+1][1];
      }

    } else {
      break;
    }
  }
  var bottom_most_init = bottom_most;
  console.log('length is '+ length + ' and left most is '+ left_most);
  console.log('height is '+ height + ' and bottom most is '+ bottom_most);
  for (j=0; j<length; j+=0.02){
    left_most += 0.02;
    bottom_most = bottom_most_init;
    console.log ("length is "+length+" and j is "+j);
    for (k=0; k<height; k+=0.02) {
      bottom_most += 0.02;
      console.log ("height is "+height+" and k is "+k);
      console.log(counter++);
      grid.geometry.coordinates.push([left_most, bottom_most]);
    }
  }
  fs.writeFileSync(path.join(__dirname,'uk_grid.json'), JSON.stringify(grid, null, 2) , 'utf-8');
});
     
