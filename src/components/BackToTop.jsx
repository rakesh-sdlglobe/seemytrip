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
      {isVisible && 
        <Link 
          id="back2Top" 
          className="top-scroll" 
          title="Back to top" 
          to="#"
          onClick={scrollToTop}
          style={{
            display: 'block',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            cursor: 'pointer',
            zIndex: 999
          }}
        >
          <i className="fa-solid fa-sort-up" />
        </Link>
      }
    </>
  );
};

export default BackToTop;