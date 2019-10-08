import React from 'react';
import './App.scss';
import { CardListings } from '../CardListings'

/**
 * Functional react component for App component as wrapper
 * @function 
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component 
 */

function App() {
  return (
    <main className="App" data-test="component-app">
      <header className="App-header">
      </header>
      <CardListings />
    </main>
  );
}

export default App;