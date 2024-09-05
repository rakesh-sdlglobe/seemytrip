import React, { useState } from 'react';

const PersonalInfo = () => {
    // State to manage whether the inputs are editable
    const [isEditable, setIsEditable] = useState(false);

    // Toggle edit mode
    const toggleEdit = () => {
        setIsEditable(!isEditable);
    };

    return (
        <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h4><i className="fa-solid fa-file-invoice me-2" />Personal Information</h4>
                {/* Edit button */}
                <button className="btn btn-primary" onClick={toggleEdit}>
                    {isEditable ? 'Save' : 'Edit'}
                </button>
            </div>
            <div className="card-body">
                <div className="row align-items-center justify-content-start">
                    <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                        <div className="d-flex align-items-center">
                            <label className="position-relative me-4 center" htmlFor="uploadfile-1" title="Replace this pic">
                                {/* Avatar place holder */}
                                <span className="avatar avatar-xl">
                                    <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src="https://placehold.co/500x500" alt="" />
                                </span>
                            </label>
                            {/* Upload button */}
                            <label className={`btn btn-sm ${isEditable ? 'btn-light-primary' : 'btn-secondary'} px-4 fw-medium mb-0`} htmlFor="uploadfile-1">
                                {isEditable ? 'Change' : 'Disabled'}
                            </label>
                            <input id="uploadfile-1" className="form-control d-none" type="file" disabled={!isEditable} />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group position-relative">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control" defaultValue="Adam K" disabled={!isEditable} />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group position-relative">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control" defaultValue="Divliars" disabled={!isEditable} />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group position-relative">
                            <label className="form-label">Email ID</label>
                            <input type="text" className="form-control" defaultValue="adamkruck@gmail.com" disabled={!isEditable} />
                            {isEditable && (
                                <button className="btn btn-text-secondary btn-sm verify-button">Verify</button>
                            )}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group position-relative">
                            <label className="form-label">Mobile</label>
                            <input type="text" className="form-control" defaultValue={9856542563} disabled={!isEditable} />
                            {isEditable && (
                                <button className="btn btn-text-secondary btn-sm verify-button">Verify</button>
                            )}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group">
                            <label className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" defaultValue="2000-02-04" disabled={!isEditable} />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="form-group position-relative">
                            <label className="form-label">Gender</label>
                            <select className="form-control custom-select" defaultValue="Male" disabled={!isEditable}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <i className="fa fa-chevron-down select-icon"></i>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="form-group">
                            <label className="form-label">About Info</label>
                            <textarea className="form-control ht-120" defaultValue={"Lorem ipsum dolor sit amet, nec virtute nusquam ex. Ex sed diceret constituam inciderint, accusamus imperdiet has te. Id qui liber nemore semper, modus appareat philosophia ut eam. Assum tibique singulis at mel."} disabled={!isEditable} />
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
            `}</style>
        </div>
    );
}

export default PersonalInfo;
