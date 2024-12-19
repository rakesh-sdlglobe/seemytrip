import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTraveler,
  fetchTravelers,
  removeTraveler,
  updateTraveler,
} from "../store/Actions/userActions";
import {
  selectTravelers,
  selectTravelerLoading,
} from "../store/Selectors/userSelector";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonalTravel = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setBirthDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const dispatch = useDispatch();
  const travelers = useSelector(selectTravelers) || [];
  const loading = useSelector(selectTravelerLoading);

  useEffect(() => {
    dispatch(fetchTravelers());
  }, [dispatch]);

  const handleAddTraveler = () => {
    if (!firstname || !lastname || !mobile || !dob) {
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
      lastname,
      mobile,
      dob,
    };

    if (isEditing) {
      dispatch(updateTraveler({ ...travelerData, id: editingId }));
      toast.success("Traveler updated successfully!");
      setIsEditing(false);
      setEditingId(null);
    } else {
      dispatch(addTraveler(travelerData));
      toast.success("Traveler added successfully!");
    }
    
    setFirstName("");
    setLastName("");
    setMobile("");
    setBirthDate("");
  };

  const handleEdit = (traveler) => {
    setIsEditing(true);
    setEditingId(traveler.id);
    setFirstName(traveler.firstname);
    setLastName(traveler.lastname);
    setMobile(traveler.mobile);
    setBirthDate(formatDOB(traveler.dob));
    toast.info("Editing traveler details");
  };

  const handleRemoveTraveler = (id) => {
    if (window.confirm('Are you sure you want to remove this traveler?')) {
      dispatch(removeTraveler(id));
      toast.success("Traveler removed successfully");
      
      if (editingId === id) {
        setIsEditing(false);
        setEditingId(null);
        setFirstName("");
        setLastName("");
        setMobile("");
        setBirthDate("");
      }
    }
  };

  const formatDOB = (dob) => {
    if (!dob) return "";
    return dob.split("T")[0];
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

      {/* Add Traveler Card */}
      <div className="card mb-4">
        <div className="card-header">
          <h4 className="mb-0">
            <i className="fa-solid fa-user-plus me-2 text-primary"></i>
            {isEditing ? 'Edit Traveler' : 'Add New Traveler'}
          </h4>
        </div>
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
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
            <div className="col-md-6">
              <div className="form-group">
                <label>Last Name*</label>
                <input
                  type="text"
                  className="form-control"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
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
            <div className="col-md-6">
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
            <div className="col-12 text-end">
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

      {/* Saved Travelers Card */}
      <div className="card">
        <div className="card-header">
          <h4 className="mb-0">
            <i className="fa-solid fa-users me-2 text-primary"></i>
            Saved Travelers
          </h4>
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
                            {(traveler.firstname?.[0] || '') + (traveler.lastname?.[0] || '')}
                          </div>
                          <div>
                            <h5 className="mb-1">
                              {traveler.firstname} {traveler.lastname}
                            </h5>
                            <p className="text-muted small mb-0">
                              <i className="fa-solid fa-phone me-2"></i>
                              {traveler.mobile}
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
                      <div className="border-top pt-3">
                        <div className="row">
                          <div className="col-6">
                            <small className="text-muted d-block">Date of Birth</small>
                            <span>{formatDOB(traveler.dob)}</span>
                          </div>
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

      {isEditing && (
        <button
          className="btn btn-secondary me-2"
          onClick={() => {
            setIsEditing(false);
            setEditingId(null);
            setFirstName("");
            setLastName("");
            setMobile("");
            setBirthDate("");
          }}
        >
          Cancel
        </button>
      )}

      <style jsx>{`
        .travelers-container {
          margin-bottom: 2rem;
        }

        .avatar-circle {
          width: 40px;
          height: 40px;
          background: #ffe6e6;
          color: #d20000;
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
          background-color: #d20000;
          border-color: #d20000;
        }

        .btn-primary:hover {
          background-color: #b31b1b;
          border-color: #b31b1b;
        }

        .text-primary {
          color: #d20000 !important;
        }
      `}</style>
    </div>
  );
};

export default PersonalTravel;
