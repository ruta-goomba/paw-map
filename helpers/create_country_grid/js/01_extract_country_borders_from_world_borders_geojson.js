var fs = require('fs'),
    path = require('path'),
    obj;

function extractCountryBorders(country, file_name){
	fs.readFile(path.resolve('../geojson', 'world_borders.geojson'), 'utf8', function (err, data) {
  		if (err) throw err;
  		obj = JSON.parse(data);
  		for (i=0; i<obj.features.length; i++){
    		if (obj.features[i].properties.NAME == country) {
      			fs.writeFileSync(path.resolve('../geojson',file_name), JSON.stringify(obj.features[i], null, 2) , 'utf-8');
    		}
  		}
	});
}

// extract uk borders
extractCountryBorders('United Kingdom', 'uk_border.geojson');

