import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const props = {
  question: {
    id: 1,
    answers: 3,
    title: 'Random Title 01',
    description: 'Random Description 01',
  }
};

describe('Card', () => {

  it('Renders correctly with the correct props', () => {

    const card = shallow(<Card {...props} />);
    const link = card.find('Link');

    expect(link.length).toEqual(1);
    expect(link.props().to).toEqual('/question/' + props.question.id);
    expect(card.instance().props.question).toEqual(props.question);
  });

});