import {combineReducers} from 'redux';
import crimes from './crimeReducer';
import crime_categories from './crimeCategoriesReducer';
import crime_dates from './crimeDatesReducer';
import crime_totals from './crimeTotalsReducer';
import spots from './crimeHotSpotsReducer';

const rootReducer = combineReducers({
  crimes,
  crime_categories,
  crime_dates,
  spots,
  crime_totals
});

export default rootReducer;
