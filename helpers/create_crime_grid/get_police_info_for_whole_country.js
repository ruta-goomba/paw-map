var path = require('path');
var JSONStream = require('JSONStream');

var ReadStream = require('./crime_categories/file_readable_stream.js');
var uk_cleaned_grid = ReadStream(path.join(__dirname, 'uk_cleaned_grid.json'));

var TransformStream = require('./crime_categories/json_transform_stream.js');
var uk_transform_grid = TransformStream();

var WriteStream = require('./crime_categories/file_writable_stream.js');
var uk_crimes_grid = WriteStream(path.join(__dirname, 'uk_crimes_grid_2016_01.json'));

uk_cleaned_grid
.pipe(JSONStream.parse('geometry'))
.pipe(uk_transform_grid)
.pipe(uk_crimes_grid); 
