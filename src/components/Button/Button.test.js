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

    test('clicking button increments quantity display', () => {
        const counter = 7;
        const wrapper = setup(null, { counter });

        // find button and click
        const button = findByTestAttr(wrapper, 'increment-button');
        button.simulate('click');

        // find display and test value
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(counter + 1)
});



  

  