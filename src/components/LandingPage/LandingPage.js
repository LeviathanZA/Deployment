// components/LandingPage/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import RegistrationForm from './RegistrationForm'; // Import RegistrationForm component

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <h1>Welcome to our Online Store!</h1>
        <p>Discover a world of amazing products at unbeatable prices.</p>
        <Link to="/store" className="cta-button">Explore Now</Link>
      </div>
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="feature">
          <img src="feature-1-icon.svg" alt="Icon" />
          <h3>Quality Products</h3>
          <p>Shop from a wide selection of high-quality products from top brands.</p>
        </div>
        <div className="feature">
          <img src="feature-2-icon.svg" alt="Icon" />
          <h3>Fast Shipping</h3>
          <p>Get your orders delivered quickly and securely to your doorstep.</p>
        </div>
        <div className="feature">
          <img src="feature-3-icon.svg" alt="Icon" />
          <h3>Excellent Customer Service</h3>
          <p>Our dedicated support team is here to assist you with any queries or concerns.</p>
        </div>
      </div>
      {/* Render the RegistrationForm component */}
      <RegistrationForm />
    </div>
  );
};

export default LandingPage;
