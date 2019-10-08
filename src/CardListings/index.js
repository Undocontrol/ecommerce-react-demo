import React from 'react';
import '../CardListings/styles.scss';
import { CardDetails } from '../CardDetails'

/**
 * Functional react component for displaying list of cards.
 * @function 
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component 
 */

export function CardListings() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <CardDetails />
    </div>
  );
}

