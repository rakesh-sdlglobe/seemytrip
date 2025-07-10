import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchHotelsImages } from '../../store/Actions/hotelActions';
import { selectHotelsImages } from '../../store/Selectors/hotelSelectors';
import ImageSkeleton from './ImageSkeleton';

// Add this Modal component inside the same file (or import from another file if you prefer)
const ImageSliderModal = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const touchStartX = useRef(null);

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch end
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        onPrev(e); // Swipe right: previous image
      } else {
        onNext(e); // Swipe left: next image
      }
    }
    touchStartX.current = null;
  };

  if (!images || images.length === 0) return null;
  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,0.8)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          background: 'transparent',
        }}
        onClick={e => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentIndex].Url}
          alt={images[currentIndex].Name}
          style={{
            maxWidth: '80vw',
            maxHeight: '80vh',
            borderRadius: 8,
            boxShadow: '0 2px 16px rgba(0,0,0,0.5)'
          }}
        />
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            background: 'rgba(0,0,0,0.6)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: 32,
            height: 32,
            fontSize: 20,
            cursor: 'pointer'
          }}
        >×</button>
        {/* Prev/Next buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              style={{
                position: 'absolute',
                top: '50%',
                left: -40,
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 32,
                height: 32,
                fontSize: 20,
                cursor: 'pointer'
              }}
              aria-label="Previous"
            >‹</button>
            <button
              onClick={onNext}
              style={{
                position: 'absolute',
                top: '50%',
                right: -40,
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.6)',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 32,
                height: 32,
                fontSize: 20,
                cursor: 'pointer'
              }}
              aria-label="Next"
            >›</button>
          </>
        )}
      </div>
    </div>
  );
};

// Hotel Images Skeleton Component
const HotelImagesSkeleton = () => {
  return (
    <div className="container mt-4">
      {/* Skeleton for category tabs */}
      <div className="category-tabs" style={{
        display: 'flex',
        overflowX: 'auto',
        borderBottom: '1px solid #eee',
        marginBottom: 24,
        gap: 24,
        padding: '8px 0',
        position: 'sticky',
        top: 0,
        background: '#fff',
        zIndex: 10,
      }}>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            style={{
              width: '80px',
              height: '32px',
              background: 'linear-gradient(90deg, #ececec 25%, #f5f5f5 50%, #ececec 75%)',
              borderRadius: '4px',
              animation: 'skeleton-fade 1.2s infinite ease-in-out alternate'
            }}
          />
        ))}
      </div>

      {/* Skeleton for gallery sections */}
      {[...Array(3)].map((_, sectionIndex) => (
        <div key={sectionIndex} className="mb-5">
          {/* Skeleton for section title */}
          <div
            style={{
              width: '200px',
              height: '24px',
              background: 'linear-gradient(90deg, #ececec 25%, #f5f5f5 50%, #ececec 75%)',
              borderRadius: '4px',
              marginBottom: '16px',
              animation: 'skeleton-fade 1.2s infinite ease-in-out alternate'
            }}
          />
          
          {/* Skeleton for image grid */}
          <div className="row g-4">
            {[...Array(8)].map((_, imageIndex) => (
              <div key={imageIndex} className="col-md-4 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <div
                    style={{
                      height: '200px',
                      background: 'linear-gradient(90deg, #ececec 25%, #f5f5f5 50%, #ececec 75%)',
                      borderRadius: '0.375rem 0.375rem 0 0',
                      animation: 'skeleton-fade 1.2s infinite ease-in-out alternate'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <style>
        {`
          @keyframes skeleton-fade {
            0% { opacity: 1; }
            100% { opacity: 0.5; }
          }
        `}
      </style>
    </div>
  );
};

const HotelImages = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [modalIndex, setModalIndex] = useState(0);

    // Add the useEffect here
    useEffect(() => {
      if (!modalOpen) return;
      const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
          setModalIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
        } else if (e.key === 'ArrowRight') {
          setModalIndex((prev) => (prev + 1) % modalImages.length);
        } else if (e.key === 'Escape') {
          setModalOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [modalOpen, modalImages.length]);

    // 1. Create a ref to store tab elements
    const tabRefs = useRef({});

    const { HotelProviderSearchId } = location.state;
    const hotelImages = useSelector(selectHotelsImages);

    // Use the correct array for images
    const imagesArray = hotelImages?.Gallery || [];

    useEffect(() => {
        dispatch(fetchHotelsImages(HotelProviderSearchId));
    }, [dispatch, HotelProviderSearchId]);

    // Process images and extract unique categories
    useEffect(() => {
        console.log("hotelImages from Redux:", hotelImages);
        console.log("imagesArray:", imagesArray);
        if (imagesArray.length > 0) {
            // Get unique categories
            const uniqueCategories = [...new Set(imagesArray.map(img => img.Name))];
            setCategories(['all', ...uniqueCategories]);
            setLoading(false);
        }
    }, [hotelImages]);

    useEffect(() => {
        // Set default active category on load
        const firstCategory = Object.keys(groupedByCategory)[0];
        if (firstCategory) setActiveCategory(firstCategory);
    }, [imagesArray]);

    // Group images by category
    const groupedByCategory = imagesArray && imagesArray.length > 0 ? imagesArray.reduce((acc, img) => {
        if (!acc[img.Name]) acc[img.Name] = [];
        acc[img.Name].push(img);
        return acc;
    }, {}) : {};

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Only add scroll listener if there are categories to track
        if (Object.keys(groupedByCategory).length === 0) return;

        const handleScroll = () => {
            const sectionIds = Object.keys(groupedByCategory).map(category => `section-${category}`);
            
            // Check if there are any sections before proceeding
            if (sectionIds.length === 0) return;
            
            let current = sectionIds[0];

            for (let id of sectionIds) {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // You can tweak the offset (here: 120) for your header height
                    if (rect.top <= 120) {
                        current = id;
                    }
                }
            }
            // Remove 'section-' prefix to get the category name
            if (current) {
                setActiveCategory(current.replace('section-', ''));
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [groupedByCategory]);

    // 2. Scroll the active tab into view when it changes
    useEffect(() => {
        if (activeCategory && tabRefs.current[activeCategory]) {
            tabRefs.current[activeCategory].scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });
        }
    }, [activeCategory]);

    // Handler to open modal with images of the current category
    const handleImageClick = (images, idx) => {
        setModalImages(images);
        setModalIndex(idx);
        setModalOpen(true);
    };

    if (loading) {
        return <HotelImagesSkeleton />;
    }

    // Check if there are any images to display
    if (!imagesArray || imagesArray.length === 0) {
        return (
            <div className="container mt-5 text-center">
                <p>No images available for this hotel.</p>
            </div>
        );
    }

    return (
        <>
            <style>
            {`
              .category-tabs {
                scrollbar-width: none;        /* Firefox */
                
              }
              .category-tabs::-webkit-scrollbar {
                display: none;                /* Chrome, Safari, Opera */
              }
            `}
            </style>
            {/* Modal for slider view */}
            {modalOpen && (
              <ImageSliderModal
                images={modalImages}
                currentIndex={modalIndex}
                onClose={() => setModalOpen(false)}
                onPrev={e => {
                  e.stopPropagation();
                  setModalIndex((modalIndex - 1 + modalImages.length) % modalImages.length);
                }}
                onNext={e => {
                  e.stopPropagation();
                  setModalIndex((modalIndex + 1) % modalImages.length);
                }}
              />
            )}
            <div className="container mt-4">
                {/* Horizontal Scrollable Tabs */}
                <div className="category-tabs" style={{
                    display: 'flex',
                    overflowX: 'auto',
                    borderBottom: '1px solid #eee',
                    marginBottom: 24,
                    gap: 24,
                    padding: '8px 0',
                    position: 'sticky',
                    top: 0,
                    background: '#fff',
                    zIndex: 10,
                    fontSize: 8,
                }}>
                    {Object.keys(groupedByCategory).map(category => (
                        <button
                            key={category}
                            ref={el => tabRefs.current[category] = el}
                            className={`category-tab${activeCategory === category ? ' active' : ''}`}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontWeight: activeCategory === category ? 'bold' : 'normal',
                                color: activeCategory === category ? '#222' : '#555',
                                borderBottom: activeCategory === category ? '3px solid #2196f3' : 'none',
                                padding: '8px 12px',
                                cursor: 'pointer',
                                outline: 'none',
                                fontSize: 12,
                                whiteSpace: 'nowrap'
                            }}
                            onClick={() => {
                                setActiveCategory(category);
                                document.getElementById(`section-${category}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Sections */}
                {Object.entries(groupedByCategory).map(([category, images]) => (
                    <div key={category} id={`section-${category}`} className="mb-5">
                        <h5 className="mb-3">{category}</h5>
                        <div className="row g-4">
                            {images.map((image, idx) => (
                                <div key={idx} className="col-md-4 col-lg-3">
                                    <div className="card h-100 shadow-sm">
                                        <ImageSkeleton
                                            src={image.Url}
                                            alt={image.Name}
                                            className="card-img-top"
                                            style={{ 
                                                height: '200px', 
                                                objectFit: 'cover', 
                                                cursor: 'pointer',
                                                borderRadius: '0.375rem 0.375rem 0 0'
                                            }}
                                            onClick={() => handleImageClick(images, idx)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default HotelImages; 