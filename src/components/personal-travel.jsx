import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTraveler,
  fetchTravelers,
  removeTraveler,
  updateTraveler,
  getUserProfile, // Add this import
} from "../store/Actions/userActions";
import {
  selectTravelers,
  selectTravelerLoading,
  selectUserProfile, // Add this import
} from "../store/Selectors/userSelector";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonalTravel = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setBirthDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const travelers = useSelector(selectTravelers) || [];
  console.log('🔍 Travelers data from Redux:', travelers);
  console.log('🔍 Travelers data type:', typeof travelers);
  console.log('🔍 Travelers array length:', travelers.length);
  
  if (travelers.length > 0) {
    console.log('🔍 First traveler object:', travelers[0]);
    console.log('🔍 First traveler keys:', Object.keys(travelers[0]));
  }
  
  const loading = useSelector(selectTravelerLoading);
  const userProfile = useSelector(selectUserProfile);
  
  console.log('🔍 User profile data:', userProfile);
  console.log('🔍 Loading state:', loading);
  
  useEffect(() => {
    // Fetch both travelers and user profile
    dispatch(fetchTravelers());
    dispatch(getUserProfile());
  }, [dispatch]);

  const handleAddTraveler = () => {
    if (!firstname || !mobile || !dob) {
      toast.error("Please fill all required fields");
      return;
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    const travelerData = {
      firstname,
      mobile,
      dob,
    };

    if (isEditing) {
      dispatch(addTraveler({ ...travelerData, passengerId: editingId }));
      toast.success("Traveler updated successfully!");
      setIsEditing(false);
      setEditingId(null);
    } else {
      dispatch(addTraveler(travelerData));
      toast.success("Traveler added successfully!");
    }
    
    resetForm();
    setShowModal(false);
  };

  const resetForm = () => {
    setFirstName("");
    setMobile("");
    setBirthDate("");
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (traveler) => {
    console.log('🔍 Editing traveler:', traveler);
    console.log('🔍 Traveler ID:', traveler.id);
    console.log('🔍 Traveler firstname:', traveler.firstname);
    console.log('🔍 Traveler mobile:', traveler.mobile);
    console.log('🔍 Traveler dob:', traveler.dob);
    
    setIsEditing(true);
    setEditingId(traveler.id);
    setFirstName(traveler.firstname || '');
    setMobile(traveler.mobile || '');
    setBirthDate(formatDOB(traveler.dob));
    setShowModal(true);
    toast.info("Editing traveler details");
  };

  const handleRemoveTraveler = (id) => {
    console.log('🔍 Removing traveler with ID:', id);
    if (window.confirm('Are you sure you want to remove this traveler?')) {
      dispatch(removeTraveler(id));
      toast.success("Traveler removed successfully");
      
      if (editingId === id) {
        resetForm();
      }
    }
  };

  const formatDOB = (dob) => {
    console.log('🔍 Formatting DOB:', dob);
    if (!dob) return "";
    // Handles both "YYYY-MM-DD" and "YYYY-MM-DDTHH:mm:ss.sssZ"
    const formatted = dob.split("T")[0];
    console.log('🔍 Formatted DOB:', formatted);
    return formatted;
  };

  return (
    <div className="travelers-container">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {/* Saved Travelers Card */}
      <div className="card mb-4">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h4>
            <i className="fa-solid fa-users me-2" />
            Travelers
            {userProfile && (
              <small className="text-muted ms-2">
                ({userProfile.firstName} {userProfile.lastName})
              </small>
            )}
          </h4>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            <i className="fa fa-plus me-2" />
            Add Traveler
          </button>
        </div>
        <div className="card-body">
          {travelers.length === 0 ? (
            <div className="text-center py-4">
              <i className="fa-solid fa-users fa-3x text-muted mb-3"></i>
              <p className="text-muted">No travelers added yet</p>
            </div>
          ) : (
            <div className="row g-3">
              {travelers.map((traveler, index) => (
                <div key={index} className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="d-flex align-items-center">
                          <div className="avatar-circle me-3">
                            {(traveler.firstname?.[0] || '')}
                          </div>
                          <div>
                            <h5 className="mb-1">
                              {traveler.firstname}
                            </h5>
                            <p className="text-muted small mb-0">
                              <i className="fa-solid fa-phone me-2"></i>
                              {traveler.mobile || 'N/A'}
                            </p>
                            <p className="text-muted small mb-0">
                              <i className="fa-solid fa-calendar me-2"></i>
                              {traveler.dob ? formatDOB(traveler.dob) : 'N/A'}
                            </p>
                          </div>
                        </div>
                        <div className="action-buttons">
                          <button 
                            className="btn btn-link text-primary me-2"
                            onClick={() => handleEdit(traveler)}
                          >
                            <i className="fa-solid fa-edit"></i>
                          </button>
                          <button 
                            className="btn btn-link text-danger"
                            onClick={() => handleRemoveTraveler(traveler.id)}
                          >
                            <i className="fa-solid fa-trash-can"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Traveler Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isEditing ? 'Edit Traveler' : 'Add New Traveler'}
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>First Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Mobile No.*</label>
                      <input
                        type="text"
                        className="form-control"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Date of Birth*</label>
                      <input
                        type="date"
                        className="form-control"
                        value={dob}
                        onChange={(e) => setBirthDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setShowModal(false);
                    resetForm();
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddTraveler}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2"></span>
                      {isEditing ? 'Updating...' : 'Adding...'}
                    </>
                  ) : (
                    isEditing ? 'Update Traveler' : 'Add Traveler'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .travelers-container {
          margin-bottom: 2rem;
        }

        .avatar-circle {
          width: 40px;
          height: 40px;
          background: #ffe6e6;
          color: #cd2c22;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .card {
          border: none;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
          transition: all 0.3s ease;
        }

        .card:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }

        .btn-primary {
          background-color: #cd2c22;
          border-color: #cd2c22;
        }

        .btn-primary:hover {
          background-color: #b31b1b;
          border-color: #b31b1b;
        }

        .text-primary {
          color: #cd2c22 !important;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1050;
        }

        .modal-dialog {
          width: 100%;
          max-width: 500px;
          margin: 1.75rem auto;
        }

        .modal-content {
          background-color: #fff;
          border-radius: 0.3rem;
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        }

        .modal-header {
          padding: 1rem;
          border-bottom: 1px solid #dee2e6;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-body {
          padding: 1rem;
        }

        .modal-footer {
          padding: 1rem;
          border-top: 1px solid #dee2e6;
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default PersonalTravel;
