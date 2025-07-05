import React from 'react';

const Contact = () => {
  const MAP_URL = "https://maps.app.goo.gl/7HvNANhMCm17MpTx9";
  const EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.360940604916!2d75.1877736!3d12.948740299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4b1000734fc1b%3A0xa592a6b700ac38da!2sCrustify!5e0!3m2!1sen!2sin!4v1751528372208!5m2!1sen!2sin";

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Address</h3>
                <p>JMJ Complex, Sacred Heart College Road<br />Madanthyar</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Phone</h3>
                <p>+91 9741297350</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p><a href="mailto:crustifymadanthyar@gmail.com" style={{ color: '#d4af37', textDecoration: 'none' }}>crustifymadanthyar@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-buttons">
              <a href="tel:+919741297350" className="contact-button">
                <i className="fas fa-phone"></i>
                Call Now
              </a>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="contact-button">
                <i className="fas fa-directions"></i>
                Get Directions
              </a>
              <a href="https://www.instagram.com/_crustify?utm_source=qr&igsh=aWk0MjB3MWR0NmNr" target="_blank" rel="noopener noreferrer" className="contact-button">
                <i className="fab fa-instagram"></i>
                Follow Us
              </a>
              <a href="https://wa.me/919741297350" target="_blank" rel="noopener noreferrer" className="contact-button">
                <i className="fab fa-whatsapp"></i>
                WhatsApp
              </a>
            </div>
          </div>
          <div className="contact-map">
            <iframe 
              src={EMBED_URL}
              width="100%" 
              height="300" 
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Crustify Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 