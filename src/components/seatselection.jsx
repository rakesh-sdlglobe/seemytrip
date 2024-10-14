import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';

const SeatSelection = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [selectedBoardingStation, setSelectedBoardingStation] = useState('');
    const [selectedDroppingStation, setSelectedDroppingStation] = useState('');

    const upperDeckSeats = [
        { id: 1, number: 'U1', available: true },
        { id: 2, number: 'U2', available: false },
        { id: 3, number: 'U3', available: true },
        { id: 4, number: 'U4', available: true },
        { id: 5, number: 'U5', available: true },
        { id: 6, number: 'U6', available: false },
        { id: 7, number: 'U7', available: true },
        { id: 8, number: 'U8', available: true },
        { id: 9, number: 'U9', available: true },
        { id: 10, number: 'U10', available: true },
    ];

    const lowerDeckSeats = [
        { id: 11, number: 'L1', available: true },
        { id: 12, number: 'L2', available: false },
        { id: 13, number: 'L3', available: true },
        { id: 14, number: 'L4', available: true },
        { id: 15, number: 'L5', available: true },
        { id: 16, number: 'L6', available: false },
        { id: 17, number: 'L7', available: true },
        { id: 18, number: 'L8', available: true },
        { id: 19, number: 'L9', available: true },
        { id: 20, number: 'L10', available: true },
    ];

    const stations = ['Delhi', 'Agra', 'Jaipur', 'Lucknow'];

    const toggleSeatSelection = (seat) => {
        if (seat.available) {
            setSelectedSeats((prev) =>
                prev.includes(seat.number)
                    ? prev.filter((s) => s !== seat.number)
                    : [...prev, seat.number]
            );
        }
    };

    const ticketPrice = selectedSeats.length * 500;

    return (
        <div className="container mt-5 seat-selection-container">
            <style>{`
                .seat-selection-container {
                    background: linear-gradient(to right, #f3f4f6, #f9fafb);
                    border-radius: 15px;
                    padding: 20px;
                }

                .deck-container {
                    margin-bottom: 30px;
                }

                .deck-title {
                    font-weight: bold;
                    font-size: 22px;
                    margin-bottom: 20px;
                    color: #333;
                }

                .seat-container {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 15px;
                    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
                }

                .seat-grid {
                    display: grid;
                    grid-template-columns: repeat(10, 1fr);
                    gap: 5px;
                    justify-content: center;
                }

                .seat-btn {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    padding: 10px;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    color: #fff;
                    height: 50px;
                }

                .seat-btn div {
                    font-weight: 600;
                    margin-top: 5px;
                }

                .seat-available {
                    background-color: #28a745;
                }

                .seat-selected {
                    background-color: #ffc107;
                    color: #333;
                }

                .seat-unavailable {
                    background-color: #6c757d;
                    cursor: not-allowed;
                }

                .seat-btn:hover {
                    transform: scale(1.05);
                    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
                }

                .boarding-container {
                    background-color: #f8f9fa;
                    padding: 20px;
                    border-radius: 15px;
                    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
                    margin-top: 30px;
                }

                /* Flexbox for both stations in one row */
                .station-selection {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .station-block {
                    display: flex;
                    flex-direction: column;
                    width: 48%; /* Adjust width for both dropdowns to fit */
                }

                .station-title {
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                select.form-select {
                    padding: 10px;
                    font-size: 16px;
                    // border: 2px solid #007bff;
                    border-radius: 5px;
                    transition: border-color 0.3s ease;
                }

                select.form-select:focus {
                    border-color: #0056b3;
                    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
                }

                .total-price {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                button.btn-proceed {
                    background-color: #007bff;
                    border: none;
                    color: #fff;
                    border-radius: 5px;
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                button.btn-proceed:hover {
                    background-color: #0056b3;
                }
            `}</style>

            {/* Upper Deck Section */}
            <div className="border rounded p-4 mb-4 shadow seat-container deck-container">
                <h2 className="text-center mb-4 deck-title">Upper Deck</h2>

                <div className="seat-grid">
                    {upperDeckSeats.map((seat) => (
                        <div className="seat-item" key={seat.id}>
                            <button
                                className={`seat-btn ${
                                    seat.available
                                        ? selectedSeats.includes(seat.number)
                                            ? 'seat-selected'
                                            : 'seat-available'
                                        : 'seat-unavailable'
                                }`}
                                onClick={() => toggleSeatSelection(seat)}
                                disabled={!seat.available}
                            >
                                <FontAwesomeIcon icon={faCouch} />
                                <div>{seat.number}</div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lower Deck Section */}
            <div className="border rounded p-4 mb-4 shadow seat-container deck-container">
                <h2 className="text-center mb-4 deck-title">Lower Deck</h2>

                <div className="seat-grid">
                    {lowerDeckSeats.map((seat) => (
                        <div className="seat-item" key={seat.id}>
                            <button
                                className={`seat-btn ${
                                    seat.available
                                        ? selectedSeats.includes(seat.number)
                                            ? 'seat-selected'
                                            : 'seat-available'
                                        : 'seat-unavailable'
                                }`}
                                onClick={() => toggleSeatSelection(seat)}
                                disabled={!seat.available}
                            >
                                <FontAwesomeIcon icon={faCouch} />
                                <div>{seat.number}</div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="border rounded p-4 shadow-sm boarding-container">
                {/* Boarding and Dropping Station Selection */}
                <div className="station-selection">
                    <div className="station-block">
                        <h5 className="station-title">Boarding Station</h5>
                        <select
                            className="form-select"
                            value={selectedBoardingStation}
                            onChange={(e) => setSelectedBoardingStation(e.target.value)}
                        >
                            <option value="">-- Select Boarding Station --</option>
                            {stations.map((station, index) => (
                                <option key={index} value={station}>
                                    {station}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="station-block">
                        <h5 className="station-title">Dropping Station</h5>
                        <select
                            className="form-select"
                            value={selectedDroppingStation}
                            onChange={(e) => setSelectedDroppingStation(e.target.value)}
                        >
                            <option value="">-- Select Dropping Station --</option>
                            {stations.map((station, index) => (
                                <option key={index} value={station}>
                                    {station}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Ticket Price and Proceed Button */}
                <div className="total-price">
                    Total Price: ₹{ticketPrice}
                </div>
                <button className="btn btn-primary">Proceed to Payment</button>
            </div>
        </div>
    );
};

export default SeatSelection;
