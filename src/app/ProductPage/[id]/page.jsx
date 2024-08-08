"use client"; // Add this directive at the top

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import styles from './ProductPage.module.scss';

const Data = [
  {
    id: '1',
    title: 'Leonardo',
    images: ['/images/Zoé-15.png', '/images/Zoé-16.png'],
    description: 'Product description 2 goes here.',
    price: '3200',
    category: 'living,handmade',
  },
  {
    id: '2',
    title: 'Laurus',
    images: ['/images/Zoé-01.png', '/images/Zoé-02.png'],
    description: 'Product description 1 goes here.',
    price: '3000',
    category: 'living,handmade',
  },
  {
    id: '3',
    title: 'Fior',
    images: ['/images/Zoé-03.png', '/images/Zoé-4.png'],
    description: 'Product description 2 goes here.',
    price: '1500',
    category: 'living,handmade',
  },
];

const ProductPage = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    if (id) {
      const productData = Data.find(item => item.id === id);
      setProduct(productData);
      setMainImage(productData?.images[0]);
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.productPage}>
      <div className={styles.imageGallery}>
        {product.images.map((img, index) => (
          <div key={index} className={styles.thumbnail} onClick={() => setMainImage(img)}>
            <Image
              src={img}
              alt={`${product.title} image ${index + 1}`}
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        ))}
      </div>
      <div className={styles.mainImage}>
        <Image
          src={mainImage}
          alt={product.title}
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
      <div className={styles.imageCarousel}>
        <Carousel showThumbs={false} dynamicHeight={true}>
          {product.images.map((img, index) => (
            <div key={index}>
              <Image
                src={img}
                alt={`${product.title} image ${index + 1}`}
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className={styles.productDetails}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button>Add to Cart</button>
      </div>

      
    </div>
  );
};

export default ProductPage;
