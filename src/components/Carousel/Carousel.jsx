import React, { useState, useEffect } from "react";
import "./carousel.css"; 

const Carousel = () => {
  const images = [
    "https://res.cloudinary.com/do9jxudca/image/upload/v1740988446/hemadri/mwmfux32lbkpqts5dywl.webp",
    "https://res.cloudinary.com/do9jxudca/image/upload/v1740988446/hemadri/ujjakqqipofacfakpd2x.avif",
    "https://res.cloudinary.com/do9jxudca/image/upload/v1740988446/hemadri/wvfcxqsajlpsgbk7en84.jpg",
    "https://res.cloudinary.com/do9jxudca/image/upload/v1740988446/hemadri/hmoyvssuqz7kfij2vb5x.webp",
    "https://res.cloudinary.com/do9jxudca/image/upload/v1740989743/9828-50524-IMG1_t35ozx.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;