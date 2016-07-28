import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import SectionHeader from './SectionHeader';

function setup() {
  return shallow(<SectionHeader
    content="some content"
  />);
}

it( 'renders SectionHeader component', () => {
  const wrapper = setup();
  expect(wrapper.find('div').children().length).toBe(1);
  expect(wrapper.find('h3').text()).toEqual('some content');
});
