import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, editUserProfile } from '../store/Actions/userActions';
import { selectGoogleUser } from '../store/Selectors/authSelectors';
import { selectUserProfile } from '../store/Selectors/userSelector';
import { Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const PersonalInfo = () => {
    const dispatch = useDispatch();
    const userProfile = useSelector(selectUserProfile);
    const googleUser = useSelector(selectGoogleUser);

    const [isEditable, setIsEditable] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        dob: '',
        gender: 'Male',
        email: '',
        isEmailVerified: 0,
        isMobileVerified: 0,
    });
    const [calendarOpen, setCalendarOpen] = useState(false);

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    useEffect(() => {
        if (userProfile) {
            setFormData({
                fullName: `${userProfile.firstName || ''} ${userProfile.middleName || ''} ${userProfile.lastName || ''}`.trim(),
                mobile: userProfile.mobile || '',
                dob: userProfile.dob ? new Date(userProfile.dob).toISOString().split('T')[0] : null,
                gender: userProfile.gender || 'Male',
                email: userProfile.email || '',
                isEmailVerified: userProfile.isEmailVerified || 0,
                isMobileVerified: userProfile.isMobileVerified || 0,
            });
        }
    }, [userProfile]);

    useEffect(() => {
        if (googleUser || userProfile) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                fullName: googleUser ? `${googleUser.firstName || ''} ${googleUser.middleName} ${googleUser.lastName || ''}`.trim() : prevFormData.fullName,
                email: googleUser?.email || prevFormData.email,
                isEmailVerified: googleUser?.isEmailVerified || prevFormData.isEmailVerified,
            }));
        }
    }, [googleUser, userProfile]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const calendarWrapper = document.querySelector('.calendar-wrapper');
            const calendarPopup = document.querySelector('.calendar-popup');
            
            if (calendarOpen && 
                calendarWrapper && 
                calendarPopup && 
                !calendarWrapper.contains(event.target) && 
                !calendarPopup.contains(event.target)) {
                setCalendarOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [calendarOpen]);

    const toggleEdit = useCallback(() => {
        setIsEditable((prev) => !prev);
    }, []);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;

        if (name === 'mobile') {
            let formattedValue = value.replace(/[^0-9]/g, '');
            if (formattedValue.length > 10) {
                formattedValue = formattedValue.slice(0, 10);
            }
            if (formattedValue === '' || /^[6-9]/.test(formattedValue)) {
                setFormData((prevFormData) => ({ ...prevFormData, mobile: formattedValue }));
            }
        } else {
            setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        }
    }, []);

    const handleSave = useCallback(() => {
        const [firstName, ...middleLast] = formData.fullName.split(" "), 
              lastName = middleLast.pop() || "", 
              middleName = middleLast.join(" ");
        
        const userData = {
            firstName,
            middleName,
            lastName,
            mobile: formData.mobile.length === 10 ? formData.mobile : "",
            dob: formData.dob,
            gender: formData.gender,
            email: formData.email,
            isEmailVerified: formData.isEmailVerified,
        };
        
        dispatch(editUserProfile(userData));
        setIsEditable(false);
    }, [formData, dispatch]);

    const handleMobileVerifyClick = useCallback(() => {
        if (formData.mobile) {
            alert("We will send the OTP later");
        } else if (formData.email) {
            alert("SS email");
        }
    }, [formData.mobile, formData.email]);

    const handleDateSelect = (date) => {
        const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
        const formattedDate = localDate.toISOString().split('T')[0];
        setFormData(prev => ({ ...prev, dob: formattedDate }));
        setCalendarOpen(false);
    };

    return (
        <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h4><i className="fa-solid fa-file-invoice me-2" />Personal Information</h4>
                <div>
                    {isEditable ? (
                        <>
                            <Button variant="primary" onClick={handleSave}>
                                <i className="fa fa-save me-2" />Save
                            </Button>
                            <Button variant="secondary" className="ms-2" onClick={toggleEdit}>
                                Cancel
                            </Button>
                        </>
                    ) : (
                        <Button variant="primary" onClick={toggleEdit}>
                            <i className="fa fa-edit me-2" />Edit
                        </Button>
                    )}
                </div>
            </div>
            <div className="card-body">
                <div className="row align-items-center justify-content-start">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group position-relative">
                            <label className="form-label">Full Name</label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                disabled={!isEditable} 
                            />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group position-relative">
                            <label className="form-label">Email ID</label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={{
                                        backgroundColor: formData.isEmailVerified && isEditable ? "#e0e0e0" : formData.isEmailVerified === 0 && isEditable ? "white" : "#e0e0e0",
                                        paddingRight: '50px',
                                    }}
                                    disabled={formData.isEmailVerified || !isEditable}
                                />
                                {formData?.isEmailVerified ? (
                                    <span
                                        style={{
                                            position: 'absolute',
                                            right: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            color: '#28a745',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <span
                                            style={{
                                                display: 'inline-flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '20px',
                                                height: '20px',
                                                borderRadius: '50%',
                                                backgroundColor: '#28a745',
                                                color: 'white',
                                                fontSize: '14px',
                                            }}
                                        >
                                            ✓
                                        </span>
                                        Verified
                                    </span>
                                ) : ""
                            }
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group position-relative">
                            <label className="form-label">Mobile</label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="mobile"
                                    value={formData.mobile}
                                    pattern="[0-9]*"
                                    inputMode="numeric"
                                    disabled={!isEditable}
                                    onChange={handleChange}
                                    style={{
                                        backgroundColor: !isEditable ? "#e0e0e0" : "white",
                                        paddingRight: "70px",
                                    }}
                                />
                                <button
                                    style={{
                                        position: 'absolute',
                                        background: "none",
                                        border: "none",
                                        right: '10px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: formData.isMobileVerified ? '#28a745' : '#dc3545',
                                        fontWeight: 'bold',
                                    }}
                                    onClick={handleMobileVerifyClick}
                                >
                                    {formData.isMobileVerified === 1 ? 'Verified' : (formData.mobile && formData.mobile.length === 10) ? 'Verify' : null}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group position-relative">
                            <label className="form-label">Date of Birth</label>
                            <div className="calendar-wrapper">
                                <input
                                    type="text"
                                    readOnly
                                    className="form-control"
                                    value={formData.dob ? new Date(formData.dob).toLocaleDateString('en-GB') : ''}
                                    onClick={() => isEditable && setCalendarOpen(!calendarOpen)}
                                    placeholder="Select Date"
                                    style={{
                                        backgroundColor: !isEditable ? "#e0e0e0" : "white",
                                        cursor: isEditable ? 'pointer' : 'not-allowed'
                                    }}
                                />
                                {calendarOpen && (
                                    <div className="calendar-popup">
                                        <Calendar
                                            onChange={handleDateSelect}
                                            value={formData.dob ? new Date(formData.dob) : null}
                                            maxDate={new Date()}
                                            minDetail="decade"
                                            showNeighboringMonth={true}
                                            showFixedNumberOfWeeks={false}
                                        />
                                    </div>
                                )}
                                <i className="fa fa-calendar" style={{ color: '#666', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group position-relative">
                            <label className="form-label">Gender</label>
                            <select 
                                className="form-control custom-select"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                disabled={!isEditable}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .form-group {
                    position: static !important;
                }

                .col-xl-6, .col-lg-6, .col-md-6 {
                    position: static !important;
                }

                .row {
                    position: static !important;
                }

                .card-body {
                    position: relative;
                }

                .form-control {
                    padding-right: 1rem;
                }

                .verify-button {
                    position: absolute;
                    right: 0;
                    top: 65%;
                    transform: translateY(-50%);
                    z-index: 1;
                }

                .btn-outline-secondary {
                    border-color: #6c757d;
                    color: #6c757d;
                }

                .btn-outline-secondary:hover {
                    background-color: #6c757d;
                    color: #fff;
                }
                    
                .select-icon {
                    position: absolute;
                    right: 0.75rem;
                    top: 64%;
                    transform: translateY(-50%);
                    pointer-events: none;
                    font-size: 1rem;
                    color: #6c757d;
                }
                .verify-tick {
                    position: absolute;
                    right: 0;
                    top: 65%;
                    transform: translateY(-50%);
                    font-size: 1.2rem;
                }

                /* Calendar Styling */
                .calendar-wrapper {
                    position: relative;
                    z-index: 9999;
                }

                .calendar-popup {
                    position: absolute;
                    top: calc(100% + 5px);
                    left: 0;
                    width: 350px;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
                    border-radius: 12px;
                    background: white;
                    z-index: 99999;
                    padding: 15px;
                }

                .react-calendar {
                    width: 100%;
                    border: none;
                    background: white;
                    font-family: Arial, sans-serif;
                    line-height: 1.125em;
                    position: relative;
                    z-index: 99999;
                }

                .react-calendar__navigation {
                    margin-bottom: 20px;
                }

                .react-calendar__navigation button {
                    min-width: 44px;
                    background: none;
                    font-size: 16px;
                    padding: 8px;
                    border-radius: 8px;
                }

                .react-calendar__navigation button:enabled:hover,
                .react-calendar__navigation button:enabled:focus {
                    background-color: #f8f8f8;
                }

                .react-calendar__month-view__weekdays {
                    text-align: center;
                    text-transform: uppercase;
                    font-weight: bold;
                    font-size: 0.9em;
                    padding: 8px 0;
                }

                .react-calendar__month-view__days__day {
                    padding: 12px 8px !important;
                    font-size: 14px;
                }

                .react-calendar__tile {
                    border-radius: 8px;
                    padding: 12px;
                    margin: 4px;
                    font-weight: 500;
                }

                .react-calendar__tile:disabled {
                    background: transparent !important;
                    color: #ccc !important;
                    cursor: not-allowed;
                    opacity: 0.5;
                }

                .react-calendar__tile--active {
                    background: #cd2c22 !important;
                    color: white;
                }

                .react-calendar__tile--now {
                    background: #ffe8e8;
                }

                .react-calendar__month-view__days__day--weekend {
                    color: #cd2c22;
                }

                .react-calendar__month-view__days__day--neighboringMonth {
                    color: #969696;
                }

                @media (max-width: 768px) {
                    .calendar-popup {
                        width: 90%;
                        max-width: 320px;
                    }
                }

                .react-calendar__viewContainer {
                    max-height: none;
                    overflow: visible;
                }

                .react-calendar__month-view__days {
                    display: grid !important;
                    grid-template-columns: repeat(7, 1fr);
                }

                .react-calendar__month-view__days__day {
                    aspect-ratio: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 8px !important;
                }
            `}</style>
        </div>
    );
};

export default React.memo(PersonalInfo);