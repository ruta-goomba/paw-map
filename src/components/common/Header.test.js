import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Header from './Header';

function setup() {
  return shallow(<Header/>);
}

it( 'renders header component', () => {
  const wrapper = setup();
  expect(wrapper.find('nav').length).toBe(1);
  expect(wrapper.find('p').text()).toEqual('Visualise locational information');
});
