import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll to top
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Link 
          id="back2Top" 
          className="back-to-top-button" 
          title="Back to top" 
          to="#"
          onClick={scrollToTop}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            background: 'linear-gradient(135deg, #cd2c22 0%, #b31b1b 100%)',
            color: 'white',
            borderRadius: '50%',
            cursor: 'pointer',
            zIndex: 9999,
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(205, 44, 34, 0.3)',
            transition: 'all 0.3s ease',
            animation: 'fadeInUp 0.5s ease-out',
          }}
        >
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 19V5"/>
            <path d="m5 12 7-7 7 7"/>
          </svg>
        </Link>
      )}
      
      <style>{`
        .back-to-top-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(205, 44, 34, 0.4);
          background: linear-gradient(135deg, #b31b1b 0%, #8b0000 100%);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .back-to-top-button {
            bottom: 20px !important;
            right: 20px !important;
            width: 45px !important;
            height: 45px !important;
          }
        }
      `}</style>
    </>
  );
};

export default BackToTop;