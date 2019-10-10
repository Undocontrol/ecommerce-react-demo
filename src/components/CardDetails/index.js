import React, { useState, useEffect } from 'react';
import '../CardDetails/styles.scss';
import axios from 'axios';
import Button from '../Button';
import { Counter } from '../Counter';

/**
 * Functional react component for displaying the details of a selected card.
 * @function 
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component 
 */
export function CardDetails(props) {
  const { params } = props.match;
  const [product, updateProduct] = useState({ });
  const API = `https://www.moonpig.com/uk/api/product/product/?mpn=${params.id}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(API);
      updateProduct(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="card-details" data-test="componenet-card-details">
      <div className="card-image column">
        <h1>{product.Title}</h1>
        <img src={product.ThumbnailUrl} /> 
      </div>
      <div className="card-content column">
        <p>{product.Description}</p>
        <Button text={"Buy Me"} />
        <Counter />
      </div>
    </div>
  );
}

