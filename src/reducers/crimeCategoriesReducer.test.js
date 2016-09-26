import expect from 'expect';
import crimeCategoriesReducer from './crimeCategoriesReducer';
import * as actions from '../actions/crimeActions';

describe('Crime Categories Reducer', () => {
  it('should load crime categories when passed LOAD_CRIME_CATEGORIES_SUCCESS', () => {
    //setup
    const initialState = [];
    const newCrimeCategories = ['pie theft', 'ice cream theft', 'happiness theft'];
    const action = actions.loadCrimeCategoriesSuccess(newCrimeCategories);

    //act
    const newState = crimeCategoriesReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0]).toEqual('pie theft');
  });
});
