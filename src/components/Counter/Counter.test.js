import React from 'react';
import Counter from '../Counter';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../test/testUtils.js';

Enzyme.configure({ adapter: new EnzymeAdapter() });

    const setup = (props={}) => {
    return shallow(<Counter {...props}/>)
    };

    test('Counter renders without error', () =>{
        const wrapper = setup();
        const counterComponent = findByTestAttr(wrapper,'component-counter');
        expect(counterComponent.length).toBe(1);
    });

    test('renders quantity display', () => {
        const wrapper = setup();
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.length).toBe(1);
    });
    test('quantity starts at 0', () => {
        const wrapper = setup();
        const initialCounterState = wrapper.state('counter');
        expect(initialCounterState).toBe(0)
    });

    test('quantity never goes below 0', () => {
        const wrapper = setup();
        const initialCounterState = wrapper.state('counter');
        expect(initialCounterState).not.toBe(-1)
    });



  

  