import React from 'react';
import Button from '../Button';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../test/testUtils.js';

Enzyme.configure({ adapter: new EnzymeAdapter() });

    const setup = (props={}) => {
    return shallow(<Button {...props}/>)
    };

    test('Button renders without error', () =>{
        const wrapper = setup();
        const buttonComponent = findByTestAttr(wrapper,'component-button');
        expect(buttonComponent.length).toBe(1);
    });

    test('renders increment button', () => {
        const wrapper = setup();
        const button = findByTestAttr(wrapper, 'increment-button');
        expect(button.length).toBe(1);
    });
    test('renders counter display', () => {
        const wrapper = setup();
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.length).toBe(1);
    });
    test('counter starts at 0', () => {
        const wrapper = setup();
        const initialCounterState = wrapper.state('counter');
        expect(initialCounterState).toBe(0)
    });
    test('clicking button increments counter display', () => {
        const counter = 7;
        const wrapper = setup(null, { counter });

        // find button and click
        const button = findByTestAttr(wrapper, 'increment-button');
        button.simulate('click');

        // find display and test value
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(counter + 1)
});



  

  