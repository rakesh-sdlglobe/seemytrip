import { useSelector } from 'react-redux';
import { selectUserProfile} from '../store/Selectors/userSelector';


const SideBarProfilePage = () => {
    const userProfile = useSelector(selectUserProfile);
    return (
        <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="card rounded-2 me-xl-5 mb-4">
                <div className="card-top bg-primary position-relative">
                    {/* <div className="position-absolute end-0 top-0 mt-4 me-3"><Link to="login.html" className="square--40 circle bg-light-dark text-light"><i className="fa-solid fa-right-from-bracket" /></Link></div> */}
                    <div className="py-5 px-3">
                        <div className="crd-thumbimg text-center">
                            <div className="p-2 d-flex align-items-center justify-content-center brd"><img src="https://placehold.co/500x500" className="img-fluid circle" width={120} alt="" /></div>
                        </div>
                        <div className="crd-capser text-center">
                            <h5 className="mb-0 text-light fw-semibold">{userProfile?.name}</h5>
                            <span className="text-light opacity-75 fw-medium text-md"><i className="fa-solid fa-location-dot me-2" />Karnataka, India</span>
                        </div>
                    </div>
                </div>
                <div className="card-middle px-4 py-5">
                    <div className="crdapproval-groups">
                        <div className="crdapproval-single d-flex align-items-center justify-content-start mb-4">
                            <div className="crdapproval-item">
                                <div className="square--50 circle bg-light-success text-success"><i className="fa-solid fa-envelope-circle-check fs-5" /></div>
                            </div>
                            <div className="crdapproval-caps ps-2">
                                <p className="fw-semibold text-dark lh-2 mb-0">Verified Email</p>
                                <p className="text-md text-muted lh-1 mb-0">10 Aug 2022</p>
                            </div>
                        </div>
                        <div className="crdapproval-single d-flex align-items-center justify-content-start mb-4">
                            <div className="crdapproval-item">
                                <div className="square--50 circle bg-light-success text-success"><i className="fa-solid fa-phone-volume fs-5" /></div>
                            </div>
                            <div className="crdapproval-caps ps-2">
                                <p className="fw-semibold text-dark lh-2 mb-0">Verified Mobile Number</p>
                                <p className="text-md text-muted lh-1 mb-0">12 Aug 2022</p>
                            </div>
                        </div>
                        <div className="crdapproval-single d-flex align-items-center justify-content-start">
                            <div className="crdapproval-item">
                                <div className="square--50 circle bg-light-warning text-warning"><i className="fa-solid fa-file-invoice fs-5" /></div>
                            </div>
                            <div className="crdapproval-caps ps-2">
                                <p className="fw-semibold text-dark lh-2 mb-0">Complete Basic Info</p>
                                <p className="text-md text-muted lh-1 mb-0">Not Verified</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-middle mt-5 mb-4 px-4">
                    <div className="revs-wraps mb-3">
                        <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                            <span className="text-dark fw-semibold text-md">Complete Your Profile</span>
                            <span className="text-dark fw-semibold text-md">75%</span>
                        </div>
                        <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={87} aria-valuemin={0} aria-valuemax={100} style={{ height: '7px' }}>
                            <div className="progress-bar bg-success" style={{ width: '87%' }} />
                        </div>
                    </div>
                    <div className="crd-upgrades">
                        <button className="btn btn-light-primary fw-medium full-width rounded-2" type="button"><i className="fa-solid fa-sun me-2" />Upgrade Pro</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBarProfilePage;