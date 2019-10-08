import React from 'react';
import ReactDOM from 'react-dom';
import CardDetails from './CardDetails';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardDetails />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

 