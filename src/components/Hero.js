import React from 'react';
import banner from '../assets/banner.webp';

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Crustify Café</h1>
        <p className="hero-subtitle">Life Tastes Better Here — Pure Vegetarian Excellence.</p>
        <button onClick={scrollToMenu} className="cta-button">View Menu</button>
      </div>
    </section>
  );
};

export default React.memo(Hero); 