import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchHotelsImages } from '../../store/Actions/hotelActions';
import { selectHotelsImages } from '../../store/Selectors/hotelSelectors';
import ImageSkeleton from './ImageSkeleton';

// Add this Modal component inside the same file (or import from another file if you prefer)
const ImageSliderModal = ({
  groupedByCategory,
  initialCategory,
  initialIndex,
  onClose
}) => {
  const categories = Object.keys(groupedByCategory);

  // Build a flat list of all images with their category and index
  const flatImages = [];
  categories.forEach(cat => {
    (groupedByCategory[cat] || []).forEach((img, idx) => {
      flatImages.push({ ...img, category: cat, categoryIndex: idx });
    });
  });

  // Track the global image index
  const [globalIndex, setGlobalIndex] = useState(() => {
    return flatImages.findIndex(
      img => img.category === initialCategory && img.categoryIndex === initialIndex
    );
  });

  // Derive the current image, category, and index
  const currentImage = flatImages[globalIndex] || {};
  const activeCategory = currentImage.category;
  const images = groupedByCategory[activeCategory] || [];
  const currentIndex = currentImage.categoryIndex;

  const touchStartX = useRef(null);
  const [fade, setFade] = useState(true);
  const thumbStripRef = useRef(null);

  // 1. Create a ref to store tab elements
  const modalTabRefs = useRef({});

  // Fade-in effect when image changes
  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 10);
    return () => clearTimeout(timeout);
  }, [currentIndex, activeCategory]);

  // Scroll thumbnail strip to keep active image in view
  useEffect(() => {
    if (!thumbStripRef.current) return;
    const activeThumb = thumbStripRef.current.querySelector('.active-thumb');
    if (activeThumb) {
      const strip = thumbStripRef.current;
      const thumbRect = activeThumb.getBoundingClientRect();
      const stripRect = strip.getBoundingClientRect();
      if (thumbRect.left < stripRect.left) {
        strip.scrollLeft -= (stripRect.left - thumbRect.left + 8);
      } else if (thumbRect.right > stripRect.right) {
        strip.scrollLeft += (thumbRect.right - stripRect.right + 8);
      }
    }
  }, [currentIndex, activeCategory]);

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch end
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handlePrev();
      else handleNext();
    }
    touchStartX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      else if (e.key === 'ArrowRight') handleNext();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  // Move to previous image (across categories)
  const handlePrev = () => {
    if (globalIndex > 0) setGlobalIndex(globalIndex - 1);
  };

  // Move to next image (across categories)
  const handleNext = () => {
    if (globalIndex < flatImages.length - 1) setGlobalIndex(globalIndex + 1);
  };

  // When category changes, reset to first image
  useEffect(() => {
    // setCurrentIndex(0); // This is now handled by globalIndex
  }, [activeCategory]);

  useEffect(() => {
    // Whenever currentIndex or activeCategory changes, ensure the tab is highlighted for the current image's category
    if (images && images[currentIndex]) {
      const currentImageCategory = activeCategory;
      // If you want to update the tab highlight based on the image's category, you can do so here.
      // But since images are grouped by category, this is already correct.
      // If you want to scroll the tab into view, you can do it here as well.
    }
  }, [currentIndex, activeCategory, images]);

  useEffect(() => {
    // 3. Add an effect to scroll the active tab into view:
    if (activeCategory && modalTabRefs.current[activeCategory]) {
      modalTabRefs.current[activeCategory].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  }, [activeCategory]);

  const handleTabClick = (cat) => {
    // Find the first image in the selected category in the flatImages array
    const idx = flatImages.findIndex(img => img.category === cat);
    if (idx !== -1) setGlobalIndex(idx);
  };

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      // Restore scroll when modal closes
      document.body.style.overflow = '';
    };
  }, []);

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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        onClick={e => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Category and position info above image */}
        <div
          style={{
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 28, // Increased from 18 to 28
            marginBottom: 8,
            textAlign: 'center',
            textShadow: '0 2px 8px rgba(0,0,0,0.7)',
            maxWidth: '80vw',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            letterSpacing: 0.5,
          }}
        >
          {activeCategory}
        </div>
        {/* Main Image at top */}
        <img
          src={images[currentIndex].Url}
          alt={images[currentIndex].Name}
          style={{
            maxWidth: '80vw',
            maxHeight: '60vh',
            borderRadius: 8,
            boxShadow: '0 2px 16px rgba(0,0,0,0.5)',
            marginBottom: 16,
            opacity: fade ? 1 : 0,
            transition: 'opacity 0.5s cubic-bezier(0.4,0,0.2,1)',
          }}
        />
        {/* Category list below title */}
        <div
          className="modal-category-strip"
          style={{
            display: 'flex',
            gap: 24,
            overflowX: 'auto',
            marginBottom: 8,
            width: '65%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 12px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              ref={el => modalTabRefs.current[cat] = el}
              onClick={() => handleTabClick(cat)}
              style={{
                background: 'none',
                border: 'none',
                fontWeight: cat === activeCategory ? 'bold' : 'normal',
                color: cat === activeCategory ? '#fff' : '#ccc',
                borderBottom: cat === activeCategory ? '3px solid #2196f3' : 'none',
                fontSize: 14, // Reduced from 18
                padding: '0 4px 2px 4px', // Reduced padding
                cursor: 'pointer',
                outline: 'none',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s, border-bottom 0.2s',
              }}
            >
              {cat} ({groupedByCategory[cat]?.length || 0})
            </button>
          ))}
        </div>
        {/* Thumbnails for current category */}
        <div
          ref={thumbStripRef}
          className="modal-thumb-strip"
          style={{
            display: 'flex',
            gap: 8,
            marginTop: 8,
            overflowX: 'auto',
            maxWidth: '80vw',
            paddingBottom: 8
          }}
        >
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.Url}
              alt={img.Name}
              onClick={() => {
                // Find the global index for this image
                const idxInFlat = flatImages.findIndex(
                  img => img.category === activeCategory && img.categoryIndex === idx
                );
                if (idxInFlat !== -1) setGlobalIndex(idxInFlat);
              }}
              className={idx === currentIndex ? 'active-thumb' : ''}
              style={{
                width: 64,
                height: 48,
                objectFit: 'cover',
                borderRadius: 4,
                border: idx === currentIndex ? '3px solid #2196f3' : '2px solid #fff',
                boxShadow: idx === currentIndex ? '0 0 8px #2196f3' : '0 1px 4px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                opacity: idx === currentIndex ? 1 : 0.7,
                transition: 'border 0.2s, box-shadow 0.2s'
              }}
            />
          ))}
        </div>
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
              onClick={handlePrev}
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
              onClick={handleNext}
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
      <style>
      {`
        .modal-category-strip, .modal-thumb-strip {
          scrollbar-width: none; /* Firefox */
        }
        .modal-category-strip::-webkit-scrollbar, .modal-thumb-strip::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}
      </style>
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
    const [modalCategory, setModalCategory] = useState('');
    const [modalIndex, setModalIndex] = useState(0);

    // 1. Create a ref to store tab elements
    const tabRefs = useRef({});

    const { HotelProviderSearchId } = location.state;
    console.log("HotelProviderSearchId:", HotelProviderSearchId);
    const hotelImages = useSelector(selectHotelsImages);

    // Use the correct array for images
    const imagesArray = hotelImages?.Gallery || [];

    // Group images by category (move this above all useEffects)
    const groupedByCategory = imagesArray && imagesArray.length > 0 ? imagesArray.reduce((acc, img) => {
        if (!acc[img.Name]) acc[img.Name] = [];
        acc[img.Name].push(img);
        return acc;
    }, {}) : {};

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
    const handleImageClick = (category, idx) => {
        setModalOpen(true);
        setModalIndex(idx);
        setModalCategory(category);
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
              .hotel-header-bar {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 16px 24px 8px 24px;
                background: #fff;
                border-bottom: 1px solid #eee;
                position: sticky;
                top: 0;
                z-index: 100;
              }
              .hotel-header-bar .back-btn {
                background: none;
                border: none;
                color: #e53935;
                font-size: 20px;
                font-weight: bold;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
              }
              .hotel-header-bar .hotel-title {
                font-size: 20px;
                font-weight: 600;
                color: #222;
                flex: 1;
                text-align: left;
                margin-left: 12px;
              }
              .hotel-header-bar .select-room-btn {
                background: #e53935;
                color: #fff;
                border: none;
                border-radius: 4px;
                padding: 8px 18px;
                font-size: 15px;
                font-weight: 500;
                cursor: pointer;
                transition: background 0.2s;
              }
              .hotel-header-bar .select-room-btn:hover {
                background: #b71c1c;
              }
            `}
            </style>
            {/* Header Bar */}
            <div className="hotel-header-bar">
              <button className="back-btn" onClick={() => navigate(-1)}>
                &#8592; {/* Left arrow */}
              </button>
              <div className="hotel-title">
                {hotelImages?.HotelName || "Hotel Name"}
              </div>
              <button
                className="select-room-btn"
                onClick={() => {
                  navigate('/hotel-details', { state: { details: hotelImages } });
                }}
              >
                Select Room
              </button>
            </div>
            {/* Modal for slider view */}
            {modalOpen && (
              <ImageSliderModal
                groupedByCategory={groupedByCategory}
                initialCategory={modalCategory}
                initialIndex={modalIndex}
                onClose={() => setModalOpen(false)}
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
                    fontSize: 16, // Changed from 12 or 14 to 16
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
                                borderBottom: activeCategory === category ? '3px solid #e53935' : 'none', // <--- CHANGE THIS
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
                                            onClick={() => handleImageClick(category, idx)}
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