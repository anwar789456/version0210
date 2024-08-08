import React from 'react';
import ProductCard from './ProductCard';
import styles from './style.module.scss';
import Link from 'next/link';

export default function Products({ products }) {
  return (
    <div className={styles.Productsflex}>
      {products.map((product, index) => (
        <Link key={index} href={`/ProductPage/${product.id}`}>
          <ProductCard
            key={index}
            image1={product.image1}
            image2={product.image2}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
          />
        </Link>
      ))}
    </div>
  );
}
