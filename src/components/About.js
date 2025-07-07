import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        
        <div className="about-intro">
          <p className="about-main-text">
            Crustify Café is proud to serve tasty, pure vegetarian snacks and meals in Madanthyar and surrounding areas. We're committed to delivering delicious, high-quality food that brings joy to every customer.
          </p>
        </div>

        <div className="about-features">
          <div className="about-feature">
            <div className="feature-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div className="feature-content">
              <h3>Opening Hours</h3>
              <p>Open all 7 days a week from 11:00 AM to 10:00 PM, ensuring you can enjoy your favorites any day, any time.</p>
            </div>
          </div>

          <div className="about-feature">
            <div className="feature-icon">
              <i className="fas fa-truck"></i>
            </div>
            <div className="feature-content">
              <h3>Home Delivery</h3>
              <p>Free home delivery within a 2 km radius, with a nominal charge of ₹10 per km beyond that. Delivery available daily from 11:00 AM to 10:00 PM .</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About); 