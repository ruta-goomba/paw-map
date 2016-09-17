import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Info from './Info';

it( 'renders Info component with link', () => {
  const wrapper = shallow(<Info text="some text" link="http://someplace.com"/>);
  expect(wrapper.find('div').children().length).toBe(1);
  expect(wrapper.find('p').text()).toInclude('some text');
  expect(wrapper.find('a').prop('href')).toBe('http://someplace.com');
});

it( 'renders Info component without link', () => {
  const wrapper = shallow(<Info text="some text"/>);
  expect(wrapper.find('div').children().length).toBe(1);
  expect(wrapper.find('p').text()).toEqual('some text.');
});
