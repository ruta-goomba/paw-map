import expect from 'expect';
import crimeReducer from './crimeReducer';
import * as actions from '../actions/crimeActions';

function setup(){
  return [
    {location: ['-8.11', '54.48'], weight:2},
    {location: ['-9.11', '53.27'], weight:1},
    {location: ['-8.79', '54.98'], weight:5}
  ];
}

describe('Crime Reducer', () => {
  it('should load crimes for crime category selected by default when passed LOAD_CRIMES_INITIAL_SUCCESS', () => {
    //setup
    const initialState = [];
    const newCrimes = setup();
    const action = actions.loadCrimesInitialSuccess(newCrimes);

    //act
    const newState = crimeReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].weight).toEqual(2);
  });
  it('should load crimes for the selected crime category when passed LOAD_CRIMES_SUCCESS', () => {
    //setup
    const initialState = [];
    const newCrimes = setup();
    const action = actions.loadCrimesSuccess(newCrimes);

    //act
    const newState = crimeReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].weight).toEqual(2);
  });
});
