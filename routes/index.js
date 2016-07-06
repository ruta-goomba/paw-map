var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');
var path = require('path');
var async = require('async');

var work = [query_police_api, read_in_heatmap_data];

////////////////////////////////////////////////////////
////////////// get crime data from uk police api ///////
////////////////////////////////////////////////////////

var lng = '-1.131592';
var lat = '52.629729';
var crime_categories = [];
var no_of_crimes_in_category = [];

var police_api_callback = function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var output = JSON.parse(body);
      var current_category, index_of_category;
      for (var i=0; i<output.length; i+= 1) {
        current_category = output[i].category;
        index_of_category = crime_categories.indexOf(current_category);
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
  };

function query_police_api(callback) {
  request('https://data.police.uk/api/crimes-street/all-crime?lat='+lat+'&'+'lng='+lng, police_api_callback)
  callback(null);
}
////////////////////////////////////////////////////////
////////////// read in heat map data ///////////////////
////////////////////////////////////////////////////////

var all_heat_maps = ['violent-crime', 'anti-social-behaviour', 'vehicle-crime', 'other-crime', 'theft-from-the-person', 'shoplifting', 'robbery', 'public-order', 'possession-of-weapons', 'other-theft', 'drugs', 'criminal-damage-arson', 'burglary', 'bicycle-theft'];
var all_dates = ['2015-05','2015-06', '2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04'];
var heatmap_data = {};
var core_path = 'helpers/create_crime_grid/json/uk/crimes/';

function read_in_heatmap_data(callback) {
  async.eachSeries(all_heat_maps, function(heatmap, cb){
    fs.readFile(core_path +heatmap+'.json', 'UTF8', function(err, data){
      if (err) {throw err}
      heatmap_data[heatmap] = JSON.parse(data);
      cb();
    });
  }, function(err){
    if (err) {throw err}
    callback(null);
  });
}

////////////////////////////////////////////////////////
////////////// GET home page. //////////////////////////
////////////////////////////////////////////////////////


async.series(work, done);


function done(err) {
  if (err) {throw err}
  router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Paw Map',
      all_dates: all_dates,
      crime_categories: crime_categories,
      no_of_crimes_in_category: no_of_crimes_in_category,
      violent_crime_heatmap_data: heatmap_data['violent-crime'],
      anti_social_behaviour_heatmap_data: heatmap_data['anti-social-behaviour'],
      vehicle_crime_heatmap_data: heatmap_data['vehicle-crime'],
      other_crime_heatmap_data: heatmap_data['other-crime'],
      theft_from_person_heatmap_data: heatmap_data['theft-from-the-person'],
      shoplifting_heatmap_data: heatmap_data['shoplifting'],
      robbery_heatmap_data: heatmap_data['robbery'],
      public_order_heatmap_data: heatmap_data['public-order'],
      possession_of_weapons_heatmap_data: heatmap_data['possession-of-weapons'],
      other_theft_heatmap_data: heatmap_data['other-theft'],
      drugs_heatmap_data: heatmap_data['drugs'],
      arson_heatmap_data: heatmap_data['criminal-damage-arson'],
      burglary_heatmap_data: heatmap_data['burglary'],
      bicycle_theft_heatmap_data: heatmap_data['bicycle-theft']
    });
  })
}


module.exports = router;
