import * as types from '../actions/actionTypes';

export default function crimeReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_CRIMES_SUCCESS:
      return action.crimes;
    case types.LOAD_CRIMES_INITIAL_SUCCESS:
      return action.crimes;
    default:
      return state;
  }
}
