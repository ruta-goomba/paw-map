import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import ButtonGroup from './ButtonGroup';

function setup() {
  const dates=['2015-01', '2015-02'];
  const selected = '2015-01';
  function onButtonClick(){
    //console.log('done');
  }
  return shallow(<ButtonGroup dates={dates} selected={selected} onButtonClick={onButtonClick}/>);
}

// TODO - test button clicks
it( 'renders ButtonGroup component', () => {
  const wrapper = setup();
  expect(wrapper.find('.btn-primary').length).toBe(1);
  expect(wrapper.find('.btn-default').length).toBe(1);
  expect(wrapper.find('button').last().prop('className')).toBe('btn-default');
});
