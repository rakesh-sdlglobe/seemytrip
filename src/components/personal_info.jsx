import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, editUserProfile } from '../store/Actions/userActions';
import { selectGoogleUser } from '../store/Selectors/authSelectors';
import { selectUserProfile } from '../store/Selectors/userSelector';
import { Button } from 'react-bootstrap';
import { sendOTP, verifyOTP, resetPassword } from '../store/Actions/verifyEmail';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const PersonalInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userProfile = useSelector(selectUserProfile);
    const googleUser = useSelector(selectGoogleUser);

    const [isEditable, setIsEditable] = useState(false);
    const [showOTPModal, setShowOTPModal] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [otp, setOtp] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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
        dispatch(getUserProfile(navigate));
    }, [dispatch, navigate]);

    useEffect(() => {
        if (userProfile) {
            setFormData({
                fullName: `${userProfile.firstName || ''} ${userProfile.lastName || ''}`.trim(),
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
                fullName: googleUser ? `${googleUser.firstName || ''} ${googleUser.lastName || ''}`.trim() : prevFormData.fullName,
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
        const [firstName, ...lastNameParts] = formData.fullName.split(' ');
        const lastName = lastNameParts.join(' ');
        
        const userData = {
            firstName,
            lastName,
            mobile: formData.mobile.length === 10 ? formData.mobile : "",
            dob: formData.dob,
            gender: formData.gender,
            email: formData.email,
            isEmailVerified: formData.isEmailVerified,
        };
        setIsEditable(userData.isEmailVerified ? true : false);
        dispatch(editUserProfile(userData, navigate));
        setIsEditable(false);
    }, [formData, dispatch, navigate]);

    const handlePasswordChange = useCallback(() => {
        if (!newPassword || !confirmPassword) {
            alert('Please enter both password fields.');
            return;
        }
        if (newPassword !== confirmPassword) {
            alert('New passwords do not match!');
            return;
        }
        if (newPassword.length < 6) {
            alert('Password must be at least 6 characters long.');
            return;
        }
        dispatch(resetPassword(formData.email, newPassword));
    }, [newPassword, confirmPassword, formData.email, dispatch]);

    const handleMobileVerifyClick = useCallback(() => {
        if (formData.mobile) {
            alert("We will send the OTP later");
        } else if (formData.email) {
            alert("SS email");
        }
    }, [formData.mobile, formData.email]);

    const handleVerifyClick = useCallback(() => {
        setShowOTPModal(true);
        if (formData.email) {
            dispatch(sendOTP(formData.email));
        }
    }, [formData.email, dispatch]);

    const handleVerifyOTP = useCallback(async () => {
        const success = await dispatch(verifyOTP(formData.email, otp, navigate));
        if (success) {
            setShowOTPModal(false);
        }
    }, [formData.email, otp, navigate, dispatch]);

    const handleClose = useCallback(() => {
        setShowOTPModal(false);
    }, []);

    const handleDateSelect = (date) => {
        const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
        const formattedDate = localDate.toISOString().split('T')[0];
        setFormData(prev => ({ ...prev, dob: formattedDate }));
        setCalendarOpen(false);
    };

    const OTPModal = useMemo(() => {
        if (!showOTPModal) return null;
        
        return (
            <>
                <div className="modal-backdrop fade show"></div>
                <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Email Verification</h5>
                                <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="text-center mb-4">
                                    <i className="fas fa-envelope-open-text fa-3x text-primary mb-3"></i>
                                    <p className="mb-1">We've sent a verification code to:</p>
                                    <p className="fw-bold">{formData.email}</p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="otpInput" className="form-label">Enter Verification Code</label>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg text-center"
                                        id="otpInput"
                                        maxLength="6"
                                        placeholder="Enter 6-digit code"
                                        onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                                        style={{
                                            letterSpacing: otp ? '0.5rem' : 'normal'
                                        }}
                                    />
                                </div>
                                <div className="text-center mt-3">
                                    <p className="text-muted small">Didn't receive the code? 
                                        <button 
                                            className="btn btn-link p-0 ms-1" 
                                            onClick={() => dispatch(sendOTP(formData.email))}
                                        >
                                            Resend
                                        </button>
                                    </p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                                <Button 
                                    variant="primary" 
                                    onClick={handleVerifyOTP}
                                    disabled={otp.length !== 6}
                                >
                                    Verify Email
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .modal-backdrop {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        background-color: rgba(0, 0, 0, 0.5);
                        z-index: 1040;
                    }
                    .modal {
                        z-index: 1045;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        overflow-x: hidden;
                        overflow-y: auto;
                        outline: 0;
                    }
                    .modal-dialog {
                        max-width: 400px;
                        margin: 1.75rem auto;
                    }
                    .form-control-lg {
                        font-size: 1.5rem;
                        letter-spacing: 0.5rem;
                        font-weight: bold;
                    }
                    .btn-link {
                        text-decoration: none;
                    }
                    .btn-link:hover {
                        text-decoration: underline;
                    }
                    .form-control::placeholder {
                        color: #6c757d;
                        opacity: 0.8;
                        letter-spacing: normal;
                        font-size: 1rem;
                        font-weight: normal;
                    }
                    .form-control:focus::placeholder {
                        opacity: 0.6;
                    }
                `}</style>
            </>
        );
    }, [showOTPModal, handleClose, handleVerifyOTP, setOtp, formData.email, otp, dispatch]);

    const PasswordModal = useMemo(() => (
        showPasswordModal ? (
            <>
                <div className="modal-backdrop fade show"></div>
                <div className={`modal fade show`} style={{ display: 'block' }} tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Password</h5>
                                <button type="button" className="btn-close" onClick={() => setShowPasswordModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label className="form-label">Old Password</label>
                                    <input type="password" className="form-control" placeholder="*********" 
                                        value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">New Password</label>
                                    <input type="password" className="form-control" placeholder="*********" 
                                        value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="*********" 
                                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowPasswordModal(false)}>Cancel</button>
                                <button className="btn btn-primary" onClick={handlePasswordChange}>Update Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : null
    ), [showPasswordModal, oldPassword, newPassword, confirmPassword, handlePasswordChange]);

    return (
        <>
            <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h4><i className="fa-solid fa-file-invoice me-2" />Personal Information</h4>
                    <div>
                        {isEditable ? (
                            <>
                                <button className="btn btn-primary" onClick={handleSave}>
                                    <i className="fa fa-save me-2" />Save
                                </button>
                                <button className="btn btn-secondary ms-2" onClick={toggleEdit}>Cancel</button>
                            </>
                        ) : (
                            <button className="btn btn-primary" onClick={toggleEdit}>
                                <i className="fa fa-edit me-2" />Edit
                            </button>
                        )}
                    </div>
                </div>
                <div className="card-body">
                    <div className="row align-items-center justify-content-start">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group position-relative">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    disabled={!isEditable} />
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
                                    ) : formData?.email ? (
                                        <button style={{
                                            position: 'absolute',
                                            background: "none",
                                            border: "none",
                                            right: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: formData.isEmailVerified ? '#28a745' : '#dc3545',
                                            fontWeight: 'bold',
                                        }}
                                            onClick={handleVerifyClick}
                                        > Verify </button>
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
                                <select className="form-control custom-select"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    disabled={!isEditable}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                <i className="fa fa-chevron-down select-icon"></i>
                            </div>
                        </div>
                        <div className="col-12 mt-4">
                            <button 
                                className="btn btn-outline-primary" 
                                onClick={() => setShowPasswordModal(true)}
                            >
                                <i className="fa fa-key me-2" />Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {OTPModal}
            {PasswordModal}
            <style jsx>{`
                .form-group {
                    position: relative;
                    margin-bottom: 1rem;
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

                .email-verification-message {
                    margin-top: 0.25rem;
                    font-size: 0.875rem;
                }
                
                .verify-link {
                    cursor: pointer;
                    text-decoration: underline;
                }
                
                .verify-link:hover {
                    opacity: 0.8;
                }

                .modal-backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 9997;
                }
                
                .modal {
                    z-index: 9998;
                }
                
                .modal-dialog-centered {
                    display: flex;
                    align-items: center;
                    min-height: calc(100% - 1rem);
                }
                
                .modal-content {
                    border-radius: 0.5rem;
                    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
                }
                
                .btn-outline-primary {
                    border: 1px solid #007bff;
                    color: #007bff;
                    background: transparent;
                    transition: all 0.3s ease;
                }
                
                .btn-outline-primary:hover {
                    background: #007bff;
                    color: white;
                }

                .date-input {
                    padding: 25px 10px;
                    background-color: white;
                    cursor: pointer;
                    border: 1px solid #ced4da;
                    border-radius: 0.25rem;
                }

                .date-input:disabled {
                    background-color: #e0e0e0;
                    cursor: not-allowed;
                }

                .date-input:hover:not(:disabled) {
                    border-color: #80bdff;
                    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
                }

                /* Calendar Styling */
                .calendar-wrapper {
                    position: relative;
                    z-index: 1000;
                }

                .input-icon {
                    position: absolute;
                    left: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 1;
                }

                .form-control {
                    padding-left: 35px !important;
                }

                .calendar-popup {
                    position: fixed;
                    top: 83%;
                    left: 78%;
                    transform: translate(-50%, -50%);
                    width: 350px;
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
                    border-radius: 12px;
                    background: white;
                    z-index: 100000;
                    padding: 15px;
                    margin-top: 0;
                }

                .react-calendar {
                    width: 100%;
                    border: none;
                    background: white;
                    font-family: Arial, sans-serif;
                    line-height: 1.125em;
                    position: relative;
                    z-index: 100000;
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
                    max-height: 300px;
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
        </>
    );
};

export default React.memo(PersonalInfo);