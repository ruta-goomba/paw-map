import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Intro from './Intro';

function setup() {
  return shallow(<Intro/>);
}

it( 'renders intro component', () => {
  const wrapper = setup();
  expect(wrapper.find('div').length).toBe(1);
  expect(wrapper.find('p').text()).toInclude('The data for visualisations is obtained from the UK police API.');
  expect(wrapper.find('a').text()).toInclude('here');
});
