import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, editUserProfile } from '../store/Actions/userActions';
import { selectGoogleUser } from '../store/Selectors/authSelectors';
import { selectUserProfile } from '../store/Selectors/userSelector';
import { Button } from 'react-bootstrap';
import { sendOTP, verifyOTP, resetPassword } from '../store/Actions/verifyEmail';

const PersonalInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userProfile = useSelector(selectUserProfile);
    const googleUser = useSelector(selectGoogleUser);

    const [isEditable, setIsEditable] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [otp, setOtp] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        dob: '',
        gender: 'Male',
        email: '',
        isEmailVerified: 0,
        isMobileVerified: 0,
    });

    useEffect(() => {
        dispatch(getUserProfile(navigate));
    }, [dispatch, navigate]);

    useEffect(() => {
        if (userProfile) {
            setFormData({
                firstName: userProfile.firstName || '',
                lastName: userProfile.lastName || '',
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
                firstName: googleUser?.firstName || prevFormData.firstName,
                lastName: googleUser?.lastName || prevFormData.lastName,
                email: googleUser?.email || prevFormData.email,
                isEmailVerified: googleUser?.isEmailVerified || prevFormData.isEmailVerified,
            }));
        }
    }, [googleUser, userProfile]);

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
        const userData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
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
        setShowModal(true);
        if (formData.email) {
            dispatch(sendOTP(formData.email));
        }
    }, [formData.email, dispatch]);

    const handleVerifyOTP = useCallback(async () => {
        const success = await dispatch(verifyOTP(formData.email, otp, navigate));
        if (success) {
            setShowModal(false);
        }
    }, [formData.email, otp, navigate, dispatch]);

    const handleClose = useCallback(() => {
        setShowModal(false);
    }, []);

    const OTPModal = useMemo(() => ({ showModal, handleClose, handleVerifyOTP, setOtp }) => (
        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="otpModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="otpModalLabel">Enter OTP</h5>
                        <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="otpInput">OTP</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="otpInput"
                                    placeholder="Enter OTP"
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                            <div className="modal-footer">
                                <Button variant="secondary" onClick={handleClose}>Close</Button>
                                <Button variant="primary" onClick={handleVerifyOTP}>Verify OTP</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    ), [showModal, handleClose, handleVerifyOTP, setOtp]);

    return (
        <>
            <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h4><i className="fa-solid fa-file-invoice me-2" />Personal Information</h4>
                    <div>
                        {isEditable ? (
                            <>
                                <button className="btn btn-primary" onClick={handleSave}>
                                    <i className="fa fa-save me-2" />
                                    Save
                                </button>
                                <button className="btn btn-secondary ms-2" onClick={toggleEdit}>
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button className="btn btn-primary" onClick={toggleEdit}>
                                <i className="fa fa-edit me-2" />
                                Edit
                            </button>
                        )}
                    </div>
                </div>
                <div className="card-body">
                    <div className="row align-items-center justify-content-start">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group position-relative">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    disabled={!isEditable} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="form-group position-relative">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control"
                                    name="lastName"
                                    value={formData.lastName}
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
                                <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} disabled={!isEditable} />
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
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h4><i className="fa-solid fa-lock me-2" />Update Password</h4>
                </div>
                <div className="card-body">
                    <div className="row align-items-center justify-content-start">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                                <label className="form-label">Old Password</label>
                                <input type="password" className="form-control" placeholder="*********" value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)} autoComplete='current-password' />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                                <label className="form-label">New Password</label>
                                <input type="password" className="form-control" placeholder="*********" value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)} autoComplete='current-password' />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="form-group">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" placeholder="*********" value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} autoComplete='current-password' />
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="text-end">
                                <Link to="#" className="btn btn-md btn-primary mb-0" onClick={handlePasswordChange}>Change Password</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            `}</style>
            {OTPModal}
        </>
    );
};

export default React.memo(PersonalInfo);