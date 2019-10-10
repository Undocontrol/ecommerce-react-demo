import React from 'react';
import Button from '../Button';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../test/testUtils.js';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
    return shallow(<Button {...props}/>)
};

describe('Reusable button', () => {
        test('Button renders without error', () =>{
            const wrapper = setup();
            const buttonComponent = findByTestAttr(wrapper,'component-button');
            expect(buttonComponent.length).toBe(1);
        });

        test('clicking button executes given function', () => {
            const fn = jest.fn()
            const wrapper = setup({
                onClick: fn
            })
            const button = findByTestAttr(wrapper, 'component-button');
            button.simulate('click');
            expect(fn).toBeCalled()
        });
})