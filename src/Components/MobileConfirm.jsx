import React from 'react';
import { useNavigate } from 'react-router-dom';

const MobileConfirm = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    // Navigate back to the home page
    navigate('/');
  };

  return (
    <>
      <div className="confirmation-section">
        <h1>Tēnā Rawa Atu Koe</h1>
        <h4>Thank you so much</h4>
        <button id="hero-btn-styling" onClick={handleBackToHome}>
          Back to Home
        </button>
      </div>
    </>
  );
};

export default MobileConfirm;

