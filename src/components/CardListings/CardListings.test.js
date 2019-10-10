import React from 'react';
import { CardListings } from '../CardListings';
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../test/testUtils';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => {
  return shallow(<CardListings />)
};

describe('The Card Listings Grid', () => {
  test('CardListings renders without error', async () => {
    const wrapper = setup()
    const cardListingsComponent = findByTestAttr(wrapper, 'component-card-listings');
    expect(cardListingsComponent.length).toBe(1);
  });

  test('Call to axios and returns images', async () => {
    let wrapper

    await act(async () => {
      wrapper = mount(<Router>><CardListings /></Router>);
    });

    expect(wrapper.html()).toContain('http://test.com/image.png');
  });

  /*
  test('redirect to the product page when an image is clicked', () => {
    let wrapper

    await act(async () => {
      wrapper = mount(<Router><CardListings /></Router>);
    });

    expect(wrapper.find(Link).props().to).toBe('/product?mpn=1234');
  });*/

});