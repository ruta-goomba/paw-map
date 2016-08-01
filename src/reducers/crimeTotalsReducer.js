import * as types from '../actions/actionTypes';

export default function crimeTotalsReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_CRIME_TOTALS_SUCCESS:
      return action.totals;
    case types.LOAD_CRIME_TOTALS_INITIAL_SUCCESS:
      return action.totals;
    default:
      return state;
  }
}
