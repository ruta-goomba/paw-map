var path = require('path'),
    JSONStream = require('JSONStream'),
    all_crime_categories = ['violent-crime', 'anti-social-behaviour', 'vehicle-crime', 'other-crime', 'theft-from-the-person', 'shoplifting', 'robbery', 'public-order', 'possession-of-weapons', 'other-theft', 'drugs', 'criminal-damage-arson', 'burglary', 'bicycle-theft'];

function filter_crime_data(country, date, crime_category){
  var ReadStream = require('../streams/file_readable_stream.js'),
      crime_data = ReadStream(path.resolve('../create_crime_grid/json/'+country+'/'+date+'/all_crimes', country+'_crimes_grid_'+date+'_test.json'));
  
  var TransformStream = require('../streams/extract_crime_categories_transform_stream.js'),
      crime_category_grid = TransformStream(crime_category);

  var WriteStream = require('../streams/file_writable_stream.js'),
      crime_category_heatmap = WriteStream(path.resolve('../create_crime_grid/json/'+country+'/'+date+'/selected_crimes', crime_category+'_test_heatmap.json'));

  crime_data
  .pipe(JSONStream.parse('crimes'))
  .pipe(crime_category_grid)
  .pipe(crime_category_heatmap);
} 

// runs out of memory when run for multiple crime categories
function create_heatmaps_for_all_crimes(crime_categories, country, date){
  for (i=0; crime_categories.length;i++){
    filter_crime_data(country, date, crime_categories[i]);
  }
}

//uk
//create_heatmaps_for_all_crimes(test_crime_categories, 'uk', '2016-01');
filter_crime_data('uk', '2016-01', 'other-theft');



