'use client'
import {React, useEffect,useState} from 'react'
import styles from './style.module.scss'
import Products from '../Products/Products'
import { fetchProducts } from '../../../api/fetchProducts';

export default function Background() {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedData = await fetchProducts();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    getProducts();
  }, []);

  
  return (
    <div className={styles.container}>
        <div className={styles.background_container}>
          <Products products={Data} />
        </div>
    </div>
  );
}