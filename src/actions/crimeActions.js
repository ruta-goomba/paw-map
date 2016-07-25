import * as types from './actionTypes';
import crimeApi from '../api/crimeApi';

export function loadCrimes(){
  return function (dispatch) {
    return crimeApi.getAllCrimes().then(crimes => {
      dispatch(loadCrimesSuccess(crimes));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadCrimeCategories(){
  return function (dispatch) {
    return crimeApi.getAllCrimeCategories().then(crime_categories => {
      dispatch(loadCrimeCategoriesSuccess(crime_categories));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadCrimesSuccess(crimes) {
  return { type: types.LOAD_CRIMES_SUCCESS, crimes};
}

export function loadCrimeCategoriesSuccess(crime_categories) {
  return { type: types.LOAD_CRIME_CATEGORIES_SUCCESS, crime_categories};
}
