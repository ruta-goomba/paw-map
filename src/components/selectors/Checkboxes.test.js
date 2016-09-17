import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import Checkboxes from './Checkboxes';

it( 'renders Checkboxes component', () => {
  // Setup
  const category_array=['comp-first', 'comp-second', 'comp-third'];
  let selected = ['comp-first', 'comp-second'];
  const onCheckboxChange = sinon.spy();
  const wrapper = shallow(<Checkboxes categories={category_array} selected={selected} onCheckboxChange={onCheckboxChange}/>);
  // Tests
  expect(wrapper.find('form').children().length).toBe(3);
  expect(wrapper.find('form').children().at(1).text()).toEqual('comp second');
  expect(wrapper.find('.section__form--checkbox').at(0).children().at(0).props().checked).toEqual('checked');
  expect(wrapper.find('.section__form--checkbox').at(1).children().at(0).props().checked).toEqual('checked');
  expect(wrapper.find('.section__form--checkbox').at(2).children().at(0).props().checked).toEqual('');
  expect(onCheckboxChange.calledOnce).toEqual(false);
  expect(wrapper.find('.section__form--checkbox').at(1).children().at(0).simulate('change'));
  expect(onCheckboxChange.calledOnce).toEqual(true);
});
