import {combineReducers} from 'redux';
import crimes from './crimeReducer';
import crime_categories from './crimeCategoriesReducer';

const rootReducer = combineReducers({
  crimes,
  crime_categories
});

export default rootReducer;
