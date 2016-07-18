import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import SectionContent from './SectionContent';

function setup() {
  return shallow(<SectionContent
    content="some content"
  />);
}

it( 'renders SectionContent component', () => {
  const wrapper = setup();
  expect(wrapper.find('div').children().length).toBe(1);
  expect(wrapper.find('div').text()).toEqual('some content');
});
