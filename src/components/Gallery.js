import React, { useState } from 'react';
import img1 from '../assets/Screenshot_2025-07-05_152610.webp';
import img2 from '../assets/Screenshot_2025-07-05_152650.webp';
import img3 from '../assets/Screenshot_2025-07-05_152736.webp';
import img4 from '../assets/Screenshot_2025-07-05_152757.webp';
import img5 from '../assets/Screenshot_2025-07-05_152818.webp';
import img6 from '../assets/Screenshot_2025-07-05_152857.webp';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const coreValues = [
    "Uncompromising Freshness & Quality",
    "Pure Vegetarian Excellence", 
    "Warmth & Hospitality in Every Interaction",
    "Cleanliness & Hygiene",
    "Continuous Innovation in Taste & Service"
  ];

  const galleryImages = [
    {
      id: 1,
      src: img1,
      alt: "Pure Vegetarian Excellence",
      category: "Core Value 1"
    },
    {
      id: 2,
      src: img2,
      alt: "Uncompromising Freshness & Quality",
      category: "Core Value 2"
    },
    {
      id: 3,
      src: img3,
      alt: "Continuous Innovation in Taste & Service",
      category: "Core Value 3"
    },
    {
      id: 4,
      src: img4,
      alt: "Warmth & Hospitality in Every Interaction",
      category: "Core Value 4"
    },
    {
      id: 5,
      src: img5,
      alt: "Cleanliness & Hygiene",
      category: "Core Value 5"
    },
    {
      id: 6,
      src: img6,
      alt: "Customer Satisfaction at the Heart of Everything We Do",
      category: "Core Value 6"
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <h2 className="section-title">Our Gallery</h2>
          <p className="gallery-subtitle">Experience the taste and ambiance of Crustify Café through our carefully curated collection of posts and core values</p>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map(image => (
            <div key={image.id} className="gallery-item">
              <div className="gallery-image-container">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <span className="gallery-category">{image.category}</span>
                    <h3 className="gallery-title">{image.alt}</h3>
                    <div className="gallery-icon" onClick={() => openModal(image)}>
                      <i className="fas fa-expand-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size image */}
        {selectedImage && (
          <div className="image-modal" onClick={closeModal}>
            <div className="modal-background">
              <div className="core-values-bg">
                {coreValues.map((value, index) => (
                  <div key={index} className="core-value-bg-item">
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
              <div className="modal-image-container">
                <img src={selectedImage.src} alt={selectedImage.alt} loading="lazy" />
              </div>
              <div className="modal-info">
                <span className="modal-category">{selectedImage.category}</span>
                <h3 className="modal-title">{selectedImage.alt}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(Gallery); 