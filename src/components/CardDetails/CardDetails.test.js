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

  });

  test('renders the description of the product', () =>{
    
  });


 