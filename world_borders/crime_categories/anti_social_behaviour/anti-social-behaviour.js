var fs = require('fs');
var path = require('path');

var crime_grid_files = ['5000', '10000', '15000', '20000', '25000', '30000', '35000', '40000', '45000', '50000', '55000', '60000', '65000', '70000', '75000', '80000', '84249']
var counter = 0;
var latitude;
var longitude;
var anti_social_behaviour_heatmap = [];

(function get_violent_crime_grid(){
	for (var n=0; n<crime_grid_files.length; n++){
	  fs.readFile(path.resolve('../..', 'uk_crimes_grid_2016_01_'+crime_grid_files[n]+'.json'), 'utf8', function (err, data) {
	    if (err) throw err;
	    var uk_crime_grid = JSON.parse(data);
	    for (var i=0; i<uk_crime_grid.geometry.crimes.length; i++){
	      if(uk_crime_grid.geometry.crimes[i].length > 0){
	        for (var j=0; j<uk_crime_grid.geometry.crimes[i].length; j++){
	        	if (uk_crime_grid.geometry.crimes[i][j].category === 'anti-social-behaviour'){
	               counter++;
	        	}	
	        }
	        if (counter > 0) {
	          anti_social_behaviour_heatmap.push({location: uk_crime_grid.geometry.coordinates[i], weight: counter});
	        }
	        counter = 0;
	      } 
	    }
	    fs.writeFileSync(path.join(__dirname,'anti_social_behaviour_heatmap.json'), JSON.stringify(anti_social_behaviour_heatmap, null, 2) , 'utf-8');
	  });
	}
}());
