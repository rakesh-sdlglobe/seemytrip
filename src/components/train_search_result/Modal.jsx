import React, { useEffect, useCallback, useMemo } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectTrainsSchedule } from '../../store/Selectors/trainSelectors';

const Modal = React.memo(({ isOpen, onClose, trainNumber, selectedTrainFromStnCode, selectedTrainToStnCode }) => {
    const trainSchedule = useSelector(selectTrainsSchedule);
    
    const sourceStnCode = useMemo(() => 
        selectedTrainFromStnCode || trainSchedule?.stationFrom,
        [selectedTrainFromStnCode, trainSchedule?.stationFrom]
    );
    
    const destinationStnCode = useMemo(() => 
        selectedTrainToStnCode || trainSchedule?.stationTo,
        [selectedTrainToStnCode, trainSchedule?.stationTo]
    );

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'auto';
            };
        }
    }, [isOpen]);

    const handleOverlayClick = useCallback((event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }, [onClose]);

    // Memoized styles
    const styles = useMemo(() => ({
        modalOverlay: {
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
        },
        modalContent: {
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '15px 5px 5px',
            width: '80%',
            maxWidth: '40vw',
            position: 'relative',
            zIndex: 1001,
        },
        closeButton: {
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
        },
        tableContainer: {
            maxHeight: '70vh',
            overflowY: 'auto',
            borderTop: '1px solid #ddd',
            padding: '15px',
            marginTop: '20px',
            position: 'relative'
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '14px',
            textAlign: 'left',
            backgroundColor: '#fff',
        },
        headerRow: {
            borderBottom: '1px solid #ddd',
            fontSize: '14px',
            color: '#666',
        },
        stationDot: (isSearchStation) => ({
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: isSearchStation ? '#cd2c22' : 'white',
            border: '2px solid #cd2c22',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
        }),
        verticalLine: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: 'red',
            zIndex: 1,
        },
        searchLabel: {
            position: 'absolute',
            top: '70%',
            left: '6%',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#cd2c22',
            fontStyle: 'italic',
        }
    }), []);

    const renderStationRow = useCallback((station, index) => {
        const isSearchStation = sourceStnCode === station.stationCode || destinationStnCode === station.stationCode;
        
        return (
            <tr key={index} style={{ fontWeight: isSearchStation ? '800' : '', position: 'relative' }}>
                <td style={{ position: 'relative', paddingLeft: '30px' }}>
                    <div style={{ position: 'absolute', left: '20px', top: '0', bottom: '0', width: '2px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={styles.verticalLine} />
                        <div style={styles.stationDot(isSearchStation)} />
                    </div>
                </td>
                <td style={{ padding: '10px', position: 'relative' }}>
                    <span>{station.stationName}</span>
                    {isSearchStation && (
                        <span style={styles.searchLabel}>Your Search</span>
                    )}
                </td>
                <td style={{ padding: '10px' }}>{station.stationCode}</td>
                <td style={{ padding: '10px' }}>{station.arrivalTime || '--'}</td>
                <td style={{ padding: '10px' }}>{station.departureTime || '--'}</td>
                <td style={{ padding: '10px' }}>{station.haltTime || '--'}</td>
                <td style={{ padding: '10px' }}>{station.dayCount}</td>
                <td style={{ padding: '10px' }}>{station.distance}</td>
            </tr>
        );
    }, [sourceStnCode, destinationStnCode, styles]);

    if (!isOpen) return null;

    return (
        <div style={styles.modalOverlay} onClick={handleOverlayClick}>
            <div style={styles.modalContent}>
                <h5 style={{ textAlign: 'left', margin: '10px 0px 0px 10px' }}>
                    {`${trainSchedule?.trainName} /` || "No trains available"}
                    <span style={{ fontSize: '0.8em', color: '#888', marginLeft: '10px', marginTop: '10px' }}>
                        {trainSchedule?.trainNumber}
                    </span>
                </h5>
                <button style={styles.closeButton} onClick={onClose}>
                    <FaTimes />
                </button>

                {trainSchedule && trainSchedule.stationList?.length > 0 ? (
                    <div style={styles.tableContainer}>
                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <table style={styles.table}>
                                <thead>
                                    <tr style={styles.headerRow}>
                                        <th></th>
                                        <th style={{ paddingLeft: "10px" }}>Station</th>
                                        <th>Code</th>
                                        <th>Arrives</th>
                                        <th>Departs</th>
                                        <th>Halt (mins)</th>
                                        <th>Day</th>
                                        <th>Kms</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trainSchedule.stationList.map(renderStationRow)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                        <div style={{
                            border: '4px solid #f3f3f3',
                            borderTop: '4px solid #3498db',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            animation: 'spin 1s linear infinite'
                        }}></div>
                        <style>
                            {`
                                @keyframes spin {
                                    0% { transform: rotate(0deg); }
                                    100% { transform: rotate(360deg); }
                                }
                            `}
                        </style>
                    </div>
                )}
            </div>
        </div>
    );
});

Modal.displayName = 'Modal';

export default Modal;