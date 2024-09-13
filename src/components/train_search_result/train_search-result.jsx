import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TrainSearchResultList = ({ trainData, filters }) => {
    const navigate = useNavigate();
    const [filteredTrainData, setFilteredTrainData] = useState([]);

    // Function to check if a train has any valid classes based on the filters
    const hasValidClasses = (classes) => {
        return classes.some(cls =>
            (filters['1A'] && cls.type === '1A') ||
            (filters['2A'] && cls.type === '2A') ||
            (filters['3A'] && cls.type === '3A') ||
            (filters['SL'] && cls.type === 'SL') ||
            (!filters['1A'] && !filters['2A'] && !filters['3A'] && !filters['SL']) // If no specific class filter is selected, include all.
        );
    };

    // Function to filter classes based on the filters (AC and specific classes)
    const filterClasses = (classes) => {
        return classes.filter(cls =>
            (filters.ac && (cls.type === '1A' || cls.type === '2A' || cls.type === '3A')) ||
            (filters['1A'] && cls.type === '1A') ||
            (filters['2A'] && cls.type === '2A') ||
            (filters['3A'] && cls.type === '3A') ||
            (filters['SL'] && cls.type === 'SL') ||
            (!filters['ac'] && !filters['1A'] && !filters['2A'] && !filters['3A'] && !filters['SL']) // If no filters, include all classes.
        );
    };

    useEffect(() => {
        // If no new train data is passed in, use data from sessionStorage
        if (!trainData || trainData.length === 0) {
            const storedData = sessionStorage.getItem('filteredTrainData');
            if (storedData) {
                setFilteredTrainData(JSON.parse(storedData));
            }
        } else {
            // Filter the train data and save it in sessionStorage
            const filteredData = trainData
                .filter(train => hasValidClasses(train.classes))
                .map(train => ({
                    ...train,
                    classes: filterClasses(train.classes)
                }));

            setFilteredTrainData(filteredData);
            sessionStorage.setItem('filteredTrainData', JSON.stringify(filteredData));
        }
    }, [trainData, filters]);

    // Function to handle booking
    const handleBooking = (train) => {
        navigate('/booking-page', { state: { trainData: train } });
    };

    return (
        <div className="row align-items-center g-4 mt-2">
            {/* Offer Coupon Box */}
            <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="d-md-flex bg-success rounded-2 align-items-center justify-content-between px-3 py-3">
                    <div className="d-md-flex align-items-center justify-content-start">
                        <div className="mb-md-0 mb-3">
                            <div className="square--60 circle bg-white">
                                <i className="fa-solid fa-gift fs-3 text-success" />
                            </div>
                        </div>
                        <div className="ps-2">
                            <h6 className="fs-5 fw-medium text-light mb-0">Start Your Train Journey</h6>
                            <p className="text-light mb-0">Book Train Tickets Easily and Enjoy Special Discounts with Our Platform</p>
                        </div>
                    </div>
                    <div className="text-md-end mt-md-0 mt-4">
                        <button type="button" className="btn btn-white fw-medium full-width text-dark px-xl-4">Get Started</button>
                    </div>
                </div>
            </div>

            {/* Train list */}
            {filteredTrainData.map(train => (
                <div key={train.id} className="col-xl-12 col-lg-12 col-md-12">
                    <div className="train-availability-card bg-white rounded-3 p-3">
                        <div className="row gy-4 align-items-center justify-content-between">
                            {/* Train Info Header */}
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="train-name me-4">
                                        <h5 className="mb-1">{train.name}</h5>
                                        <div className="text-muted small">Runs on: {train.runsOn}</div>
                                    </div>
                                    <div className="d-flex align-items-center flex-grow-1" style={{ padding: '10px', borderRadius: '8px' }}>
                                        <div className="d-flex flex-column align-items-center me-1" style={{ flex: '1' }}>
                                            <div className="fw-bold fs-6">{train.departureTime}</div>
                                            <div className="text-muted small">{train.fromStation}</div>
                                        </div>
                                        <div className="text-center" style={{ flex: '1', position: 'relative' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', position: 'relative', justifyContent: 'center' }}>
                                                <div style={{ flex: 1, height: '1px', backgroundColor: '#ddd' }}></div>
                                                <div style={{ margin: '0 10px', fontWeight: 'bold', fontSize: '16px', zIndex: 1 }}>{train.duration}</div>
                                                <div style={{ flex: 1, height: '1px', backgroundColor: '#ddd' }}></div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-center ms-1" style={{ flex: '1' }}>
                                            <div className="fw-bold fs-6">{train.arrivalTime}</div>
                                            <div className="text-muted small">{train.toStation}</div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary ms-3">Availability  <span className="arrow-down" /></button>
                                </div>
                            </div>
                            {/* Train Class Availability */}
                            <div className="w-100 border-top border-secondary my-1"></div>
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="row text-center gx-2 gy-2">
                                    {train.classes.map((cls, index) => (
                                        <div key={index} className="col-auto flex-shrink-0">
                                            <div
                                                className={`availability-card cursor-pointer ${cls.status === 'AVL' ? 'bg-success-subtle' : 'bg-danger-subtle'} rounded-2 p-2`}
                                                style={{
                                                    border: `1px solid ${cls.status === 'AVL' ? 'rgba(40, 167, 69, 0.2)' : 'rgba(220, 53, 69, 0.2)'}`,
                                                    backgroundColor: cls.status === 'AVL' ? 'rgba(40, 167, 69, 0.05)' : 'rgba(220, 53, 69, 0.05)', // Lighter
                                                    cursor: 'pointer', // Add this line to change the cursor on hover
                                                }}
                                                onClick={() => handleBooking(train)}
                                            >
                                                <div className="row justify-content-between align-items-center">
                                                    <div className="col">
                                                        <h5 className="mb-1">{cls.type}</h5>
                                                    </div>
                                                    <div className="col text-end">
                                                        <div className="price">{cls.price}</div>
                                                    </div>
                                                </div>
                                                <div className="availability-status mt-1">{cls.status}</div>
                                                <div className="availability-percentage">{cls.availability} available</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Last Updated */}
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="text-muted text-sm text-center mt-3">Updated: {train.lastUpdated}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TrainSearchResultList;
