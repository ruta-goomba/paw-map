var turf = require('turf'),
	path = require('path');

function createRectangleEnclosingTheCountry(lng1, lng2, lat1, lat2, path_to_file){
	var polygon = turf.polygon([[
 		[lng1, lat1],
 		[lng2, lat1],
 		[lng2, lat2],
 		[lng1, lat2],
 		[lng1, lat1]
	]]);

	fs.writeFileSync(path_to_file, JSON.stringify(polygon, null, 2) , 'utf-8');

}

//UK polygon
createRectangleEnclosingTheCountry(-8.65, 1.77, 49.86, 60.86, path.resolve('geojson', 'uk_polygon2.geojson'));

