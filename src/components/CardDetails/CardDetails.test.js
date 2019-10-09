import React from 'react';
import ReactDOM from 'react-dom';
import CardDetails from '../CardDetails';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../test/testUtils.js';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
  return shallow(<CardDetails {...props}/>)
};

  test('renders without crashing', () => {
    const wrapper = setup();
    const cardlistComponent = findByTestAttr(wrapper,'component-card-details');
    expect(cardlistComponent.length).toBe(1);
    });

  test('renders the image of the product', () =>{
    const wrapper = setup();
    const image = findByTestAttr(wrapper, 'product-image');
    expect(image.src).toBe('http://test.com/image.png');
  });

  test('renders the description of the product', () =>{
    const wrapper = setup();
    const description = findByTestAttr(wrapper, 'product-description');
    expect(description.text).toBe('Lorem Lipsum');
  });


 