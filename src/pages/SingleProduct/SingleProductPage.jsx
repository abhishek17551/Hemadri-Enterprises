import React, { useEffect, useState } from 'react'
import styles from './single-product.module.css'
import { useParams } from 'react-router-dom';


const SingleProductPage = ({ products }) => {
    const { skuCode } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  
    const product = products.find((p) => p.skuCode === skuCode);
    if (!product) {
      return <div>Product not found!</div>;
    }

    const { title, category, mrp, sellingPrice, discount, imageUrls } = product;

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 3000);
    
      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, [imageUrls.length]);

    
    return (
      <div className={styles.singleProduct}>
        <div className={styles.carousel}>
          <div
            className={styles.carouselInner}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {imageUrls.map((image, index) => (
              <div key={index} className={styles.carouselItem}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>


        <div className={styles.productDetails}>
          <h3 className={styles.productTitle}>{title}</h3>
          <div className={styles.priceSection}>
            <span className={styles.mrp}>MRP : ₹{mrp}</span>
            <span className={styles.sellingPrice}>
              Selling Price : ₹{sellingPrice}
            </span>
            <span className={styles.discount}>Discount : {discount}% off</span>
          </div>
        </div>
      </div>
    );
  };

export default SingleProductPage