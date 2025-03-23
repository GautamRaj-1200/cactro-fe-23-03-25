import { useState, useEffect } from 'react';
import './CookieModal.css';

const CookieModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the modal after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    // Here you would typically set a cookie or localStorage item
    localStorage.setItem('cookiesAccepted', 'true');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookies-modal">
      <div className="cookies-content">
        <button className="close-button" onClick={handleClose}>
          ×
        </button>
        <p>
          This website uses cookies to enhance user experience and traffic on our website. We also
          share information about your use of our site with social media, advertising and analytics
          partners.
        </p>
        <button className="accept-button" onClick={handleAccept}>
          Accept Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieModal;
