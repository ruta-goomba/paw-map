import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Info from './Info';

function setup() {
  return shallow(<Info/>);
}

it( 'renders Intro component', () => {
  const wrapper = setup();
  expect(wrapper.find('div').children().length).toBe(1);
  expect(wrapper.find('p').text()).toInclude('The data for visualisations is obtained from the UK police API.');
  expect(wrapper.find('a').text()).toInclude('here');
});
