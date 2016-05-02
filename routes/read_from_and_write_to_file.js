var obj;
fs.readFile(path.join(__dirname, 'world_borderscp.geojson'), 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  for (i=0; i<obj.features.length; i++){
    if (obj.features[i].properties.NAME == 'United Kingdom') {
      fs.writeFileSync(path.join(__dirname,'uk_border.geojson'), JSON.stringify(obj.features[i], null, 2) , 'utf-8');
    }
  }
});

