import React from 'react';
import './styles.scss';

/**
 * Functional react component for button functionality.
 * @function 
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component 
 */

 const Button = ({ text, onClick, type, disabled }) => (
  <button
    data-test="component-button"
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
