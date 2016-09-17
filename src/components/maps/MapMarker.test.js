import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import MapMarker from './MapMarker';

function setup(){
  return shallow(<MapMarker
    lat="10.0"
    lng="11.0"
    text="some content"
  />);
}

it( 'renders MapMarker component', () => {
  const wrapper = setup();
  expect(wrapper.children().at(0).text()).toEqual('some content');
  expect(wrapper.children().length).toEqual(1);
});
