import React from 'react';
import '../CardDetails/styles.scss';
import { Button } from '../Button';
import { Counter } from '../Counter';

/**
 * Functional react component for displaying the details of a selected card.
 * @function 
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component 
 */

export function CardDetails(props) {
  return (
    <div className="card-details" data-test="componenet-card-details">
      <Button 
        onclick={ () => {
          alert('hello world')
        }}
        title='Add to cart'
      />
      <Counter />
    </div>
  );
}

