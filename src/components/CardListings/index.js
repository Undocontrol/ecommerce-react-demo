import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';

/**
 * Functional react component for displaying list of cards.
 * @function 
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component 
 */

export function CardListings() {
  const [data, setData] = useState({ product: [] });
  const API = 'https://search.moonpig.com/api/products?size=20&fq=card_shop_id:1';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(API);
      setData(result.data.Products);
    };
    fetchData();
  }, []);

  return (
    <main className="card-listings" data-test="component-card-listings">
      <article className="card">          
        {data &&
        data.length > 0 &&
        data.map(product => 
        <li>
          <a href='#'><img src= {product.ProductImage.Link.Href}/></a>
        </li>
        )} 
      </article>
    </main>
  );
}