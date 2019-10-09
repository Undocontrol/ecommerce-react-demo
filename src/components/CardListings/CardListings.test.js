import React from 'react';
import { CardListings } from '.';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../test/testUtils';
import { Link } from 'react-router';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
    return shallow(<CardListings {...props}/>)
};

describe('The Card Listings Grid', () => {
  test('CardListings renders without error', () =>{
    const wrapper = setup();
    const cardListingsComponent = findByTestAttr(wrapper,'component-card-listings');
    expect(cardListingsComponent.length).toBe(1);
    });

   test('Call to axios and returns images',() => {
    const wrapper = setup();
    const image = findByTestAttr(wrapper, 'product-image-0');
    expect(image.src).toBe('http://test.com/image.png');
   });

   test('redirect to the product page when an image is clicked',() => {
    const wrapper = setup();
    //console.log(wrapper.find(Link))
    expect(wrapper.find(Link).props().to).toBe('/product?mpn=1234');
   });

});