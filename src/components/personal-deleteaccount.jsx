import { Link } from "react-router-dom";

const PersonalDeleteAccount = () => {

    return (
        <div className="card mb-4">
            <div className="card-header">
                <h4><i className="fa-solid fa-trash-can me-2" />Delete Your Account</h4>
            </div>
            <div className="card-body">
                <div className="eportledd mb-4">
                    <h6>Save Your Data<span className="text-danger">*</span></h6>
                    <div className="form-check ps-0">
                        Take a backup of your data <Link to="#" className="text-primary">Here</Link>
                    </div>
                </div>
                <form className="mb-3">
                    <h6>Enter Your Password</h6>
                    <input type="password" className="form-control mb-2" placeholder="*********" />
                    <button className="btn btn-md btn-success fw-medium">Confirm</button>
                </form>
                <div className="d-sm-flex justify-content-start">
                    <button type="button" className="btn btn-md btn-primary fw-medium me-2 mb-0">Keep My Account</button>
                    <Link to="#" className="btn btn-md btn-light-primary fw-medium mb-0">Delete Account</Link>
                </div>
            </div>
        </div>
    );
}

export default PersonalDeleteAccount;