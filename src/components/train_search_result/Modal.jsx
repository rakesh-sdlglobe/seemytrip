import React, { useEffect, useCallback, useMemo } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectTrainsSchedule } from '../../store/Selectors/filterSelectors'; // Adjust the import path

const Modal = ({ isOpen, onClose, trainNumber }) => {
    const trainSchedule = useSelector(selectTrainsSchedule);
    console.log("From the model train schedule is ", trainSchedule)

    const {fromStnCode, toStnCode} = JSON.parse(localStorage.getItem('trainSearchParams')) || {};
    // Prevent scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleOverlayClick = useCallback((event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }, [onClose]);

    const modalOverlayStyle = useMemo(() => ({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(47, 46, 46, 0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    }), []);

    const modalContentStyle = useMemo(() => ({
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '15px 5px',
        width: '80%',
        maxWidth: '50vw',
        position: 'relative',
        zIndex: 1001,
    }), []);

    const closeButtonStyle = useMemo(() => ({
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
    }), []);

    const tableStyle = useMemo(() => ({
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    }), []);

    return (
        isOpen && (
            <div style={modalOverlayStyle} onClick={handleOverlayClick}>
                <div style={modalContentStyle}>
                <h5 style={{  textAlign: 'left', margin: '10px 0px 0px 10px',}}>
                    {trainSchedule.trainName} / 
                    <span style={{ fontSize: '0.8em', color: '#888', marginLeft:'10px', marginTop:'10px' }}>  {trainSchedule.trainNumber}</span>
                    </h5>
                    <button style={closeButtonStyle} onClick={onClose}>
                        <FaTimes />
                    </button>

                    {trainSchedule && trainSchedule.stationList?.length > 0 ? (
                        <div style={{
                            maxHeight: '70vh',
                            overflowY: 'auto',
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '15px 5px',
                            marginTop: '20px',
                            position: 'relative'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                {/* Table */}
                                <table style={{
                                    width: '100%',
                                    borderCollapse: 'collapse',
                                    fontSize: '14px',
                                    textAlign: 'left',
                                    backgroundColor: '#fff'
                                }}>
                                    <thead>
                                        <tr style={{
                                            // backgroundColor: '#f8f8f8',
                                            // color: '#333',
                                            borderBottom: '1px solid #ddd',
                                            fontSize:'18px',
                                            color:'#666'
                                        }}>
                                            <th></th>
                                            <th >Station</th>
                                            <th >Code</th>
                                            <th >Arrives</th>
                                            <th >Departs</th>
                                            <th >Halt(mins)</th>
                                            <th >Day</th>
                                            <th >kms</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {trainSchedule.stationList.map((station, index) => (
                                            <tr key={index} style={{
                                                // borderBottom: '1px solid #eee',
                                                fontWeight:  ( station.stationCode === fromStnCode|| station.stationCode === toStnCode ) ? '800' : '', 
                                                position: 'relative'
                                            }}>
                                                <td style={{ 
                                                    padding: '10px', 
                                                    position: 'relative',
                                                    paddingLeft: '40px' // Add space for the dot and line
                                                }}>
                                                    {/* Dot and line container */}
                                                    <div style={{
                                                        position: 'absolute',
                                                        left: '20px',
                                                        top: '0',
                                                        bottom: '0',
                                                        width: '2px',
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center'
                                                    }}>
                                                        {/* Vertical line */}
                                                        <div style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            bottom: 0,
                                                            width: '2px',
                                                            backgroundColor: 'red', 
                                                            zIndex: 1
                                                        }} />
                                                        
                                                        {/* Station dot */}
                                                        {console.log(fromStnCode, trainSchedule.stationFrom, fromStnCode===trainSchedule.stationFrom)}
                                                        <div style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            borderRadius: '50%',
                                                            backgroundColor: ( station.stationCode === fromStnCode|| station.stationCode === toStnCode ) ? '#CD2C22' : 'white', // Red if condition matches, otherwise white
                                                            border: '2px solid #CD2C22',
                                                            position: 'absolute',
                                                            top: '50%',
                                                            transform: 'translateY(-50%)',
                                                            zIndex: 2
                                                        }} />
                                                    </div>
                                                    
                                                </td>
                                                <td >{station.stationName}</td>
                                                <td >{station.stationCode}</td>
                                                <td style={{ padding: '10px', }}>{station.arrivalTime || '--'}</td>
                                                <td style={{ padding: '10px', }}>{station.departureTime || '--'}</td>
                                                <td style={{ padding: '10px', }}>{station.haltTime || '--'}</td>
                                                <td >{station.dayCount}</td>
                                                <td >{station.distance}</td>
                                            </tr>

                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <p style={{ textAlign: 'center', color: '#777', fontSize: '14px' }}>Loading schedule or no data available...</p>
                    )}
                </div>
            </div>
        )
    );
};

export default React.memo(Modal);
