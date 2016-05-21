var fs = require('fs'),
    path = require('path');

function generate_rectangular_grid(country, input_file_name, output_file_name){
  fs.readFile(path.resolve('../geojson', input_file_name), 'utf8', function (err, data) {
    if (err) throw err;
    var rectangle = JSON.parse(data);
    [width, height, left_most, bottom_most] = extract_starting_coords_and_width_and_height(rectangle.geometry.coordinates[0]);
    var grid = generate_coordinates(left_most, bottom_most, width, height);
    fs.writeFileSync(path.resolve('../json/'+country,output_file_name), JSON.stringify(grid, null, 2) , 'utf-8');
  });
}
     
function extract_starting_coords_and_width_and_height(data){
  var width = 0,
      height = 0,
      left_most = 1000,
      bottom_most = 1000;

  for (i=0; i<data.length; i++){
    if (width === 0){
      width = Math.abs(data[i][0] - data[i+1][0]);
      if (data[i][0] < left_most){
        left_most = data[i][0];
      } 
    } else if (height === 0){
      height = Math.abs(data[i][1] - data[i+1][1]);
      if (data[i][1] < bottom_most){
        bottom_most = data[i][1];
      }
    } else {
      break
    }
  }
  return [width, height, left_most, bottom_most];
}

function generate_coordinates(left_most, bottom_most, width, height){
  var grid = {"geometry": { "coordinates": []}};
  var bottom_most_init = bottom_most;
  var counter = 0;
  for (j=0; j<width; j+=0.02){
    left_most += 0.02;
    bottom_most = bottom_most_init;
    for (k=0; k<height; k+=0.02) {
      bottom_most += 0.02;
      console.log(counter++);
      grid.geometry.coordinates.push([left_most, bottom_most]);
    }
  }
  return grid;
}

// UK
generate_rectangular_grid('uk', 'uk_polygon.geojson', 'uk_grid.json');