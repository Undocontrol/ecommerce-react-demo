import React from 'react';
import ReactDOM from 'react-dom';
import { CardDetails } from '../CardDetails';
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../test/testUtils.js';
import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => {
  return shallow(<CardDetails match={ {params: {id: 1234}} } />)
};

describe('The Card Product Page', () => {

  test('renders without crashing', async () => {
    const wrapper = setup()
    const cardlistComponent = findByTestAttr(wrapper,'component-card-details');
    expect(cardlistComponent.length).toBe(1);
  });

  test('renders the image of the product', async () =>{
    let wrapper

    await act(async () => {
      wrapper = mount(<CardDetails match={ { params: {id: 1234}} } />);
    });

    expect(wrapper.html()).toContain('http://test.com/image.png');
  });

  test('renders the description of the product', async () =>{
    let wrapper

    await act(async () => {
      wrapper = mount(<CardDetails match={ { params: {id: 1234}} } />);
    });

    expect(wrapper.html()).toContain('Lorem Lipsum');
  });

})