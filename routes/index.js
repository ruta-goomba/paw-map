var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');
var path = require('path');
var async = require('async');

var work = [query_police_api, read_in_heatmap_data, set_google_maps_api_endpoint];

////////////////////////////////////////////////////////
////////////// get crime data from uk police api ///////
////////////////////////////////////////////////////////

var lng = '-1.131592';
var lat = '52.629729';
var crime_categories = [];
var no_of_crimes_in_category = [];

var police_api_callback = function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var output = JSON.parse(body);
      for (i=0; i<output.length; i++) {
        var current_category = output[i].category;
        var index_of_category = crime_categories.indexOf(current_category)
        if (index_of_category == -1){
          crime_categories.push(current_category);
          no_of_crimes_in_category[crime_categories.length-1] = 1;
        } else {
          no_of_crimes_in_category[index_of_category] += 1;
        }
      }
    } else {
      console.log(error);
    }
  }

function query_police_api(callback) {
  request('https://data.police.uk/api/crimes-street/all-crime?lat='+lat+'&'+'lng='+lng, police_api_callback)
  callback(null);
}
////////////////////////////////////////////////////////
////////////// read in heat map data ///////////////////
////////////////////////////////////////////////////////

var all_heat_maps = ['violent-crime', 'anti-social-behaviour', 'vehicle-crime', 'other-crime', 'theft-from-the-person', 'shoplifting', 'robbery', 'public-order', 'possession-of-weapons', 'other-theft', 'drugs', 'criminal-damage-arson', 'burglary', 'bicycle-theft'];
var few_heat_maps = ['violent-crime', 'anti_social_behaviour', 'vehicle_crime'];
var heatmap_data = {};
var core_path = 'helpers/create_crime_grid/json/uk/2016-01/selected_crimes/';

function read_in_heatmap_data(callback) {
  async.each(few_heat_maps, function(heatmap, cb){
    fs.readFile(core_path +heatmap+'_heatmap.json', 'UTF8', function(err, data){
      if (err) {throw err};
      heatmap_data[heatmap] = data;
      cb();
    });
  }, function(err){
    if (err) {
      throw err
    } else {
      console.log(Object.keys(heatmap_data));
      callback(null);
    }
  });
}

////////////////////////////////////////////////////////
////////////// get a map from google maps api //////////
////////////////////////////////////////////////////////

var key_file_path = path.resolve('keys', 'gmaps_api_browser_key');
var key;
var map_endpoint;

var key_query_callback = function(err, data) {
  if (err) {throw err};
  key = data;
  map_endpoint = 'https://maps.googleapis.com/maps/api/js?key='+key+'&libraries=visualization&callback=initMap';
}


function set_google_maps_api_endpoint(callback) {
  fs.readFile(key_file_path, 'UTF8', key_query_callback);
  callback(null);
}

////////////////////////////////////////////////////////
////////////// GET home page. //////////////////////////
////////////////////////////////////////////////////////


async.series(work, done);


function done(err) {
  if (err) throw err;
  router.get('/', function(req, res, next) {
    res.render('index', { 
         title: 'Paw Map', 
         crime_categories: crime_categories, 
         no_of_crimes_in_category: no_of_crimes_in_category,
         map_endpoint: map_endpoint,
         violent_crime_heatmap_data: heatmap_data['violent-crime'],
         anti_social_behaviour_heatmap_data: heatmap_data['anti_social_behaviour'],
         vehicle_crime_heatmap_data: heatmap_data['vehicle_crime']
    });
  })
}


module.exports = router;

