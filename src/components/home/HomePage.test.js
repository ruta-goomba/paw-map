import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {HomePage} from './HomePage';

function setup(){
  const props = {
    crimes: [
      {location: ['-8.11', '54.48'], weight:2},
      {location: ['-9.11', '53.27'], weight:1},
      {location: ['-8.79', '54.98'], weight:5}
    ],
    crime_categories: ['test', 'test2', 'test3', 'test4'],
    crime_totals: {
      test: [{x:'2015-03', y:46}, {x:'2015-04', y:97}, {x:'2015-05', y:85}],
      test2: [{x:'2015-03', y:46}, {x:'2015-04', y:97}, {x:'2015-05', y:85}],
      test3: [{x:'2015-03', y:46}, {x:'2015-04', y:97}, {x:'2015-05', y:85}],
      test4: [{x:'2015-03', y:46}, {x:'2015-04', y:97}, {x:'2015-05', y:85}]
    },
    category: 'test',
    hot_spots: [
      {location: ['-8.11', '54.48'], weight:2},
      {location: ['-9.11', '53.27'], weight:1},
      {location: ['-8.79', '54.98'], weight:5}
    ],
    actions: {
      loadCrimes: () => { return Promise.resolve();},
      loadCrimeHotSpots: () => { return Promise.resolve();},
      loadCrimeTotals: () => { return Promise.resolve(); }
    }
  };
  return mount(<HomePage {...props} />);
}

describe ('HomePage', () => {
  it( 'category (section title) is set to violent-crime in the initial local state - change this', () => {
    const wrapper = setup();
    expect(wrapper.children().at(1).children().at(2).props().title).toBe('violent-crime');
  });
  it( 'category (section title) is set to selected category once a new category selected', () => {
    const wrapper = setup();
    wrapper.children().at(1).children().at(3).children().children().at(1).children().at(0).simulate('change');
    expect(wrapper.children().at(1).children().at(2).props().title).toBe('test2');
  });
});

