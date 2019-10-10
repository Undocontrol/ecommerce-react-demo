import React from 'react';
import ReactDOM from 'react-dom';
import CardDetails from '../CardDetails';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../test/testUtils.js';
import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('The Card Product Page', () => {

  test('renders without crashing', async () => {
    let wrapper

    await act(async () => {
      wrapper = mount(<CardDetails match={{id: 1234}} />);
    });

    const cardlistComponent = findByTestAttr(wrapper,'component-card-details');
    expect(cardlistComponent.length).toBe(1);
    });

  test('renders the image of the product', async () =>{
    let wrapper

    await act(async () => {
      wrapper = mount(<CardDetails match={{id: 1234}} />);
    });

    const image = findByTestAttr(wrapper, 'product-image');
    expect(image.src).toBe('http://test.com/image.png');
  });

  test('renders the description of the product', async () =>{
    let wrapper

    await act(async () => {
      wrapper = mount(<CardDetails match={{id: 1234}} />);
    });

    const description = findByTestAttr(wrapper, 'product-description');
    expect(description.text).toBe('Lorem Lipsum');
  });

})