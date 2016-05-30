var path = require('path'),
    JSONStream = require('JSONStream'),
    async = require('async'),
    Parser = require("stream-json/Parser"),
    Streamer = require("stream-json/Streamer"),
    parser = new Parser(),
    streamer = new Streamer(),
    all_crime_categories = ['violent-crime', 'anti-social-behaviour', 'vehicle-crime', 'other-crime', 'theft-from-the-person', 'shoplifting', 'robbery', 'public-order', 'possession-of-weapons', 'other-theft', 'drugs', 'criminal-damage-arson', 'burglary', 'bicycle-theft'];

function filter_crime_data(country, date, crime_category){
  var ReadStream = require('../streams/file_readable_stream.js'),
      crime_data = ReadStream(path.resolve('../create_crime_grid/json/'+country+'/'+date+'/all_crimes', country+'_crimes_grid_'+date+'.json'));
  
  var TransformStream = require('../streams/extract_crime_categories_transform_stream.js'),
      crime_category_grid = TransformStream(crime_category);

  var WriteStream = require('../streams/file_writable_stream.js'),
      crime_category_heatmap = WriteStream(path.resolve('../create_crime_grid/json/'+country+'/'+date+'/selected_crimes', crime_category+'_heatmap.json'));

  crime_data
  .pipe(parser)
  .pipe(streamer)
  .pipe(crime_category_grid)
  .pipe(crime_category_heatmap);
} 

function create_heatmaps_for_all_crimes(crime_categories, country, date, callback){
  async.eachSeries(crime_categories, function(crime_category, cb){
    filter_crime_data(country, date, crime_category);
    cb();
  }, function(err){
    if (err){
      console.log(err);
    } else {
      callback('execution finished');
    }
  });
}

//uk
//create_heatmaps_for_all_crimes(all_crime_categories, 'uk', '2016-01', console.log);
filter_crime_data('uk', '2016-01', 'violent-crime');



