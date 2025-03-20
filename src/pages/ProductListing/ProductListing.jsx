import React, { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../data/products.json";
import './product-listing.css' // Import the JSON data
import { categories } from "../../utils/categories";
import { Link } from "react-router-dom";



const ProductListing = () => {
    const [selectedCategory, setSelectedCategory] = useState("Pressure Cooker");

    const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="product-listing">
      <div className="product-heading">Our Products</div>

      <div className="category-grid">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`category-item ${
              selectedCategory === category.name ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <Link to={`/products/${product.skuCode}`} key={product.skuCode} className="link"> 
             <ProductCard product={product} /> 
          </Link>
                   
        ))}
      </div>
    </div>
  );
};

export default ProductListing;