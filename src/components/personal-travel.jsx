import { Link } from "react-router-dom";

const PersonalTravel = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h4><i className="fa-solid fa-user-group me-2" />Travelers Details</h4>
            </div>
            <div className="card-body gap-4">
                {/* Single Item */}
                <div className="card">
                    <div className="card-header px-0 border-0">
                        <div className="d-flex align-items-center justify-content-start">
                            <div className="avatar avatar-md me-2"><img src="https://placehold.co/500x500" className="img-fluid circle" alt="" />
                            </div>
                            <h6 className="mb-0">Daniel Deukoza</h6>
                        </div>
                        <div className="crd-remove"><Link to="#" className="nav-link fw-medium text-primary text-sm">Remove</Link></div>
                    </div>
                    <div className="card-body px-0">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" defaultValue="Daniel" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control" defaultValue="Duekoza" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Mobile No.</label>
                                    <input type="text" className="form-control" defaultValue="Daniel Duekoza" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Date of Birth</label>
                                    <input type="text" className="form-control birth" defaultValue />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                {/* Single Item */}
                <div className="card">
                    <div className="card-header px-0 border-0">
                        <div className="d-flex align-items-center justify-content-start">
                            <div className="avatar avatar-md me-2"><img src="https://placehold.co/500x500" className="img-fluid circle" alt="" />
                            </div>
                            <h6 className="mb-0">Daniel Deukoza</h6>
                        </div>
                        <div className="crd-remove"><Link to="#" className="nav-link fw-medium text-primary text-sm">Remove</Link></div>
                    </div>
                    <div className="card-body px-0">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control" defaultValue="Daniel" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control" defaultValue="Duekoza" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Mobile No.</label>
                                    <input type="text" className="form-control" defaultValue="Daniel Duekoza" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label className="form-label">Date of Birth</label>
                                    <input type="text" className="form-control birth" defaultValue />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-end">
                    <button type="button" className="btn btn-md btn-primary fw-medium">Add New Travellers</button>
                </div>
            </div>
        </div>
    );
}


export default PersonalTravel