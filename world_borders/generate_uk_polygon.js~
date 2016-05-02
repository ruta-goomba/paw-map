var turf = require('turf');

var polygon = turf.polygon([[
 [-8.65, 49.86],
 [1.77, 49.86],
 [1.77, 60.86],
 [-8.65, 60.86],
 [-8.65, 49.86]
]]);

fs.writeFileSync(path.join(__dirname,'uk_polygon.geojson'), JSON.stringify(polygon, null, 2) , 'utf-8');

