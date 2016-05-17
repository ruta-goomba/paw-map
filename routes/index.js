var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');
var path = require('path');
var async = require('async');

var lng = '-1.131592';
var lat = '52.629729';
var date;
var crime_categories = [];
var no_of_crimes_in_category = [];
var chart_data;

var work = [query_police_api, read_in_heatmap_data, set_google_maps_api_endpoint];

// get crime data from uk police api

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

// read in heat map data
var violent_crime_heatmap_file_path = path.resolve('world_borders/crime_categories/violent_crime', 'violent_crime_heatmap.json');
var anti_social_behaviour_heatmap_file_path = path.resolve('world_borders/crime_categories/anti_social_behaviour', 'anti_social_behaviour_heatmap.json');
var vehicle_crime_heatmap_file_path = path.resolve('world_borders/crime_categories/vehicle_crime', 'vehicle_crime_heatmap.json');

var violent_crime_heatmap_data;
var anti_social_behaviour_heatmap_data;
var vehicle_crime_heatmap_data;

var violent_crime_heatmap_file_callback = function(err, data) {
  if (err) {throw err};
    violent_crime_heatmap_data = data;
}

var anti_social_behaviour_heatmap_file_callback = function(err, data) {
  if (err) {throw err};
    anti_social_behaviour_heatmap_data = data;
}

var vehicle_crime_heatmap_file_callback = function(err, data) {
  if (err) {throw err};
    vehicle_crime_heatmap_data = data;
}


function read_in_heatmap_data(callback) {
  fs.readFile(violent_crime_heatmap_file_path, 'UTF8', violent_crime_heatmap_file_callback);
  fs.readFile(anti_social_behaviour_heatmap_file_path, 'UTF8', anti_social_behaviour_heatmap_file_callback);
  fs.readFile(vehicle_crime_heatmap_file_path, 'UTF8', vehicle_crime_heatmap_file_callback);
  callback(null);
}

// get a map from google maps api
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

/* GET home page. */


async.series(work, done);


function done(err) {
  if (err) throw err;
  router.get('/', function(req, res, next) {
    res.render('index', { 
         title: 'Paw Map', 
         crime_categories: crime_categories, 
         no_of_crimes_in_category: no_of_crimes_in_category,
         map_endpoint: map_endpoint,
         violent_crime_heatmap_data: violent_crime_heatmap_data,
         anti_social_behaviour_heatmap_data: anti_social_behaviour_heatmap_data,
         vehicle_crime_heatmap_data: vehicle_crime_heatmap_data
    });
  })
}


module.exports = router;

