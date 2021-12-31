import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import styles from './index.module.scss';

function ProductList() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(result => {
      setInfo(result.data);
    });
  }, []);
  return (
    <>
      <h1>Products</h1>
      <div className={styles.grid}>
        {info ? (
          info.map(item => (
            <ProductCard
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))
        ) : (
          <p>Cargando Productos</p>
        )}
      </div>
    </>
  );
}

export default ProductList;
