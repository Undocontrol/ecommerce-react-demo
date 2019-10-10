import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.scss';
import { Link } from 'react-router-dom';

/**
 * Functional react component for displaying list of cards.
 * @function 
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component 
 */

export function CardListings() {
  const [data, setData] = useState({ Products: [] });
  const API = 'https://search.moonpig.com/api/products?size=20&fq=card_shop_id:1';

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(API);
      setData(result.data.Products);
    };
    fetchData();
  }, []);

  return (
    <section className="card-listings" data-test="component-card-listings">
      <article className="card">
        {data &&
          data.length > 0 &&
          data.map((product, index) =>
            <li className="card-image" key={index}>
              <Link to={`/product/${product.MoonpigProductNo}/${product.Title.replace(/ /g,"-")}`}
                aria-label="Link to selected product"
                alt="Link to selected product">
                <img
                  alt={product.Title}
                  aria-label={product.Title}
                  src={product.ProductImage.Link.Href}
                  data-test={`product-image-${index}`}
                />
              </Link>
            </li>
          )}
      </article>
    </section>
  );
}