var path = require('path'),
    JSONStream = require('JSONStream');

function get_crime_data(country, date){
  var ReadStream = require('../streams/file_readable_stream.js'),
      cleaned_grid = ReadStream(path.resolve('../create_country_grid/json/'+country, country+'_cleaned_grid.json'));

  var TransformStream = require('../streams/json_transform_stream.js'),
      transform_grid = TransformStream(date);

  var WriteStream = require('../streams/file_writable_stream.js'),
      crimes_grid = WriteStream(path.resolve('json/'+country+'/dates/'+date+'/all_crimes', country+'_crimes_grid_'+date+'.json'));

  cleaned_grid
  .pipe(JSONStream.parse('geometry'))
  .pipe(transform_grid)
  .pipe(crimes_grid);
}

// UK, 2016-01
get_crime_data('uk', '2013-01');

