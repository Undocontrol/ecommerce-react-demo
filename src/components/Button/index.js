import React from 'react';
import './styles.scss';

/**
 * Functional react component for button functionality.
 * @function 
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component 
 */

const Button = (props) => {
  return (
    <button
      className="button"
      data-test="component-button"
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
};

export default Button;
