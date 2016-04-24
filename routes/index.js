var express = require('express');
var router = express.Router();
var request = require('request');

var lng = '-1.131592';
var lat = '52.629729';
var date;
var crime_categories = [];
var no_of_crimes_in_category = [];

request('https://data.police.uk/api/crimes-street/all-crime?lat='+lat+'&'+'lng='+lng, function (error, response, body) {
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
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Paw Map', crime_categories: crime_categories, no_of_crimes_in_category: no_of_crimes_in_category });
});

module.exports = router;
