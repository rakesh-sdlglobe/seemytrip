import { Link } from "react-router-dom";

const PersonalPaymentDetails = () => {
    return (
        <div>
            {/* Saved Cards */}
            <div className="card mb-4">
                <div className="card-header">
                    <h4><i className="fa-solid fa-wallet me-2" />Payment Details</h4>
                </div>
                <div className="card-body gap-4">
                    <h4 className="fs-5 fw-semibold">Saved Card (02)</h4>
                    <div className="row justify-content-start g-3">
                        <div className="col-xl-5 col-lg-6 col-md-6">
                            <div className="card h-100">
                                <div className="bg-dark p-4 rounded-3">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <img className="img-fluid" src="assets/img/visa.png" width={55} alt="Visa" />
                                        {/* Card action START */}
                                        <div className="dropdown">
                                            <Link className="text-white" to="#" id="creditcardDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {/* Dropdown Icon */}
                                                <svg width={24} height={24} fill="none">
                                                    <circle fill="currentColor" cx="12.5" cy="3.5" r="2.5" />
                                                    <circle fill="currentColor" opacity="0.5" cx="12.5" cy="11.5" r="2.5" />
                                                    <circle fill="currentColor" opacity="0.3" cx="12.5" cy="19.5" r="2.5" />
                                                </svg>
                                            </Link>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="creditcardDropdown">
                                                <li><Link className="dropdown-item" to="#"><i className="bi bi-credit-card-2-front-fill me-2 fw-icon" />Edit card</Link></li>
                                                <li><Link className="dropdown-item" to="#"><i className="bi bi-calculator me-2 fw-icon" />Currency converter</Link></li>
                                            </ul>
                                        </div>
                                        {/* Card action END */}
                                    </div>
                                    <h4 className="text-white fs-6 mt-4">**** **** **** 1569</h4>
                                    <div className="d-flex justify-content-between text-white mt-4">
                                        <div className="d-flex flex-column">
                                            <span className="text-md">Issued To</span>
                                            <span className="text-sm fw-medium text-uppercase">Daniel Duekoza</span>
                                        </div>
                                        <div className="d-flex text-end flex-column">
                                            <span className="text-md">Valid Thru</span>
                                            <span>12/2027</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-6">
                            <div className="card h-100">
                                <div className="bg-success p-4 rounded-3">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <img className="img-fluid" src="assets/img/card.png" width={55} alt="Card" />
                                        {/* Card action START */}
                                        <div className="dropdown">
                                            <Link className="text-white" to="#" id="creditcardDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {/* Dropdown Icon */}
                                                <svg width={24} height={24} fill="none">
                                                    <circle fill="currentColor" cx="12.5" cy="3.5" r="2.5" />
                                                    <circle fill="currentColor" opacity="0.5" cx="12.5" cy="11.5" r="2.5" />
                                                    <circle fill="currentColor" opacity="0.3" cx="12.5" cy="19.5" r="2.5" />
                                                </svg>
                                            </Link>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="creditcardDropdown1">
                                                <li><Link className="dropdown-item" to="#"><i className="bi bi-credit-card-2-front-fill me-2 fw-icon" />Edit card</Link></li>
                                                <li><Link className="dropdown-item" to="#"><i className="bi bi-calculator me-2 fw-icon" />Currency converter</Link></li>
                                            </ul>
                                        </div>
                                        {/* Card action END */}
                                    </div>
                                    <h4 className="text-white fs-6 mt-4">**** **** **** 1563</h4>
                                    <div className="d-flex justify-content-between text-white mt-4">
                                        <div className="d-flex flex-column">
                                            <span className="text-md">Issued To</span>
                                            <span className="text-sm fw-medium text-uppercase">Daniel Duekoza</span>
                                        </div>
                                        <div className="d-flex text-end flex-column">
                                            <span className="text-md">Valid Thru</span>
                                            <span>12/2027</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-6 col-md-6">
                            <div className="card d-flex align-items-center justify-content-center border br-dashed border-2 py-3 h-100">
                                <div className="d-flex align-items-center justify-content-center">
                                    {/* <Link to="#" className="square--60 circle bg-light-primary text-primary fs-2" data-bs-toggle="modal" data-bs-target="#addcard"> */}
                                        <i className="fa-solid fa-circle-plus" />
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Billing History */}
            <div className="card mb-4">
                <div className="card-header">
                    <h4><i className="fa-solid fa-file-invoice-dollar me-2" />Billing History</h4>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Transaction ID</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>01</th>
                                <td>BK32154</td>
                                <td>10 Sep 2023</td>
                                <td><span className="badge bg-light-success text-success fw-medium text-uppercase">Paid</span></td>
                                <td><span className="text-md fw-medium text-dark">₹240</span></td>
                            </tr>
                            <tr>
                                <th>02</th>
                                <td>BK32155</td>
                                <td>08 Aug 2023</td>
                                <td><span className="badge bg-light-warning text-warning fw-medium text-uppercase">Unpaid</span></td>
                                <td><span className="text-md fw-medium text-dark">₹240</span></td>
                            </tr>
                            <tr>
                                <th>03</th>
                                <td>BK32156</td>
                                <td>10 Aug 2023</td>
                                <td><span className="badge bg-light-info text-info fw-medium text-uppercase">Hold</span></td>
                                <td><span className="text-md fw-medium text-dark">₹240</span></td>
                            </tr>
                            <tr>
                                <th>04</th>
                                <td>BK32157</td>
                                <td>22 Jul 2023</td>
                                <td><span className="badge bg-light-success text-success fw-medium text-uppercase">Completed</span></td>
                                <td><span className="text-md fw-medium text-dark">₹240</span></td>
                            </tr>
                            <tr>
                                <th>05</th>
                                <td>BK32158</td>
                                <td>16 Jun 2023</td>
                                <td><span className="badge bg-light-danger text-danger fw-medium text-uppercase">Cancelled</span></td>
                                <td><span className="text-md fw-medium text-dark">₹240</span></td>
                            </tr>
                            <tr>
                                <th>06</th>
                                <td>BK32159</td>
                                <td>20 May 2023</td>
                                <td><span className="badge bg-light-info text-info fw-medium text-uppercase">Hold</span></td>
                                <td><span className="text-md fw-medium text-dark">₹240</span></td>
                            </tr>
                            <tr>
                                <th>07</th>
                                <td>BK32160</td>
                                <td>18 Apr 2023</td>
                                <td><span className="badge bg-light-success text-success fw-medium text-uppercase">Completed</span></td>
                                <td><span className="text-md fw-medium text-dark">₹240</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PersonalPaymentDetails;
