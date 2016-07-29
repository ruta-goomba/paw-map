import {combineReducers} from 'redux';
import crimes from './crimeReducer';
import crime_categories from './crimeCategoriesReducer';
import crime_dates from './crimeDatesReducer';
import spots from './crimeHotSpotsReducer';

const rootReducer = combineReducers({
  crimes,
  crime_categories,
  crime_dates,
  spots
});

export default rootReducer;
