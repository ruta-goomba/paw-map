import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Section from './Section';
import Intro from './Intro';

function setup() {
  return shallow(<Section
    header_content="some content"
  ><Intro/></Section>);
}

it( 'renders Section component', () => {
  const wrapper = setup();
  expect(wrapper.find('div').children().length).toBe(2);
});
