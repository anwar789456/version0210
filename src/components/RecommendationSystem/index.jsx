import React, { useEffect, useState } from 'react';
import ProductCard from '../LivingComponents/Products/ProductCard';
import styles from './style.module.scss'
import Link from 'next/link';

import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const RecommendedProducts = ({ productCategorie, allProducts }) => {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    // i will find the products with the categorie and limit to 4 products
    const filteredProducts = allProducts.filter(product => product.categorie === productCategorie).slice(0, 4);
    setRecommendedProducts(filteredProducts);
  }, [productCategorie, allProducts]);

  return (
    <div className={styles.recommendedProductsContainer}>
      <div className={styles.titleDiv}>
        <h2 className={styles.title}>Recommended Products</h2>
      </div>
      <Swiper
        className={styles.swiperContainer}
        slidesPerView={4}
        spaceBetween={50}
        centeredSlides={false}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}>
        {recommendedProducts.map(product => (
          <SwiperSlide key={product.idProd} className={styles.swiperSlide}>
            <div className={styles.productCard}>
              <Link href={`/ProductPage/${product.idProd}`} className={styles.linkContainer}>
                <ProductCard
                  image={product.images[0]?.img}
                  title={product.nom}
                  description={product.description}
                  imageObject = {[]}
                  priceMin={product.minPrice}
                  priceMax={product.maxPrice}
                  categorie={product.categorie}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedProducts;
