var express = require('express');
var router = express.Router();
var request = require('request');

var lng = '-1.131592';
var lat = '52.629729';
var date;
var crime_categories = [];

request('https://data.police.uk/api/crimes-street/all-crime?lat='+lat+'&'+'lng='+lng, function (error, response, body) {
 if (!error && response.statusCode == 200) { 
   var output = JSON.parse(body);
   console.log(output.length);
   for (i=0; i<output.length; i++) {
     if (crime_categories.indexOf(output[i].category) == -1){
       crime_categories.push(output[i].category);
     }
   }
 } else {
   console.log(error);
 }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Paw Map', crime_categories: crime_categories });
});

module.exports = router;
