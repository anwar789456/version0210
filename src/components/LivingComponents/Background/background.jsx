'use client'
import {React, useEffect,useState} from 'react'
import styles from './style.module.scss'
import Products from '../Products/Products'
//import { fetchProducts } from '../../../api/fetchProducts';

const Data = [
  {
    id: '1',
    title: 'Leonardo',//Leonardo - $200
    image1: '/images/Zoé-15.png',
    image2: '/images/Zoé-16.png',
    description: 'Product description 2 goes here.',
    price: '3200',
    category: 'living,handmade',
  },
  {
    id: '2',
    title: 'Laurus',//Laurus - $100
    image1: '/images/Zoé-01.png',
    image2: '/images/Zoé-02.png',
    description: 'Product description 1 goes here.',
    price: '3000',
    category: 'living,handmade',

  },
  {
    id: '3',
    title: 'Fior', //Fior - $200
    image1: '/images/Zoé-03.png',
    image2: '/images/Zoé-4.png',
    description: 'Product description 2 goes here.',
    price: '1500',
    category: 'living,handmade',
  },
]

export default function Background() {
  /*const [Data, setData] = useState([]);
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
  }, []);*/

  
  return (
    <div className={styles.container}>
        <div className={styles.background_container}>
          <Products products={Data} />
        </div>
    </div>
  );
}