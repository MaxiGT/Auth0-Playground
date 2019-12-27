import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import { spy } from 'sinon';

const props = {
  disabled: false,
  onClick: spy(),
  label: 'Random Label',
  name: 'Random Name',
};

const newProps = {
  disabled: true,
  onClick: spy(),
  label: 'New Random Label',
  name: 'New Random Name',
};

describe('Button', () => {

  it('Renders correctly with the correct props', () => {
    const button = shallow(<Button {...props} />);
    const properties = button.props();
    expect(properties.disabled).toEqual(props.disabled);
    expect(properties.name).toEqual(props.name);
    expect(properties.children).toEqual(props.label);
    expect(properties.onClick).toEqual(props.onClick);
  });

  it('Reacts to props change', () => {
    const button = shallow(<Button {...props} />);
    const properties = button.props();
    
    expect(properties.disabled).toEqual(props.disabled);
    expect(properties.name).toEqual(props.name);
    expect(properties.children).toEqual(props.label);
    expect(properties.onClick).toEqual(props.onClick);
    
    button.setProps(newProps);
    
    const newProperties = button.props();
    expect(newProperties.disabled).toEqual(newProps.disabled);
    expect(newProperties.name).toEqual(newProps.name);
    expect(newProperties.children).toEqual(newProps.label);
    expect(newProperties.onClick).toEqual(newProps.onClick);
  });

  it('Reacts to click', () => {
    const button = shallow(<Button {...props} />);
    button.simulate('click');
    expect(props.onClick.called).toEqual(true);
  });

})