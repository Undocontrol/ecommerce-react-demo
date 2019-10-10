import React, { useState } from 'react';
import Button from '../Button'
import './styles.scss';

/**
 * Functional react component for the quantity counter functionality.
 * @function 
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component 
 */

export function Counter(props) {
  const [quantity, setQuantity] = useState(0);

  return (
    <article className="counter" data-test="component-counter">
      <div className="quantity-selector">
        <p>Quantity</p>
        <Button 
          className="decrement"
          data-test="decrement" 
          aria-label="Decrease quantity"
          onClick={() => setQuantity(quantity > 0 ? quantity - 1 : null)}>-
          </Button>
        <input data-test="quantity" className="quantity-value" type="text" value={quantity} readOnly/>
        <Button 
          className="increment" 
          data-test="increment"
          aria-label="Increase quantity"
          onClick={() => setQuantity(quantity + 1)}>+
          </Button>  
      </div>
    </article>
  );
}