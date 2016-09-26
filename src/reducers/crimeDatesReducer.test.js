import expect from 'expect';
import crimeDatesReducer from './crimeDatesReducer';
import * as actions from '../actions/crimeActions';

describe('Crime Dates Reducer', () => {
  it('should load crime dates when passed LOAD_CRIME_DATES_SUCCESS', () => {
    //setup
    const initialState = [];
    const newCrimeDates = ['2015-03', '2015-04', '2015-05'];
    const action = actions.loadCrimeDatesSuccess(newCrimeDates);

    //act
    const newState = crimeDatesReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0]).toEqual('2015-03');
  });
});
