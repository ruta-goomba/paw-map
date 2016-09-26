import expect from 'expect';
import crimeHotSpotReducer from './crimeHotSpotsReducer';
import * as actions from '../actions/crimeActions';

function setup(){
  return [
    {location: ['-8.11', '54.48'], weight:2},
    {location: ['-9.11', '53.27'], weight:1},
    {location: ['-8.79', '54.98'], weight:5}
  ];
}

describe('Crime Hot Spot Reducer', () => {
  it('should load crime hot spots for crime category selected by default when passed LOAD_HOT_SPOTS_INITIAL_SUCCESS', () => {
    //setup
    const initialState = [];
    const newCrimeHotSpots = setup();
    const action = actions.loadCrimeHotSpotsInitialSuccess(newCrimeHotSpots);

    //act
    const newState = crimeHotSpotReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].weight).toEqual(2);
  });
  it('should load crime hot spots for the selected crime category when passed LOAD_HOT_SPOTS_SUCCESS', () => {
    //setup
    const initialState = [];
    const newCrimeHotSpots = setup();
    const action = actions.loadCrimeHotSpotsSuccess(newCrimeHotSpots);

    //act
    const newState = crimeHotSpotReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].weight).toEqual(2);
  });
});
