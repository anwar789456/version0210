import React, { useState } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

const ProductCard = ({ image1, image2, title, description, price, category }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className={styles.productCard}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)} >
      
      <div className={styles.imageWrapper}>
        <Image
          src={image1}
          alt="Product Image 1"
          layout="fill"
          objectFit="cover"
          className={`${styles.image} ${hovered ? styles.hide : ''}`} />

        <Image
          src={image2}
          alt="Product Image 2"
          layout="fill"
          objectFit="cover"
          className={`${styles.image} ${hovered ? styles.show : styles.hide}`}/>
          
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        {//<p className={styles.price}>{category}</p>
        }
      </div>
    </div>
  );
};
export default ProductCard;