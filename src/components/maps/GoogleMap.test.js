import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import GMap from './GoogleMap';

function setup(){
  const points = [
    {location: ['-8.11', '54.48'], weight:2},
    {location: ['-9.11', '53.27'], weight:1},
    {location: ['-8.79', '54.98'], weight:5}
  ];
  const hotspots = [
    {location: ['-8.11', '54.48'], weight:2},
    {location: ['-9.11', '53.27'], weight:1},
    {location: ['-8.79', '54.98'], weight:5}
  ];
  const map_styles = {
    height: 300
  };
  return mount(<GMap points={points} hotspots={hotspots} map_styles={map_styles}/>);
}

it('renders GoogleMap component', () => {
  const wrapper = setup();
  expect(wrapper.find('.section__map').children().length).toBe(1);
});
