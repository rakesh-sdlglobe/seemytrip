import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTraveler,
  fetchTravelers,
  removeTraveler,
} from "../store/Actions/userActions";
import {
  selectTravelers,
  selectTravelerLoading,
} from "../store/Selectors/userSelector";
import { Link, useNavigate } from "react-router-dom";

const PersonalTravel = () => {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setBirthDate] = useState("");

  const dispatch = useDispatch();
  const travelers = useSelector(selectTravelers) || [];
  const loading = useSelector(selectTravelerLoading);

  useEffect(() => {
    dispatch(fetchTravelers());
  }, [dispatch]);

  const handleAddTraveler = () => {
    const travelerData = {
      firstname,
      lastname,
      mobile,
      dob,
    };

    dispatch(addTraveler(travelerData, navigate));
  };

  const handleRemoveTraveler = (id) => {
    dispatch(removeTraveler(id, navigate));
  };

  return (
    <div className="card">
      <div className="card-header">
        <h4>
          <i className="fa-solid fa-user-group me-2" />
          Travelers Details
        </h4>
      </div>
      <div className="card-body gap-4">
        {/* Traveler Details Section */}
        {travelers.map((traveler, index) => (
          <div key={index} className="card">
            <div className="card-header px-0 border-0">
              <div className="d-flex align-items-center justify-content-start">
                <div className="avatar avatar-md me-2">
                  <img
                    src="https://placehold.co/500x500"
                    className="img-fluid circle"
                    alt=""
                  />
                </div>
                <h6 className="mb-0">
                  {traveler.firstname} {traveler.lastname}
                </h6>
              </div>
              <div className="crd-remove">
                <button
                  className="nav-link fw-medium text-primary text-sm"
                  onClick={() => handleRemoveTraveler(traveler.id)}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="card-body px-0">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={traveler.firstname}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={traveler.lastname}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Mobile No.</label>
                    <input
                      type="text"
                      className="form-control"
                      value={traveler.mobile}
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="form-group">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="text"
                      className="form-control"
                      value={traveler.dob}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <hr />

        {/* Add New Traveler Form */}
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Mobile No.</label>
          <input
            type="text"
            className="form-control"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            value={dob}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <div className="text-end">
          <button
            type="button"
            className="btn btn-md btn-primary fw-medium"
            onClick={handleAddTraveler}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add New Traveler"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalTravel;
