import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-brand">
              <h3 className="footer-logo">Crustify Café</h3>
              <p className="footer-tagline">Life Tastes Better Here — Pure Vegetarian Excellence.</p>
              <p className="footer-description">
                Experience the finest vegetarian food in Madanthyar, where every dish is crafted with love and the highest standards of quality.
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Visit Us</h4>
            <div className="footer-info">
              <div className="footer-info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <span className="info-label">Address</span>
                  <span className="info-value">JMJ Complex, Sacred Heart College Road, Madanthyar</span>
                </div>
              </div>
              <div className="footer-info-item">
                <i className="fas fa-clock"></i>
                <div>
                  <span className="info-label">Opening Hours</span>
                  <span className="info-value">Daily: 11:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-info">
              <div className="footer-info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <span className="info-label">Phone</span>
                  <span className="info-value">+91 9741297350</span>
                </div>
              </div>
              <div className="footer-info-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-value">crustifymadanthyar@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-social">
              <div className="social-links-grid">
                <a href="https://www.instagram.com/_crustify?utm_source=qr&igsh=aWk0MjB3MWR0NmNr" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="social-link instagram">
                  <div className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div className="social-text">
                    <span className="social-name">Instagram</span>
                    <span className="social-desc">Follow us for updates</span>
                  </div>
                </a>
                <a href="https://wa.me/919741297350" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="social-link whatsapp">
                  <div className="social-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="social-text">
                    <span className="social-name">WhatsApp</span>
                    <span className="social-desc">Chat with us</span>
                  </div>
                </a>
                <a href="mailto:crustifymadanthyar@gmail.com" 
                   className="social-link email">
                  <div className="social-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="social-text">
                    <span className="social-name">Email</span>
                    <span className="social-desc">Send us a message</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">&copy; {currentYear} Crustify Café. All rights reserved.</p>
            <p className="footer-motto">Pure Vegetarian Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer); 