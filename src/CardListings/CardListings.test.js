import React from 'react';
import ReactDOM from 'react-dom';
import CardListings from './CardListings';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardListings />, div);
  ReactDOM.unmountComponentAtNode(div);
});
