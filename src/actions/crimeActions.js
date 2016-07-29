import * as types from './actionTypes';
import crimeApi from '../api/crimeApi';

export function loadCrimes(category){
  return function (dispatch) {
    return crimeApi.getCrimes(category).then(crimes => {
      dispatch(loadCrimesSuccess(crimes));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadCrimeHotSpots(category){
  return function (dispatch) {
    return crimeApi.getCrimeHotSpots(category).then(spots => {
      dispatch(loadCrimeHotSpotsSuccess(spots));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadCrimesInitial(){
  return function (dispatch) {
    return crimeApi.getCrimesInitial().then(crimes => {
      dispatch(loadCrimesInitialSuccess(crimes));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadCrimeHotSpotsInitial(){
  return function (dispatch) {
    return crimeApi.getCrimeHotSpotsInitial().then(crimes => {
      dispatch(loadCrimeHotSpotsInitialSuccess(crimes));
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

export function loadCrimeDates(){
  return function (dispatch) {
    return crimeApi.getAllCrimeDates().then(crime_dates => {
      dispatch(loadCrimeDatesSuccess(crime_dates));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadCrimesSuccess(crimes) {
  return { type: types.LOAD_CRIMES_SUCCESS, crimes};
}

export function loadCrimesInitialSuccess(crimes) {
  return { type: types.LOAD_CRIMES_INITIAL_SUCCESS, crimes};
}

export function loadCrimeCategoriesSuccess(crime_categories) {
  return { type: types.LOAD_CRIME_CATEGORIES_SUCCESS, crime_categories};
}

export function loadCrimeDatesSuccess(crime_dates) {
  return { type: types.LOAD_CRIME_DATES_SUCCESS, crime_dates};
}

export function loadCrimeHotSpotsSuccess(spots) {
  return { type: types.LOAD_HOT_SPOTS_SUCCESS, spots};
}

export function loadCrimeHotSpotsInitialSuccess(spots) {
  return { type: types.LOAD_HOT_SPOTS_INITIAL_SUCCESS, spots};
}
