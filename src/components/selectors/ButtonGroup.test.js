import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import ButtonGroup from './ButtonGroup';


it( 'renders ButtonGroup component with single button selection', () => {
  // Setup
  const dates=['2015-01', '2015-02'];
  let selected = '2015-01';
  const onButtonClick = sinon.spy();
  const wrapper = shallow(<ButtonGroup values={dates} selected={selected} onButtonClick={onButtonClick}/>);
  // Tests
  expect(wrapper.find('.btn-primary').length).toBe(1);
  expect(wrapper.find('.btn-default').length).toBe(1);
  expect(wrapper.find('button').last().prop('className')).toBe('btn-default');
  expect(onButtonClick.calledOnce).toEqual(false);
  expect(wrapper.find('.btn-default').at(0).simulate('click'));
  expect(onButtonClick.calledOnce).toEqual(true);
});

it( 'renders ButtonGroup component with multiple button selection', () => {
  // Setup
  const dates=['2015-01', '2015-02', '2015-03', '2015-04'];
  const selectedGroup = ['2015-01', '2015-02'];
  const onButtonClick = sinon.spy();
  const wrapper = shallow(<ButtonGroup values={dates} selectedGroup={selectedGroup} onButtonClick={onButtonClick}/>);
  // Tests
  expect(wrapper.find('.btn-primary').length).toBe(2);
  expect(wrapper.find('.btn-default').length).toBe(2);
  expect(wrapper.find('button').last().prop('className')).toBe('btn-default');
  expect(onButtonClick.calledOnce).toEqual(false);
  expect(wrapper.find('.btn-default').at(0).simulate('click'));
  expect(onButtonClick.calledOnce).toEqual(true);
});
