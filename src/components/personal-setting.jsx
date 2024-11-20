import { Link } from "react-router-dom";

const PersonalSetting = () => {
    return (
        <div>
            {/* Notification Settings */}
            <div className="card mb-4">
                <div className="card-header">
                    <h4><i className="fa-regular fa-bell me-2" />Notification Settings</h4>
                </div>
                <div className="card-body">
                    <div className="mb-4">
                        <h6>Newsletter<span className="text-danger">*</span></h6>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="Productivity" defaultChecked />
                            <label className="form-check-label" htmlFor="Productivity">
                                Daily Productivity Updates
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="Event" defaultChecked />
                            <label className="form-check-label" htmlFor="Event">
                                New Event Created
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="week" defaultChecked />
                            <label className="form-check-label" htmlFor="week">
                                Twice a week
                            </label>
                        </div>
                    </div>
                    <div className="d-flex align-items-start justify-content-between mb-3">
                        <div>
                            <p className="lh-2 fw-semibold text-dark mb-0">Mobile Push Notification</p>
                            <span className="text-md text-muted-2">Receive push notification whenever your organization requires your attention</span>
                        </div>
                        <div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="mobilepush" defaultChecked />
                                <label className="form-check-label" htmlFor="mobilepush" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-start justify-content-between mb-3">
                        <div>
                            <p className="lh-2 fw-semibold text-dark mb-0">Desktop Notification</p>
                            <span className="text-md text-muted-2">Receive Desktop notification whenever your organization requires your attention</span>
                        </div>
                        <div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="desktoppush" defaultChecked />
                                <label className="form-check-label" htmlFor="desktoppush" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-start justify-content-between mb-3">
                        <div>
                            <p className="lh-2 fw-semibold text-dark mb-0">Email notification</p>
                            <span className="text-md text-muted-2">Receive email push notification whenever your organization requires your attention</span>
                        </div>
                        <div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="emailpush" />
                                <label className="form-check-label" htmlFor="emailpush" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-start justify-content-between mb-3">
                        <div>
                            <p className="lh-2 fw-semibold text-dark mb-0">Show your profile publicly</p>
                            <span className="text-md text-muted-2">Receive email push notification whenever your organization requires your attention</span>
                        </div>
                        <div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="publicaly" defaultChecked />
                                <label className="form-check-label" htmlFor="publicaly" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-start justify-content-between mb-3">
                        <div>
                            <p className="lh-2 fw-semibold text-dark mb-0">Check which device(s) access your account</p>
                            <span className="text-md text-muted-2">Receive email push notification whenever your organization requires your attention</span>
                        </div>
                        <div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="eddred" />
                                <label className="form-check-label" htmlFor="eddred" />
                            </div>
                        </div>
                    </div>
                    <div className="d-sm-flex justify-content-start">
                        <button type="button" className="btn btn-md btn-primary fw-medium me-2 mb-0">Save changes</button>
                        <Link to="#" className="btn btn-md btn-dark fw-medium mb-0">Cancel</Link>
                    </div>
                </div>
            </div>

            {/* Security Settings */}
            {/* <div className="card mb-4">
                <div className="card-header">
                    <h4><i className="fa-solid fa-gear me-2" />Security Settings</h4>
                </div>
                <div className="card-body">
                    <form className="mb-0">
                        <h6>Two-factor authentication</h6>
                        <label className="form-label">Add a phone number to set up two-factor authentication</label>
                        <input type="text" className="form-control mb-2" placeholder="Enter your mobile number" />
                        <button className="btn btn-md btn-primary fw-medium">Send Code</button>
                    </form>
                </div>
            </div> */}
        </div>
    );
}

export default PersonalSetting;
