import { Link } from 'react-router-dom';
import { MedicalTourismImage, DoctorImage } from '../../assets/images';

const MtResultPage = () => {
    return (
        <div className="col-xl-9 col-lg-8 col-md-12">
            <div className="row align-items-center justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <h5 className="fw-bold fs-6 mb-lg-0 mb-3">Showing 150 Results for Your Medical Treatment Packages</h5>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-12">
                    <div className="d-flex align-items-center justify-content-start justify-content-lg-end flex-wrap">
                        <div className="flsx-first me-2">
                            <div className="bg-white rounded py-2 px-3">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="mapoption" />
                                    <label className="form-check-label ms-1" htmlFor="mapoption">Map View</label>
                                </div>
                            </div>
                        </div>
                        <div className="flsx-first mt-sm-0 mt-2">
                            <ul className="nav nav-pills nav-fill p-1 small lights blukker bg-primary rounded-3 shadow-sm" id="filtersblocks" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active rounded-3" id="trending" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Top Hospitals</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link rounded-3" id="mostpopular" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Most Recommended</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link rounded-3" id="lowprice" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Best Value</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center g-4 mt-2">
                {/* Single List */}
                <div className="col-xl-12 col-lg-12 col-12">
                    <div className="card list-layout-block rounded-3 p-3">
                        <div className="row">
                            <div className="col-xl-4 col-lg-3 col-md">
                                <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                    <img className="img-fluid h-100 object-fit" src={MedicalTourismImage}  alt="Apollo Hospital" />
                                </div>
                            </div>
                            <div className="col-xl col-lg col-md">
                                <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                    <h4 className="fs-5 fw-bold mb-1">Apollo Hospital - Heart Surgery Package</h4>
                                    <ul className="row gx-2 p-0 excortio">
                                        <li className="col-auto">
                                            <p className="text-muted-2 text-md">Delhi to Mumbai</p>
                                        </li>
                                        <li className="col-auto">
                                            <p className="text-muted-2 text-md fw-bold">.</p>
                                        </li>
                                        <li className="col-auto">
                                            <p className="text-muted-2 text-md">Duration: 5 Days</p>
                                        </li>
                                        <li className="col-auto">
                                            <p className="text-muted-2 text-md fw-bold">.</p>
                                        </li>
                                        <li className="col-auto">
                                            <p className="text-muted-2 text-md"><Link to="#" className="text-primary">View Details</Link></p>
                                        </li>
                                    </ul>
                                    <div className="position-relative mt-3">
                                        <div className="fw-medium text-dark">Available Now</div>
                                        <div className="text-md text-muted">Last booked 20 minutes ago</div>
                                    </div>
                                    <div className="position-relative mt-4">
                                        <div className="d-block position-relative">
                                            <span className="label bg-light-success text-success">Free Cancellation up to 24 hours before treatment</span>
                                        </div>
                                        <div className="text-md mt-2">
                                            <p className="m-0"><Link to="#" className="text-primary">Login</Link> &amp; save ₹500 with <span className="text-primary">PayPal</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
                                <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
                                    <div className="col-auto text-start text-md-end">
                                        <div className="text-md text-dark fw-medium">Excellent</div>
                                        <div className="text-md text-muted-2">2,345 reviews</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                                    </div>
                                </div>
                                <div className="position-relative mt-auto full-width">
                                    <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                                        <span className="label bg-success text-light">15% Off</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                                        <div className="text-muted-2 fw-medium text-decoration-line-through me-2">₹1,50,000</div>
                                        <div className="text-dark fw-bold fs-3">₹1,27,500</div>
                                    </div>
                                    <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                                        <Link to="/mtbookingpage" className="btn btn-md btn-primary full-width fw-medium px-lg-4">Check Availability<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Single List */}
                {/* Offer Coupon Box */}
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="d-md-flex bg-success rounded-2 align-items-center justify-content-between px-3 py-3">
                        <div className="d-md-flex align-items-center justify-content-start">
                            <div className="flx-icon-first mb-md-0 mb-3">
                                <div className="square--60 circle bg-white"><i className="fa-solid fa-gift fs-3 text-success" /></div>
                            </div>
                            <div className="flx-caps-first ps-2">
                                <h6 className="fs-5 fw-medium text-light mb-0">Enhance Your Treatment Experience</h6>
                                <p className="text-light mb-0">Book now and earn exclusive rewards on your next medical trip. Get expert care with top doctors worldwide.</p>
                            </div>
                        </div>
                        <div className="flx-last text-md-end mt-md-0 mt-4">
                            <Link to="#" className="btn btn-whites fw-medium full-width text-dark px-xl-4">Get Started</Link>
                        </div>
                    </div>
                </div>
                {/* Single List */}
                <div className="col-xl-12 col-lg-12 col-12">
                    <div className="card list-layout-block rounded-3 p-3">
                        <div className="row">
                            <div className="col-xl-4 col-lg-3 col-md">
                                <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                    <img className="img-fluid h-100 object-fit" src={DoctorImage} alt="Expert Surgeon" />
                                </div>
                            </div>
                            <div className="col-xl col-lg col-md">
                                <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                    <h4 className="fs-5 fw-bold mb-1">Dr. John Doe - Knee Replacement Package</h4>
                                    <ul className="row gx-2 p-0 excortio">
                                        <li className="col-auto">
                                            <p className="text-muted-2 text-md">Delhi to Bengaluru</p>
                                        </li>
                                        <li className="col-auto">
                                            <p className="text-muted-2 text-md fw-bold">.</p>
                                        </li>
                                        <li className="col-auto">
                                            <p className="text-muted-2 text-md">Duration: 7 Days</p>
                                        </li>
                                        <li className="col-auto">
                                            <p className="text-muted-2 text-md fw-bold">.</p>
                                        </li>
                                        <li className="col-auto">
                                            <p className="text-muted-2 text-md"><Link to="#" className="text-primary">View Details</Link></p>
                                        </li>
                                    </ul>
                                    <div className="position-relative mt-3">
                                        <div className="fw-medium text-dark">Available Now</div>
                                        <div className="text-md text-muted">Last booked 10 minutes ago</div>
                                    </div>
                                    <div className="position-relative mt-4">
                                        <div className="d-block position-relative">
                                            <span className="label bg-light-success text-success">Free Consultation</span>
                                        </div>
                                        <div className="text-md mt-2">
                                            <p className="m-0"><Link to="#" className="text-primary">Login</Link> &amp; save ₹700 on treatment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
                                <div className="row align-items-center justify-content-start justify-content-md-end gx-2 mb-3">
                                    <div className="col-auto text-start text-md-end">
                                        <div className="text-md text-dark fw-medium">Highly Rated</div>
                                        <div className="text-md text-muted-2">1,890 reviews</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="square--40 rounded-2 bg-primary text-light">4.6</div>
                                    </div>
                                </div>
                                <div className="position-relative mt-auto full-width">
                                    <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-1">
                                        <span className="label bg-success text-light">10% Off</span>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                                        <div className="text-muted-2 fw-medium text-decoration-line-through me-2">₹3,00,000</div>
                                        <div className="text-dark fw-bold fs-3">₹2,70,000</div>
                                    </div>
                                    <div className="d-flex align-items-start align-items-md-end text-start text-md-end flex-column">
                                        <Link to="/mtbookingpage" className="btn btn-md btn-primary full-width fw-medium px-lg-4">Check Availability<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Single List */}
            </div>
        </div>
    );
};

export default MtResultPage;
