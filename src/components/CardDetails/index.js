import React from 'react';
import ReactDOM from 'react-dom';
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
      <h1>Hello</h1>
    </div>
  );
}

