import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Title from './Title';

function setup(){
  return shallow(<Title
    title="some-content"
  />);
}

it( 'renders Title component', () => {
  const wrapper = setup();
  expect(wrapper.find('h2').text()).toEqual('some content');
});
