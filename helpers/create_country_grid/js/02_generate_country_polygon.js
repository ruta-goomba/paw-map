var turf = require('turf'),
	path = require('path'),
	fs = require('fs');


function createRectangleEnclosingTheCountry(lng1, lng2, lat1, lat2, file_name){
	var polygon = turf.polygon([[
 		[lng1, lat1],
 		[lng2, lat1],
 		[lng2, lat2],
 		[lng1, lat2],
 		[lng1, lat1]
	]]);

	fs.writeFileSync(path.resolve('../geojson', file_name), JSON.stringify(polygon, null, 2) , 'utf-8');

}

//UK polygon
createRectangleEnclosingTheCountry(-8.65, 1.77, 49.86, 60.86, 'uk_polygon2.geojson');

