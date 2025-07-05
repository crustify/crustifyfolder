import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMenu();
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/images/logo_circle.jpg" alt="Crustify Café Logo" className="nav-logo-img" />
          <div className="nav-logo-text">
            <h2>Crustify Café</h2>
            <span className="nav-tagline">Pure Vegetarian Excellence</span>
          </div>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('home')} className="nav-link">Home</button></li>
          <li><button onClick={() => scrollToSection('menu')} className="nav-link">Menu</button></li>
          <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
          <li><button onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
          <li className="nav-phone">
            <a href="tel:+919741297350" className="nav-phone-link">
              <i className="fas fa-phone"></i>
              +91 9741297350
            </a>
          </li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 