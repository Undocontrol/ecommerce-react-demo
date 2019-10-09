import React from 'react';
import { CardListings } from '.';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../test/testUtils';
//import { Link } from 'react-router';
import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('The Card Listings Grid', () => {
  test('CardListings renders without error', async () => {
    let wrapper

    await act(async () => {
      wrapper = mount(<CardListings />);
    });
    const cardListingsComponent = findByTestAttr(wrapper, 'component-card-listings');
    expect(cardListingsComponent.length).toBe(1);
  });

  test('Call to axios and returns images', async () => {
    let wrapper

    await act(async () => {
      wrapper = mount(<CardListings />);
    });

    expect(wrapper.html()).toContain('http://test.com/image.png');
  });

  /*
  test('redirect to the product page when an image is clicked', () => {
    const wrapper = setup();
    //console.log(wrapper.find(Link))
    expect(wrapper.find(Link).props().to).toBe('/product?mpn=1234');
  });*/

});