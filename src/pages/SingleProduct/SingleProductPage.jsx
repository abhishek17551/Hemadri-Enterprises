import React, { useState } from 'react'
import styles from './single-product.module.css'
import { useParams } from 'react-router-dom';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";

const SingleProductPage = ({ products }) => {
    const { skuCode } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const product = products.find((p) => p.skuCode === skuCode);
    if (!product) {
      return <div>Product not found!</div>;
    }
  
    const { title, category, mrp, sellingPrice, discount, imageUrls } = product;
  
    // Carousel actions
    const nextImage = () => {
      if (currentIndex < imageUrls.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const prevImage = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
  
    return (
      <div className={styles.singleProduct}>
        {imageUrls && imageUrls.length > 0 ? (
          <div className={styles.carousel}>
            <button
              className={`${styles.arrow} ${styles.leftArrow}`}
              onClick={prevImage}
              disabled={currentIndex === 0}
            >
              <FaCircleChevronLeft color="green" />
            </button>
            <img
              src={imageUrls[currentIndex] || "https://via.placeholder.com/400"}
              alt={title}
              className={styles.productImage}
            />
            <button
              className={`${styles.arrow} ${styles.rightArrow}`}
              onClick={nextImage}
              disabled={currentIndex === imageUrls.length - 1}
            >
              <FaCircleChevronRight color="green" />
            </button>
          </div>
        ) : (
          <img
            src="https://via.placeholder.com/400"
            alt="No images available"
            className={styles.productImage}
          />
        )}
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