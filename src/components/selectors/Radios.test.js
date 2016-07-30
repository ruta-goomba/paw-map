import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import Radios from './Radios';

function setup() {
  const category_array=['comp-first', 'comp-second'];
  return shallow(<Radios categories={category_array}/>);
}

it( 'renders Radios component', () => {
  const wrapper = setup();
  expect(wrapper.find('form').children().length).toBe(2);
  expect(wrapper.find('form').children().at(1).text()).toEqual('comp second');
});
