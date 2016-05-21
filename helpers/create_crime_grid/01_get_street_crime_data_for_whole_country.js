var path = require('path'),
    JSONStream = require('JSONStream');

function get_crime_data(country, date){
  var ReadStream = require('../streams/file_readable_stream.js'),
      uk_cleaned_grid = ReadStream(path.resolve('../create_country_grid/json/'+country, country+'_cleaned_grid_test.json'));
  
  var TransformStream = require('../streams/json_transform_stream.js'),
      uk_transform_grid = TransformStream(date);
  
  var WriteStream = require('../streams/file_writable_stream.js'),
      uk_crimes_grid = WriteStream(path.resolve('json/'+country+'/'+date+'/all_crimes', country+'_crimes_grid_'+date+'_test.json'));

  uk_cleaned_grid
  .pipe(JSONStream.parse('geometry'))
  .pipe(uk_transform_grid)
  .pipe(uk_crimes_grid); 
}

// UK, 2016-01
get_crime_data('uk', '2016-01');

