import React, { useState } from 'react';

const ImageSkeleton = ({ src, alt, className, onClick, onMouseEnter, style, id }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const skeletonStyles = {
    position: 'relative',
    background: 'linear-gradient(90deg, #ececec 25%, #f5f5f5 50%, #ececec 75%)',
    borderRadius: '8px',
    overflow: 'hidden',
    animation: 'skeleton-fade 1.2s infinite ease-in-out alternate',
    ...style
  };

  const shimmerStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
    animation: 'shimmer 1.5s infinite'
  };

  const errorStyles = {
    ...skeletonStyles,
    background: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6c757d',
    fontSize: '0.875rem'
  };

  const errorPlaceholderStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const errorIconStyles = {
    fontSize: '1.5rem',
    opacity: 0.5
  };

  const imageStyles = {
    ...style,
    display: imageLoaded ? 'block' : 'none'
  };

  // Add CSS animations to document head if not already present
  React.useEffect(() => {
    if (!document.getElementById('image-skeleton-styles')) {
      const styleSheet = document.createElement('style');
      styleSheet.id = 'image-skeleton-styles';
      styleSheet.textContent = `
        @keyframes skeleton-fade {
          0% { opacity: 1; }
          100% { opacity: 0.5; }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }, []);

  if (!src) {
    return (
      <div 
        className={`image-skeleton ${className || ''}`}
        style={skeletonStyles}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
      >
        <div style={shimmerStyles}></div>
      </div>
    );
  }

  return (
    <>
      {!imageLoaded && (
        <div 
          className={`image-skeleton ${className || ''}`}
          style={skeletonStyles}
        >
          <div style={shimmerStyles}></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className || ''} ${imageLoaded ? 'image-loaded' : 'image-hidden'}`}
        style={imageStyles}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onLoad={handleImageLoad}
        onError={handleImageError}
        id={id}
      />
      {imageError && (
        <div 
          className={`image-skeleton image-error ${className || ''}`}
          style={errorStyles}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
        >
          <div style={errorPlaceholderStyles}>
            <i className="fas fa-image" style={errorIconStyles}></i>
            <span>Image not available</span>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageSkeleton; 