import * as types from '../actions/actionTypes';

export default function crimeDatesReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_CRIME_DATES_SUCCESS:
      return action.crime_dates;
    default:
      return state;
  }
}
