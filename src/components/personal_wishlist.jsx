import { Link } from "react-router-dom";

const PersonalWishList = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h4><i className="fa-solid fa-shield-heart me-2" />My Wishlist</h4>
            </div>
            <div className="card-body">
                <div className="card list-layout-block border rounded-3 p-3 mb-4">
                    <div className="row">
                        <div className="col-xl-4 col-lg-3 col-md">
                            <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                <img className="img-fluid h-100 object-fit" src="https://placehold.co/1200x800" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl col-lg col-md">
                            <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                <div className="d-flex align-items-center justify-content-start">
                                    <div className="d-inline-block">
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                    </div>
                                </div>
                                <h4 className="fs-5 fw-bold mb-1">Hotel Chancellor@Orchard</h4>
                                <ul className="row g-2 p-0">
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md">Waterloo and Southwark</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md fw-bold">.</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md">9.8 km from Delhi Airport</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md fw-bold">.</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md"><Link to="#" className="text-primary">Show on Map</Link></p>
                                    </li>
                                </ul>
                                <div className="detail ellipsis-container mt-3">
                                    <span className="ellipsis">Parking</span>
                                    <span className="ellipsis">WiFi</span>
                                    <span className="ellipsis">Eating</span>
                                    <span className="ellipsis">Cooling</span>
                                    <span className="ellipsis">Pet</span>
                                </div>
                                <div className="position-relative mt-3">
                                    <div className="fw-medium text-dark">Standard Twin Double Room</div>
                                    <div className="text-md text-muted">Last booed 25min ago</div>
                                </div>
                                <div className="position-relative mt-4">
                                    <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                        Cancellation, till 1 hour of Pick up</span></div>
                                    <div className="text-md">
                                        <p className="m-0">Room type: Standard King Room <Link className="text-primary">Change Room</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card list-layout-block border rounded-3 p-3 mb-4">
                    <div className="row">
                        <div className="col-xl-4 col-lg-3 col-md">
                            <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                <img className="img-fluid h-100 object-fit" src="https://placehold.co/1200x800" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl col-lg col-md">
                            <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                <div className="d-flex align-items-center justify-content-start">
                                    <div className="d-inline-block">
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                    </div>
                                </div>
                                <h4 className="fs-5 fw-bold mb-1">Hotel Chancellor@Orchard</h4>
                                <ul className="row g-2 p-0">
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md">Waterloo and Southwark</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md fw-bold">.</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md">9.8 km from Delhi Airport</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md fw-bold">.</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md"><Link to="#" className="text-primary">Show on Map</Link></p>
                                    </li>
                                </ul>
                                <div className="detail ellipsis-container mt-3">
                                    <span className="ellipsis">Parking</span>
                                    <span className="ellipsis">WiFi</span>
                                    <span className="ellipsis">Eating</span>
                                    <span className="ellipsis">Cooling</span>
                                    <span className="ellipsis">Pet</span>
                                </div>
                                <div className="position-relative mt-3">
                                    <div className="fw-medium text-dark">Standard Twin Double Room</div>
                                    <div className="text-md text-muted">Last booed 25min ago</div>
                                </div>
                                <div className="position-relative mt-4">
                                    <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                        Cancellation, till 1 hour of Pick up</span></div>
                                    <div className="text-md">
                                        <p className="m-0">Room type: Standard King Room <Link className="text-primary">Change Room</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card list-layout-block border rounded-3 p-3 mb-4">
                    <div className="row">
                        <div className="col-xl-4 col-lg-3 col-md">
                            <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                <img className="img-fluid h-100 object-fit" src="https://placehold.co/1200x800" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl col-lg col-md">
                            <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                <div className="d-flex align-items-center justify-content-start">
                                    <div className="d-inline-block">
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                    </div>
                                </div>
                                <h4 className="fs-5 fw-bold mb-1">Hotel Chancellor@Orchard</h4>
                                <ul className="row g-2 p-0">
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md">Waterloo and Southwark</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md fw-bold">.</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md">9.8 km from Delhi Airport</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md fw-bold">.</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md"><Link to="#" className="text-primary">Show on Map</Link></p>
                                    </li>
                                </ul>
                                <div className="detail ellipsis-container mt-3">
                                    <span className="ellipsis">Parking</span>
                                    <span className="ellipsis">WiFi</span>
                                    <span className="ellipsis">Eating</span>
                                    <span className="ellipsis">Cooling</span>
                                    <span className="ellipsis">Pet</span>
                                </div>
                                <div className="position-relative mt-3">
                                    <div className="fw-medium text-dark">Standard Twin Double Room</div>
                                    <div className="text-md text-muted">Last booed 25min ago</div>
                                </div>
                                <div className="position-relative mt-4">
                                    <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                        Cancellation, till 1 hour of Pick up</span></div>
                                    <div className="text-md">
                                        <p className="m-0">Room type: Standard King Room <Link className="text-primary">Change Room</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card list-layout-block border rounded-3 p-3">
                    <div className="row">
                        <div className="col-xl-4 col-lg-3 col-md">
                            <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                                <img className="img-fluid h-100 object-fit" src="https://placehold.co/1200x800" alt="img" />
                            </div>
                        </div>
                        <div className="col-xl col-lg col-md">
                            <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">
                                <div className="d-flex align-items-center justify-content-start">
                                    <div className="d-inline-block">
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                        <i className="fa fa-star text-warning text-xs" />
                                    </div>
                                </div>
                                <h4 className="fs-5 fw-bold mb-1">Hotel Chancellor@Orchard</h4>
                                <ul className="row g-2 p-0">
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md">Waterloo and Southwark</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md fw-bold">.</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md">9.8 km from Delhi Airport</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md fw-bold">.</p>
                                    </li>
                                    <li className="col-auto">
                                        <p className="text-muted-2 text-md"><Link to="#" className="text-primary">Show on Map</Link></p>
                                    </li>
                                </ul>
                                <div className="detail ellipsis-container mt-3">
                                    <span className="ellipsis">Parking</span>
                                    <span className="ellipsis">WiFi</span>
                                    <span className="ellipsis">Eating</span>
                                    <span className="ellipsis">Cooling</span>
                                    <span className="ellipsis">Pet</span>
                                </div>
                                <div className="position-relative mt-3">
                                    <div className="fw-medium text-dark">Standard Twin Double Room</div>
                                    <div className="text-md text-muted">Last booed 25min ago</div>
                                </div>
                                <div className="position-relative mt-4">
                                    <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                                        Cancellation, till 1 hour of Pick up</span></div>
                                    <div className="text-md">
                                        <p className="m-0">Room type: Standard King Room <Link className="text-primary">Change Room</Link></p>
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


export default PersonalWishList