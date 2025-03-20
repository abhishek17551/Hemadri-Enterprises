import React from "react";
import styles from "./product-card.module.css"; // Import the CSS file


const ProductCard = ({ product }) => {
    const { title, mrp, sellingPrice, discount, category, skuCode, imageUrls } = product;

    return (
        <div className={styles.productCard}>
            <div className={styles.productImage}>
                <img
                    src={imageUrls[1]}
                    alt={title}
                />
            </div>
            <div className={styles.productDetails}>
                <h3 className={styles.productTitle}>{title}</h3>
                <span className={styles.skuCode}>{skuCode}</span>
                <div className={styles.priceSection}>
                    <span className={styles.sellingPrice}>₹{sellingPrice}</span>
                    <span className={styles.mrp}>₹{mrp}</span>
                    <span className={styles.discount}>{discount}% off</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;