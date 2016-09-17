import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import LoadingDots from './LoadingDots';

it('renders LoadingDots component', () => {
  const wrapper = mount(<LoadingDots interval={500} dots={10}/>);
  expect(wrapper.find('div').children().length).toBe(1);
  expect(wrapper.find('div').children().at(0).text()).toEqual('Loading.');
  wrapper.setState({ frame: 2 });
  expect(wrapper.find('div').children().at(0).text()).toEqual('Loading..');
  wrapper.setState({ frame: 12 });
  expect(wrapper.find('div').children().at(0).text()).toEqual('Loading.');
});
