import test from './test.json'; // eslint-disable-line

const core_path = '/home/goomba/Documents/paw-map/helpers/create_crime_grid/json/uk/crimes/';
const crime_categories = [
  'violent-crime', 'anti-social-behaviour', 'vehicle-crime', 'other-crime', 'theft-from-the-person',
  'shoplifting', 'robbery', 'public-order', 'possession-of-weapons', 'other-theft', 'drugs',
  'criminal-damage-arson', 'burglary', 'bicycle-theft'
];
const crime_dates = ['2015-05','2015-06', '2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04'];

class CrimeApi {
  static getAllCrimes() {
    return new Promise((resolve, reject) => {
      try {
        resolve(Object.assign([], test));
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
