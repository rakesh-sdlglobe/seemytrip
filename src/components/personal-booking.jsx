import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { myBookings } from "../store/Actions/userActions";
import { selectUserBookings } from "../store/Selectors/userSelector";

const PersonalBooking = () => {
  const dispatch = useDispatch();
  const userBooking = useSelector(selectUserBookings) || [];


  useEffect(() => {
    dispatch(myBookings());
  }, [dispatch]);


  if (!Array.isArray(userBooking) || userBooking.length === 0) {
    return (
      <div className="card">
        <div className="card-header">
          <h4>
            <i className="fa-solid fa-ticket me-2" />
            My Bookings
          </h4>
        </div>
        <div className="card-body">
          <p>No bookings available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h4>
          <i className="fa-solid fa-ticket me-2" />
          My Bookings
        </h4>
      </div>
      <div className="card-body">
        <div className="row align-items-center justify-content-start">
          <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
              <li className="col-md-3 col-6">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="allbkk"
                  defaultChecked
                />
                <label
                  className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                  htmlFor="allbkk"
                >
                  All Booking ({userBooking.length})
                </label>
              </li>
              <li className="col-md-3 col-6">
                <input type="checkbox" className="btn-check" id="processing" />
                <label
                  className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                  htmlFor="processing"
                >
                  Processing (
                  {userBooking.filter((b) => b.status === "Processing").length})
                </label>
              </li>
              <li className="col-md-3 col-6">
                <input type="checkbox" className="btn-check" id="cancelled" />
                <label
                  className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                  htmlFor="cancelled"
                >
                  Cancelled (
                  {userBooking.filter((b) => b.status === "Cancelled").length})
                </label>
              </li>
              <li className="col-md-3 col-6">
                <input type="checkbox" className="btn-check" id="completed" />
                <label
                  className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                  htmlFor="completed"
                >
                  Completed (
                  {userBooking.filter((b) => b.status === "COMPLETED").length})
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="row align-items-center justify-content-start">
          <div className="col-xl-12 col-lg-12 col-md-12">
            {userBooking.map((booking, index) => (
              <div className="card border br-dashed mb-4" key={index}>
                {/* Card header */}
                <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                  {/* Icon and Title */}
                  <div className="d-flex align-items-center">
                    <div className="square--50 circle bg-light-purple text-purple flex-shrink-0">
                      <i className="fa-solid fa-plane" />
                    </div>
                    <div className="ms-2">
                      <h6 className="card-title text-dark fs-5 mb-1">
                        {booking.from_station || "Unknown Station"} TO{" "}
                        {booking.to_station || "Unknown Station"}
                        {booking.status === "Cancelled" && (
                          <label className="badge text-danger bg-light-danger fw-medium text-md ms-2">
                            Cancelled
                          </label>
                        )}
                        {booking.status === "Processing" && (
                          <label className="badge text-info bg-light-info fw-medium text-md ms-2">
                            Processing
                          </label>
                        )}
                        {booking.status === "booked" && (
                          <label className="badge text-success bg-light-success fw-medium text-md ms-2">
                            Completed
                          </label>
                        )}
                      </h6>
                      <ul className="nav nav-divider small">
                        <li className="nav-item text-muted">
                          Booking ID: {booking.booking_id}
                        </li>
                        <li className="nav-item ms-2">
                          <span className="label bg-light-success text-success">
                            {booking.train_name || "N/A"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Button */}
                  <div className="d-flex align-items-center mt-2 mt-md-0">
                    <Link
                      to={`/bookingDetails/${booking.booking_id}`}
                      className="btn btn-sm btn-outline-primary ms-3"
                    >
                      <i className="fa-solid fa-info-circle me-2" />
                      Details
                    </Link>
                  </div>
                </div>
                {/* Card body */}
                <div className="card-body py-4">
                  <div className="row">
                    {/* Booking Date */}
                    <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                      <div className="text-muted">
                        <span className="text-dark">Departure Date:</span>
                        <br />
                        {booking.departure_date || "N/A"}
                      </div>
                    </div>
                    {/* Departure Time */}
                    <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                      <div className="text-muted">
                        <span className="text-dark">Departure Time:</span>
                        <br />
                        {booking.departure_time || "N/A"}
                      </div>
                    </div>
                    {/* Arrival Time */}
                    <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
                      <div className="text-muted">
                        <span className="text-dark">Arrival Time:</span>
                        <br />
                        {booking.arrival_time || "N/A"}
                      </div>
                    </div>
                    {/* Departure Date */}
                    <div className="col-lg-3 col-md-6 text-md-end">
                      <div className="text-muted">
                        <span className="text-dark">Arrival Date:</span>
                        <br />
                        {booking.arrival_date || "N/A"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalBooking;
