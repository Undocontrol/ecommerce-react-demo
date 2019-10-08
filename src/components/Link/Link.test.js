import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Link from '../Link';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });
jest.mock('react-dom');

const setup = (props={}) => {
    return shallow(<Link title="mockTitle" url="mockUrl" />)
};

describe('Link', () => {
    test('Link renders without error', () =>{
    const wrapper = setup();
    const linkcomponent = findByTestAttr(wrapper,'component-link');
    expect(linkcomponent.length).toBe(1);
    });
});