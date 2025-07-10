import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchHotelsImages } from '../../store/Actions/hotelActions';
import { selectHotelsImages } from '../../store/Selectors/hotelSelectors';

const HotelImages = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState('');

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

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
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
                            ref={el => tabRefs.current[category] = el} // <-- Add this line
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
                                        <img
                                            src={image.Url}
                                            className="card-img-top"
                                            alt={image.Name}
                                            style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                                            onClick={() => window.open(image.Url, '_blank')}
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