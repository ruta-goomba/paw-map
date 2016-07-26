import test from './test.json'; // eslint-disable-line

const core_path = '/home/goomba/Documents/paw-map/helpers/create_crime_grid/json/uk/crimes/';
const crime_categories = [
  'violent-crime', 'anti-social-behaviour', 'vehicle-crime', 'other-crime', 'theft-from-the-person',
  'shoplifting', 'robbery', 'public-order', 'possession-of-weapons', 'other-theft', 'drugs',
  'criminal-damage-arson', 'burglary', 'bicycle-theft'
];

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
}

export default CrimeApi;
