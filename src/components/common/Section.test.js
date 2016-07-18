import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Section from './Section';

function setup() {
  return shallow(<Section
    header_content="some content"
    inner_content_left=""
    inner_content_right=""
  />);
}

it( 'renders Section component', () => {
  const wrapper = setup();
  expect(wrapper.find('div').children().length).toBe(3);
});
