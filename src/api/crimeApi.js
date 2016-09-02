
const crime_categories = [
  'violent-crime', 'anti-social-behaviour', 'public-order', 'vehicle-crime', 'drugs',
  'possession-of-weapons', 'theft-from-the-person', 'shoplifting', 'robbery', 'burglary',
  'bicycle-theft', 'other-theft', 'criminal-damage-arson', 'other-crime'
];
const crime_dates = [
  '2015-03', '2015-04', '2015-05','2015-06', '2015-07', '2015-08',
  '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03',
  '2016-04', '2016-05'];

class CrimeApi {
  static getCrimes(crime) {
    return new Promise((resolve, reject) => {
      try {
        // a long and horrible chain of if statements since dynamic loading produced memory leaks
        if (crime === 'violent-crime'){
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/violent-crime_heatmap.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'anti-social-behaviour') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/anti-social-behaviour_heatmap.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'public-order'){
            System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/public-order_heatmap.json').then(crimes => {
              resolve(crimes);
            });
        } else if (crime === 'vehicle-crime') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/vehicle-crime_heatmap.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'drugs') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/drugs_heatmap.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'possession-of-weapons') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/possession-of-weapons_heatmap.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'theft-from-the-person') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/theft-from-the-person_heatmap.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'shoplifting') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/shoplifting_heatmap.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'robbery') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/robbery_heatmap.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'burglary') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/burglary_heatmap.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'bicycle-theft') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/bicycle-theft_heatmap.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'other-theft') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/other-theft_heatmap.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'criminal-damage-arson') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/criminal-damage-arson_heatmap.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'other-crime') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/other-crime_heatmap.json').then(crimes => {
            resolve(crimes);
          });
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  static getCrimeHotSpots(crime) {
    return new Promise((resolve, reject) => {
      try {
        // a long and horrible chain of if statements since dynamic loading produced memory leaks
        if (crime === 'violent-crime'){
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/violent-crime_top_spots.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'anti-social-behaviour') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/anti-social-behaviour_top_spots.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'public-order'){
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/public-order_top_spots.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'vehicle-crime') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/vehicle-crime_top_spots.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'drugs') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/drugs_top_spots.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'possession-of-weapons') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/possession-of-weapons_top_spots.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'theft-from-the-person') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/theft-from-the-person_top_spots.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'shoplifting') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/shoplifting_top_spots.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'robbery') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/robbery_top_spots.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'burglary') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/burglary_top_spots.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'bicycle-theft') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/bicycle-theft_top_spots.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'other-theft') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/other-theft_top_spots.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'criminal-damage-arson') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/criminal-damage-arson_top_spots.json').then(crimes => {
            resolve(crimes);
          });
        } else if (crime === 'other-crime') {
          System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/other-crime_top_spots.json').then(crimes => {
            resolve(crimes);
          });
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  static getCrimeTotals() {
    return new Promise((resolve, reject) => {
      try {
        System.import('../../helpers/create_crime_grid/json/uk/crimes/total_crimes.json').then(crimes => {
          for (let key in crimes) {
            for (let i = 1; i < crimes[key].length; i++) {
              let label = crimes[key][i]['x'];
              if (label.substr(label.length - 2) !== '01'){
                crimes[key][i]['x'] = label.substr(label.length - 5);
              }
            }
          }
          resolve(crimes);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  static getCrimesInitial() {
    return new Promise((resolve, reject) => {
      try {
        System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/violent-crime_heatmap.json').then(crimes => {
          resolve(crimes);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  static getCrimeHotSpotsInitial() {
    return new Promise((resolve, reject) => {
      try {
        System.import('../../helpers/create_crime_grid/json/uk/dates/2016-04/selected_crimes/violent-crime_top_spots.json').then(crimes => {
          resolve(crimes);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  static getAllCrimeCategories(){
    return new Promise((resolve, reject) => {
      try {
        resolve(Object.assign([], crime_categories));
      } catch (err) {
        reject(err);
      }
    });
  }

  static getAllCrimeDates(){
    return new Promise((resolve, reject) => {
      try {
        resolve(Object.assign([], crime_dates));
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default CrimeApi;
