"use client";
import { NextUIProvider } from '@nextui-org/react';
import SelectBox from '@/components/SelectBox';
import Footer from '@/components/NewFooter/Footer';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './ProductPage.module.scss';
import Accordion from '@/components/ProductPageComponents/Accordion';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Use react-icons
import { fetchProducts } from '../../../api/fetchProducts';
import RecentProductsClicked from '@/components/LivingComponents/RecentProductsClicked';
import RecommendedProducts from '@/components/RecommendationSystem';
import Link from 'next/link';

const ProductPage = ({ params }) => {
  const [recommendedProductsCategory, setRecommendedProductsCategory] = useState('');
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [hoveredPoint, setHoveredPoint] = useState(null);

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

  useEffect(() => {
    if (params.id) {
      const productData = data.find(item => item.idProd === params.id);
      if (productData) {
        setProduct(productData);
        setRecommendedProductsCategory(productData.categorie.trim());
        setMainImage(productData.images[0].img);
        setSelectedImageIndex(0);
      }
    }
  }, [params.id, data]);

  const handleImageClick = (img, index) => {
    setMainImage(img);
    setSelectedImageIndex(index);
  };

  const handlePrevImage = () => {
    if (selectedImageIndex > 0) {
      const prevIndex = selectedImageIndex - 1;
      setMainImage(product.images[prevIndex].img);
      setSelectedImageIndex(prevIndex);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex < product.images.length - 1) {
      const nextIndex = selectedImageIndex + 1;
      setMainImage(product.images[nextIndex].img);
      setSelectedImageIndex(nextIndex);
    }
  };

  const handleMouseEnter = (point) => {
    const foundProduct = data.find((item) => item.idProd === point.produitID);
    setHoveredPoint({
      product: foundProduct,
      posX: point.posX,
      posY: point.posY,
    });
  };

  const handleMouseLeave = () => {
    setHoveredPoint(null);
  };


  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  if (!product) return <div>Loading...</div>;

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
    <>
      <Header sticky={true} />
      <div className={styles.productPage}>
        <div className={styles.imageGallery}>
          <button className={styles.arrowButtonUp} onClick={handlePrevImage} disabled={selectedImageIndex === 0}><FaChevronUp /></button>
          <div className={styles.scrollImages} style={{ position: 'relative' }}>
            {product.images.map((img, index) => (
              <div key={index} className={`${styles.thumbnail} ${index === selectedImageIndex ? styles.selected : ''}`} onClick={() => handleImageClick(img.img, index)} style={{ position: 'relative' }}>
                <Image className={styles.image} src={img.img} alt={`${product.nom} image ${index + 1}`} width={100} height={100} layout="responsive"/>
                {product.hyperPoints && renderHyperPoints(product.hyperPoints)}
              </div>
            ))}
          </div>
          <button className={styles.arrowButtonDown} onClick={handleNextImage} disabled={selectedImageIndex === product.images.length - 1}><FaChevronDown /></button>
        </div>

        <motion.div key={mainImage} className={styles.mainImage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className={styles.mainImageWrapper} style={{ position: 'relative' }}>
            <Image src={mainImage} alt={product.nom} width={500} height={500} layout="responsive"/>
            {product.images[selectedImageIndex].hyperPoints && renderHyperPoints(product.images[selectedImageIndex].hyperPoints)}
            
            {hoveredPoint && hoveredPoint.product && (
              <div
                className={styles.tooltipBox}
                style={{
                  top: `${parseInt(hoveredPoint.posY) + 1}%`,
                  left: `${parseInt(hoveredPoint.posX)}%`,
                }}
              >
                <div className={styles.tooltipImage}>
                  <Image
                    src={hoveredPoint.product.images[0].img}
                    alt={hoveredPoint.product.nom}
                    width={50}
                    height={50}
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
        </motion.div>

        <div className={styles.imageCarousel}>
          <Carousel showThumbs={false} dynamicHeight={true}>
            {product.images.map((img, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <Image 
                  src={img.img} 
                  alt={`${product.nom} image ${index + 1}`} 
                  width={500} 
                  height={500} 
                  layout="responsive" 
                />
                {img.hyperPoints && renderHyperPoints(img.hyperPoints)}

                {/* Tooltip for hovering over hyperPoints */}
                {hoveredPoint && hoveredPoint.product && (
                  <div
                    className={styles.tooltipBox}
                    style={{
                      top: `${parseInt(hoveredPoint.posY) + 5}%`,
                      left: `${parseInt(hoveredPoint.posX)}%`,
                    }}
                  >
                    <div className={styles.tooltipImage}>
                      <Image
                        src={hoveredPoint.product.images[0].img}
                        alt={hoveredPoint.product.nom}
                        width={50}
                        height={50}
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
            ))}
          </Carousel>
        </div>


        <div className={styles.productDetails}>
          <div className={styles.Productinfos}>
            <div className={styles.titleDiv}>
              <h1 className={styles.titleInfo}>{product.nom}</h1>
            </div>
            <div className={styles.priceDiv}>
              {product.minPrice === product.maxPrice ? (
                <p className={styles.priceInfo}>${product.minPrice}</p>
              ) : (
                <p className={styles.priceInfo}>${product.minPrice} - ${product.maxPrice}</p>
              )}
            </div>
          </div>
          <div className={styles.Description}>
            <p className={styles.DescriptionP}>{product.description}</p>
          </div>
          <NextUIProvider>
              <SelectBox />
          </NextUIProvider>
          <div className={styles.FullquantityDiv}>
            <div className={styles.quantityController}>
              <div className={styles.minusDiv} onClick={decreaseQuantity}>
                <button className={styles.quantityBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.minusIcon}>
                    <path d="M5 12h14" />
                  </svg>
                </button>
              </div>
              <div className={styles.quantityDiv}>
                <span className={styles.quantityDisplay}>{quantity}</span>
              </div>
              <div className={styles.plusDiv} onClick={increaseQuantity}>
                <button className={styles.quantityBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.plusIcon}>
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.addToCart}>
            <button className={styles.addToCartBTN}>Add to Cart</button>
          </div>
          
          
          <div className={styles.AccordionDiv}><Accordion /></div>
        </div>
      </div>
      <RecentProductsClicked />
      <RecommendedProducts productCategorie={recommendedProductsCategory} allProducts={data} />
      <Footer />
    </>
  );
};

export default ProductPage;
