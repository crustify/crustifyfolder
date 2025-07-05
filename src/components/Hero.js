import React from 'react';

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
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Crustify Café</h1>
        <p className="hero-subtitle">Life Tastes Better Here — Pure Vegetarian Excellence.</p>
        <button onClick={scrollToMenu} className="cta-button">View Menu</button>
      </div>
    </section>
  );
};

export default Hero; 