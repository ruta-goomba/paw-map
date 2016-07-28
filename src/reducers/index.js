import {combineReducers} from 'redux';
import crimes from './crimeReducer';
import crime_categories from './crimeCategoriesReducer';
import crime_dates from './crimeDatesReducer';

const rootReducer = combineReducers({
  crimes,
  crime_categories,
  crime_dates
});

export default rootReducer;
