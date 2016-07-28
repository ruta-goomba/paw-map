import * as types from '../actions/actionTypes';

export default function crimeCategoriesReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_CRIME_CATEGORIES_SUCCESS:
      return action.crime_categories;
    default:
      return state;
  }
}
