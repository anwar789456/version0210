import React from 'react';
import ProductCard from './ProductCard';
import styles from './style.module.scss';
import Link from 'next/link';
export default function Products({ products }) {
  const handleProductClick = (idProd) => {
    const recentProducts = JSON.parse(localStorage.getItem('RecentProductsClicked')) || [];
    if (!recentProducts.includes(idProd)) {
      recentProducts.push(idProd);
    }
    localStorage.setItem('RecentProductsClicked', JSON.stringify(recentProducts));
  };
  return (
    <div className={styles.Productsflex}>
      {products.map((product, index) => (
        <Link key={index} href={`/ProductPage/${product.idProd}`}
        onClick={() => handleProductClick(product.idProd)}
        >
            <ProductCard
              key={index}
              image={product.images[0].img}
              imageObject = {product.images}
              title={product.nom}
              description={product.description}
              priceMin={product.minPrice}
              priceMax={product.maxPrice}
              products={products}
            />
        </Link>
      ))}
    </div>
  );
}