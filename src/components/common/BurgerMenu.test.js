import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';
import BurgerMenu from './BurgerMenu';

it( 'renders BurgerMenu component', () => {
  // Setup
  const toggleMenu = sinon.spy();
  const wrapper = shallow(<BurgerMenu toggleMenu={toggleMenu}/>);
  // Tests
  expect(wrapper.find('.burger-menu').children().length).toBe(1);
  expect(wrapper.find('.burger-menu').children().at(0).text()).toInclude('Show all categories');
  expect(toggleMenu.calledOnce).toEqual(false);
  expect(wrapper.find('.burger-menu').children().at(0).simulate('click'));
  expect(toggleMenu.calledOnce).toEqual(true);
});
