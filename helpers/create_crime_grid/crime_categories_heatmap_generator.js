var ReadStream = require('./file_readable_stream.js');
var crime_data = ReadStream(path.resolve('..', 'uk_crimes_grid_2016_01_20000.json');

var WriteStream = require('./file_writable_stream.js');
var crime_heatmap = WriteStream(path.join(__dirname, 'tmp_heatmap.json'));

crime_data.pipe(crime_heatmap); 

/*var crime_grid_files = ['5000', '10000', '15000', '20000', '25000', '30000', '35000', '40000', '45000', '50000', '55000', '60000', '65000', '70000', '75000', '80000', '84249']
//var all_crime_categories = ['violent-crime', 'anti-social-behaviour', 'vehicle-crime', 'other-crime', 'theft-from-the-person', 'shoplifting', 'robbery', 'public-order', 'possession-of-weapons', 'other-theft', 'drugs', 'criminal-damage-arson', 'burglary', 'bicycle-theft'];
var all_crime_categories = ['other-crime'];
var uk_crime_grid;
var counter = 0;
var latitude;
var longitude;
var crime_heatmap = [];

function get_crime_grid(crime){
  var writeStream = fs.createWriteStream(path.join(__dirname, crime+'_heatmap.json'), {encoding: 'utf8'});
  for (var n=0; n<crime_grid_files.length; n++){
    var readStream = fs.createReadStream(path.resolve('..', 'uk_crimes_grid_2016_01_'+crime_grid_files[n]+'.json'), {encoding: 'utf8'});
    readStream
    .on('data', function (data) {
      if (!uk_crime_grid){
      	uk_crime_grid = data;
      } else {
      	uk_crime_grid += data;
      }
   	})
   	.on('end', function(){
   	  try {
   	  	//console.log(uk_crime_grid);
   	  	uk_crime_grid = JSONStream.parse(uk_crime_grid);
	    for (var i=0; i<uk_crime_grid.geometry.crimes.length; i++){
		  if (uk_crime_grid.geometry.crimes[i].length > 0){
		    for (var j=0; j<uk_crime_grid.geometry.crimes[i].length; j++){
		      if (uk_crime_grid.geometry.crimes[i][j].category === crime){
		        counter++;
		      }	
		    }
		    if (counter > 0) {
		      crime_heatmap.push({location: uk_crime_grid.geometry.coordinates[i], weight: counter});
		    }
		    counter = 0;
		  } 
		}
      } catch (err) {
	      console.log(err);
	  }
   	});
  }
  readStream.pipe(writeStream);
};

(function generate_grids(){
  for (var i=0; i< all_crime_categories.length; i++) {
	get_crime_grid(all_crime_categories[i]);
	console.log('crime '+ all_crime_categories[i] +' grid created');
  }
}());*/
