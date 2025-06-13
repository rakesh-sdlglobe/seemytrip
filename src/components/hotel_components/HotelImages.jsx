import React, { useState, useEffect } from 'react';
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

    const { HotelProviderSearchId } = location.state;
    const hotelImages = useSelector(selectHotelsImages);

    useEffect(() => {
        dispatch(fetchHotelsImages(HotelProviderSearchId));
    }, [dispatch, HotelProviderSearchId]);

    // Process images and extract unique categories
    useEffect(() => {
        if (hotelImages && hotelImages.length > 0) {
            // Get unique categories
            const uniqueCategories = [...new Set(hotelImages.map(img => img.Name))];
            setCategories(['all', ...uniqueCategories]);
            setLoading(false);
        }
    }, [hotelImages]);

    // Group images by category
    const groupedImages = {
        all: hotelImages || [],
        ...categories.reduce((acc, category) => {
            if (category !== 'all') {
                acc[category] = hotelImages?.filter(img => img.Name === category) || [];
            }
            return acc;
        }, {})
    };

    if (loading) {
        return (
            <div className="container mt-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid mt-4">
            <div className="row">
                {/* Side Navigation */}
                <div className="col-md-3 col-lg-2">
                    <div className="sticky-top pt-3">
                        <button 
                            className="btn btn-outline-primary mb-4 w-100"
                            onClick={() => navigate(-1)}
                        >
                            <i className="fas fa-arrow-left me-2"></i>
                            Back to Hotel
                        </button>
                        
                        <div className="list-group">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${
                                        selectedCategory === category ? 'active' : ''
                                    }`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category === 'all' ? 'All Images' : category}
                                    <span className="badge bg-primary rounded-pill">
                                        {groupedImages[category]?.length || 0}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="col-md-9 col-lg-10">
                    <div className="row g-4">
                        {groupedImages[selectedCategory]?.map((image, index) => (
                            <div key={index} className="col-md-4 col-lg-3">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={image.Url}
                                        className="card-img-top"
                                        alt={image.Name}
                                        style={{ 
                                            height: '200px', 
                                            objectFit: 'cover',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => window.open(image.Url, '_blank')}
                                    />
                                    <div className="card-body">
                                        <p className="card-text text-muted small">
                                            {image.Name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Images Message */}
                    {(!groupedImages[selectedCategory] || groupedImages[selectedCategory].length === 0) && (
                        <div className="text-center mt-5">
                            <i className="fas fa-images fa-3x text-muted mb-3"></i>
                            <h4>No images available for this category</h4>
                            <p className="text-muted">Please select a different category or check back later.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HotelImages; 