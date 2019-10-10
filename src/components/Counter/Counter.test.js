import React from 'react';
import {Counter} from '../Counter';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../test/testUtils.js';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
    return shallow(<Counter {...props}/>)
};

describe('The quantity Counter', () => {
    test('Counter renders without error', () =>{
        const wrapper = setup();
        const counterComponent = findByTestAttr(wrapper,'component-counter');
        expect(counterComponent.length).toBe(1);
    });

    test('quantity starts at 0', () => {
        const wrapper = setup();
        const quantity = findByTestAttr(wrapper, 'quantity');
        console.log(quantity.text())
        expect(quantity.props().value).toBe(0);
    });

    test('quantity never goes below 0', () => {
        const wrapper = setup();
        const decrementButton = findByTestAttr(wrapper, 'decrement')
        const quantity = findByTestAttr(wrapper, 'quantity');
        expect(quantity.props().value).toBe(0)
        decrementButton.simulate('click');
        expect(quantity.props().value).not.toBe(-1)
    });
})