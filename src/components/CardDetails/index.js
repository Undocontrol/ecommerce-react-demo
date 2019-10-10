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
  const [product, updateProduct] = useState({
    Title: '',
    ThumbnailUrl: '',
    Description: '',
    Size: {}
  });
  const API = `https://www.moonpig.com/uk/api/product/product/?mpn=${params.id}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(API);
      updateProduct(result.data);
    };
    fetchData();
  }, []);

  return (
    <section className="card-details" data-test="componenet-card-details">
      <article className="card-image column">
        <h1>{product.Title}</h1>
        <img 
          src={product.ThumbnailUrl}
          alt={product.Title}
          aria-label={product.Title}
        /> 
      </article>
      <article className="card-content column">
        {
          /* 
            Description contains HTML elements eg/ <br> tags, I could use React "dangerouslysetinnerhtml"
            However this comes with security issues, eg/ cross site scripting.
          */
        }
        <p>{product.Description}</p>
        <p>{product.Size.Currency + product.Size.Price}</p>
        <Counter />
        <Button>Buy Me</Button>
      </article>
    </section>
  );
}

