import React from 'react';
import { Link } from 'react-router-dom';
import trainData from './train_data'; // Adjust the import path as needed

const TrainSearchResultList = () => {
    return (
        <div className="row align-items-center g-4 mt-2">
            {trainData.map(train => (
                <div key={train.id} className="col-xl-12 col-lg-12 col-md-12">
                    <div className="train-availability-card bg-white rounded-3 p-3">
                        <div className="row gy-4 align-items-center justify-content-between">
                            {/* Train Info Header */}
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="train-name">
                                        <h5 className="mb-1">{train.name}</h5>
                                        <div className="text-muted">Runs on: {train.runsOn}</div>
                                    </div>
                                    <Link to="/booking-page">
                                        <button className="btn btn-primary">Book Now</button>
                                    </Link>
                                </div>
                            </div>
                            {/* Train Details */}
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <div className="text-dark fw-bold">{train.departure}</div>
                                        <div className="text-muted text-sm fw-medium">{train.departureStation}</div>
                                    </div>
                                    <div className="col text-center">
                                        <div className="train-timing">
                                            <div className="text-muted text-sm">{train.duration}</div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="text-dark fw-bold">{train.arrival}</div>
                                        <div className="text-muted text-sm fw-medium">{train.arrivalStation}</div>
                                    </div>
                                </div>
                            </div>
                            {/* Train Class Availability */}
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="row text-center gx-2 gy-2">
                                    {train.classes.map((cls, index) => (
                                        <div key={index} className="col">
                                            <div className={`availability-card ${cls.status === 'AVL' ? 'bg-success-subtle' : 'bg-danger-subtle bg-opacity-50'} rounded-2 p-2`}>
                                                <h5 className="mb-1">{cls.type}</h5>
                                                <div className="price">{cls.price}</div>
                                                <div className="availability-status">{cls.status}</div>
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
                            <h6 className="fs-5 fw-medium text-light mb-0">Start Exploring The World</h6>
                            <p className="text-light mb-0">Book Flights Effortlessly and Earn $50+ for each booking with Booking.com</p>
                        </div>
                    </div>
                    <div className="text-md-end mt-md-0 mt-4">
                        <button type="button" className="btn btn-white fw-medium full-width text-dark px-xl-4">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainSearchResultList;
