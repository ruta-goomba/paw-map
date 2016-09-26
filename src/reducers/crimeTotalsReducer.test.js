import expect from 'expect';
import crimeTotalsReducer from './crimeTotalsReducer';
import * as actions from '../actions/crimeActions';

describe('Crime Totals Reducer', () => {
  it('should load crime totals when passed LOAD_CRIME_TOTALS_SUCCESS', () => {
    //setup
    const initialState = [];
    const newCrimeTotals = {
      test: [{x:'2015-03', y:46}, {x:'2015-04', y:97}, {x:'2015-05', y:85}],
      test2: [{x:'2015-03', y:46}, {x:'2015-04', y:97}, {x:'2015-05', y:85}],
      test3: [{x:'2015-03', y:46}, {x:'2015-04', y:97}, {x:'2015-05', y:85}],
      test4: [{x:'2015-03', y:46}, {x:'2015-04', y:97}, {x:'2015-05', y:85}]
    };
    const action = actions.loadCrimeTotalsSuccess(newCrimeTotals);

    //act
    const newState = crimeTotalsReducer(initialState, action);

    //assert
    expect(Object.keys(newState).length).toEqual(4);
    expect(newState.test[0].y).toEqual(46);
  });
});
