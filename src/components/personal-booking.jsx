import { Link } from "react-router-dom";

const PersonalBooking = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h4><i className="fa-solid fa-ticket me-2" />My Bookings</h4>
            </div>
            <div className="card-body">
                <div className="row align-items-center justify-content-start">
                    <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                        <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                            <li className="col-md-3 col-6">
                                <input type="checkbox" className="btn-check" id="allbkk" defaultChecked />
                                <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="allbkk">All
                                    Booking (24)</label>
                            </li>
                            <li className="col-md-3 col-6">
                                <input type="checkbox" className="btn-check" id="processing" />
                                <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="processing">Processing (02)</label>
                            </li>
                            <li className="col-md-3 col-6">
                                <input type="checkbox" className="btn-check" id="cancelled" />
                                <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="cancelled">Cancelled (04)</label>
                            </li>
                            <li className="col-md-3 col-6">
                                <input type="checkbox" className="btn-check" id="completed" />
                                <label className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width" htmlFor="completed">Completed (10)</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row align-items-center justify-content-start">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        {/* Single Item */}
                        <div className="card border br-dashed mb-4">
                            {/* Card header */}
                            <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                {/* Icon and Title */}
                                <div className="d-flex align-items-center">
                                    <div className="square--50 circle bg-light-purple text-purple flex-shrink-0"><i className="fa-solid fa-plane" /></div>
                                    {/* Title */}
                                    <div className="ms-2">
                                        <h6 className="card-title text-dark fs-5 mb-1">Chicago To San Francisco</h6>
                                        <ul className="nav nav-divider small">
                                            <li className="nav-item text-muted">Booking ID: BKR24530</li>
                                            <li className="nav-item ms-2"><span className="label bg-light-success text-success">Business
                                                class</span></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Button */}
                                <div className="mt-2 mt-md-0">
                                    <Link to="#" className="btn btn-md btn-light-seegreen fw-medium mb-0">Manage Booking</Link>
                                </div>
                            </div>
                            {/* Card body */}
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-sm-6 col-md-4">
                                        <span>Departure time</span>
                                        <h6 className="mb-0">Fri 12 Aug 14:00 PM</h6>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <span>Arrival time</span>
                                        <h6 className="mb-0">Fri 12 Aug 18:00 PM</h6>
                                    </div>
                                    <div className="col-md-4">
                                        <span>Booked by</span>
                                        <h6 className="mb-0">Daniel Duekaza</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Item */}
                        <div className="card border br-dashed mb-4">
                            {/* Card header */}
                            <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                {/* Icon and Title */}
                                <div className="d-flex align-items-center">
                                    <div className="square--50 circle bg-light-danger text-danger flex-shrink-0"><i className="fa-solid fa-hotel" /></div>
                                    {/* Title */}
                                    <div className="ms-2">
                                        <h6 className="card-title text-dark fs-5 mb-1">Dorsett Singapore</h6>
                                        <ul className="nav nav-divider small">
                                            <li className="nav-item text-muted">Booking ID: BKR24532</li>
                                            <li className="nav-item ms-2"><span className="text-dark fw-medium">3Day/4N</span></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Button */}
                                <div className="mt-2 mt-md-0">
                                    <Link to="#" className="btn btn-md btn-light-seegreen fw-medium mb-0">Manage Booking</Link>
                                </div>
                            </div>
                            {/* Card body */}
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-sm-6 col-md-4">
                                        <span>Check-In</span>
                                        <h6 className="mb-0">Tue 10 Sep 10:00 AM</h6>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <span>Check-Out</span>
                                        <h6 className="mb-0">Tue 14 Sep 18:00 PM</h6>
                                    </div>
                                    <div className="col-md-4">
                                        <span>Total Guest</span>
                                        <h6 className="mb-0">3 Adult . 2 Child</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Item */}
                        <div className="card border br-dashed mb-4">
                            {/* Card header */}
                            <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                {/* Icon and Title */}
                                <div className="d-flex align-items-center">
                                    <div className="square--50 circle bg-light-success text-success flex-shrink-0"><i className="fa-solid fa-car" /></div>
                                    {/* Title */}
                                    <div className="ms-2">
                                        <h6 className="card-title text-dark fs-5 mb-1">Dallas To San Denver</h6>
                                        <ul className="nav nav-divider small">
                                            <li className="nav-item text-muted">Booking ID: BKR24534</li>
                                            <li className="nav-item ms-2"><span className="text-dark fw-medium">Accord, BMW</span></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Button */}
                                <div className="mt-2 mt-md-0">
                                    <Link to="#" className="btn btn-md btn-light-seegreen fw-medium mb-0">Manage Booking</Link>
                                </div>
                            </div>
                            {/* Card body */}
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-sm-6 col-md-4">
                                        <span>Pickup address</span>
                                        <h6 className="mb-0">220K.V Jail Road</h6>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <span>Drop address</span>
                                        <h6 className="mb-0">11185 Mary Ball Rd</h6>
                                    </div>
                                    <div className="col-md-4">
                                        <span>Booked by</span>
                                        <h6 className="mb-0">Daniel Duekaza</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Item */}
                        <div className="card border br-dashed mb-4">
                            {/* Card header */}
                            <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                {/* Icon and Title */}
                                <div className="d-flex align-items-center">
                                    <div className="square--50 circle bg-light-purple text-purple flex-shrink-0"><i className="fa-solid fa-plane" /></div>
                                    {/* Title */}
                                    <div className="ms-2">
                                        <h6 className="card-title text-dark fs-5 mb-1">Chicago To Houston<label className="badge text-danger bg-light-danger fw-medium text-md ms-2">Cancelled</label></h6>
                                        <ul className="nav nav-divider small">
                                            <li className="nav-item text-muted">Booking ID: BKR24530</li>
                                            <li className="nav-item ms-2"><span className="label bg-light-success text-success">Business
                                                class</span></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Button */}
                                <div className="mt-2 mt-md-0">
                                    <Link to="#" className="btn btn-md btn-light-seegreen fw-medium mb-0">ReBooking</Link>
                                </div>
                            </div>
                            {/* Card body */}
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-sm-6 col-md-4">
                                        <span>Departure time</span>
                                        <h6 className="mb-0">Fri 12 Aug 14:00 PM</h6>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <span>Arrival time</span>
                                        <h6 className="mb-0">Fri 12 Aug 18:00 PM</h6>
                                    </div>
                                    <div className="col-md-4">
                                        <span>Booked by</span>
                                        <h6 className="mb-0">Daniel Duekaza</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Item */}
                        <div className="card border br-dashed mb-4">
                            {/* Card header */}
                            <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                {/* Icon and Title */}
                                <div className="d-flex align-items-center">
                                    <div className="square--50 circle bg-light-purple text-purple flex-shrink-0"><i className="fa-solid fa-plane" /></div>
                                    {/* Title */}
                                    <div className="ms-2">
                                        <h6 className="card-title text-dark fs-5 mb-1">Chicago To Houston<label className="badge text-info bg-light-info fw-medium text-md ms-2">Processing</label></h6>
                                        <ul className="nav nav-divider small">
                                            <li className="nav-item text-muted">Booking ID: BKR24528</li>
                                            <li className="nav-item ms-2"><span className="label bg-light-success text-success">Business
                                                class</span></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Button */}
                                <div className="mt-2 mt-md-0">
                                    <Link to="#" className="btn btn-md btn-light-seegreen fw-medium mb-0">Edit Booking</Link>
                                </div>
                            </div>
                            {/* Card body */}
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-sm-6 col-md-4">
                                        <span>Departure time</span>
                                        <h6 className="mb-0">Fri 12 Aug 14:00 PM</h6>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <span>Arrival time</span>
                                        <h6 className="mb-0">Fri 12 Aug 18:00 PM</h6>
                                    </div>
                                    <div className="col-md-4">
                                        <span>Booked by</span>
                                        <h6 className="mb-0">Daniel Duekaza</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Single Item */}
                        <div className="card border br-dashed">
                            {/* Card header */}
                            <div className="card-header nds-block border-bottom flex-column flex-md-row justify-content-between align-items-center">
                                {/* Icon and Title */}
                                <div className="d-flex align-items-center">
                                    <div className="square--50 circle bg-light-purple text-purple flex-shrink-0"><i className="fa-solid fa-plane" /></div>
                                    {/* Title */}
                                    <div className="ms-2">
                                        <h6 className="card-title text-dark fs-5 mb-1">Chicago To Houston<label className="badge text-success bg-light-success fw-medium text-md ms-2">Completed</label>
                                        </h6>
                                        <ul className="nav nav-divider small">
                                            <li className="nav-item text-muted">Booking ID: BKR24530</li>
                                            <li className="nav-item ms-2"><span className="label bg-light-success text-success">Business
                                                class</span></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Button */}
                                <div className="mt-2 mt-md-0">
                                    <Link to="#" className="btn btn-md btn-light-seegreen fw-medium mb-0">Give Feedback</Link>
                                </div>
                            </div>
                            {/* Card body */}
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-sm-6 col-md-4">
                                        <span>Departure time</span>
                                        <h6 className="mb-0">Fri 12 Aug 14:00 PM</h6>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <span>Arrival time</span>
                                        <h6 className="mb-0">Fri 12 Aug 18:00 PM</h6>
                                    </div>
                                    <div className="col-md-4">
                                        <span>Booked by</span>
                                        <h6 className="mb-0">Daniel Duekaza</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalBooking;