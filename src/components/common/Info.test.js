import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Info from './Info';

function setup() {
  return shallow(<Info text="some text" link="http://someplace.com"/>);
}

it( 'renders Info component', () => {
  const wrapper = setup();
  expect(wrapper.find('div').children().length).toBe(1);
  expect(wrapper.find('p').text()).toInclude('some text');
  expect(wrapper.find('a').prop('href')).toBe('http://someplace.com');
});
