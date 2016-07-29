import * as types from '../actions/actionTypes';

export default function crimeHotSpotsReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_HOT_SPOTS_SUCCESS:
      return action.spots;
    case types.LOAD_HOT_SPOTS_INITIAL_SUCCESS:
      return action.spots;
    default:
      return state;
  }
}
