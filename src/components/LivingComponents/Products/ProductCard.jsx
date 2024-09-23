import { React, useState } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';

const ProductCard = ({ image, title, description, priceMin, priceMax, imageObject, products }) => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const handleMouseEnter = (point) => {
    const foundProduct = products.find((product) => product.idProd === point.produitID);
    setHoveredPoint({
      product: foundProduct,
      posX: point.posX,
      posY: point.posY,
    });
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };

  const renderHyperPoints = (hyperPoints) => {
    return hyperPoints.map((point, index) => (
      <Link href={`/ProductPage/${point.produitID}`} key={index}>
        <div
          className={styles.hyperPoint}
          style={{
            top: `${point.posY}%`,
            left: `${point.posX}%`,
          }}
          onMouseEnter={() => handleMouseEnter(point)}
          onMouseLeave={handleMouseLeave}
        />
      </Link>
    ));
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        {imageObject && imageObject.length > 0 && imageObject[0].hyperPoints && imageObject[0].hyperPoints.length > 0 ? (
          <>
            <Image
              src={image}
              alt="Product Image"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
            {renderHyperPoints(imageObject[0].hyperPoints)}
          </>
        ) : (
          <Image
            src={image}
            alt="Product Image"
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        )}

        {/* Tooltip to display product info on hover */}
        {hoveredPoint && hoveredPoint.product && (
          <div
            className={styles.tooltip}
            style={{
              top: `${parseInt(hoveredPoint.posY) + 10}%`,
              left: `${parseInt(hoveredPoint.posX)}%`,
            }}
          >
            <div className={styles.tooltipImage}>
              <Image
                src={hoveredPoint.product.images[0].img}
                alt={hoveredPoint.product.nom}
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
            <div className={styles.tooltipContent}>
              <p className={styles.productName}>{hoveredPoint.product.nom}</p>
              <p className={styles.productPrice}>${hoveredPoint.product.minPrice}</p>
            </div>
          </div>
        )}
      </div>

      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.PriceRange}>
          {priceMin === priceMax ? (
            <p className={styles.price}>${priceMin}</p>
          ) : (
            <>
              <p className={styles.price}>${priceMin} -</p>
              <p className={styles.price}>${priceMax}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
