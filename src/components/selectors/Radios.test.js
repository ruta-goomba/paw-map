import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import Radios from './Radios';

it( 'renders Radios component', () => {
  // Setup
  const category_array=['comp-first', 'comp-second'];
  let selected = 'comp-first';
  const onRadioChange = sinon.spy();
  const wrapper = shallow(<Radios categories={category_array} selected={selected} onRadioChange={onRadioChange}/>);
  // Tests
  expect(wrapper.find('form').children().length).toBe(2);
  expect(wrapper.find('form').children().at(1).text()).toEqual('comp second');
  expect(wrapper.find('.section__form--radio').at(1).children().at(0).simulate('change'));
  expect(onRadioChange.calledOnce).toEqual(true);
});
