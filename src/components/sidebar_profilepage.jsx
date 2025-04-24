import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
import { selectUserProfile } from '../store/Selectors/userSelector';
// import { imageUpload } from '../store/Actions/userActions';


const SideBarProfilePage = () => {
    const userProfile = useSelector(selectUserProfile);
    // const [uploadedImage, setUploadedImage] = useState(null);

    // Handle image upload functionality (commented out for now)
    // const handleImageUpload = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         setUploadedImage(URL.createObjectURL(file));
    //         imageUpload(file);
    //     }
    // };

    // useEffect(() => {
    //     if (userProfile && userProfile.filepath) {
    //         const imageUrl = `${process.env.REACT_APP_API_URL}/uploads/${userProfile.filepath.split("uploads\\")[1] || userProfile.filepath.split("uploads/")[1]}`;
    //         setUploadedImage(imageUrl);
    //     }
    // }, [userProfile]);

    // Function to render the first letter of the user's name
    const renderInitial = () => {
        if (userProfile?.firstName) {
            return userProfile.firstName.charAt(0).toUpperCase();
        }
        return "G"; // Default for "Guest User"
    };

    return (
        <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="card rounded-2 me-xl-5 mb-4">
                <div className="card-top bg-primary position-relative">
                    <div className="py-5 px-3">
                        <div className="crd-thumbimg text-center">
                            <div className="p-2 d-flex align-items-center justify-content-center brd position-relative">
                                <div 
                                    className="circle bg-secondary text-white d-flex align-items-center justify-content-center"
                                    style={{
                                        width: '120px',
                                        height: '120px',
                                        fontSize: '3rem',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {renderInitial()}
                                </div>
                                {/* Display user image functionality commented out */}
                                {/* <div className="d-flex flex-column align-items-end">
                                    <img
                                        src={ "https://placehold.co/500x500"}
                                        className="img-fluid circle"
                                        style={{ 
                                            width: '120px',
                                            height: '120px',
                                            objectFit: 'cover'
                                        }}
                                        alt="Profile"
                                    />
                                    <label style={{ 
                                        cursor: 'pointer', 
                                        marginTop: '-30px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        border: '3px solid white',
                                        borderRadius: '50%',
                                        padding: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <i className="fa-solid fa-pen-to-square text-light"></i>
                                        <input
                                            type="file"
                                            name="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            style={{ display: 'none' }}
                                        />
                                    </label>
                                </div> */}
                            </div>
                        </div>
                        <div className="crd-capser text-center mt-4">
                            <h5 className="mb-0 text-light fw-semibold">{userProfile?.firstName || "Guest User"}</h5>
                            {/* <span className="text-light opacity-75 fw-medium text-md">
                                <i className="fa-solid fa-location-dot me-2" />Karnataka, India
                            </span> */}
                        </div>
                    </div>
                </div>
                {/* Other card middle functionality */}
                {/* <div className="card-middle mt-5 mb-4 px-4">
                    <div className="revs-wraps mb-3">
                        <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                            <span className="text-dark fw-semibold text-md">Complete Your Profile</span>
                            <span className="text-dark fw-semibold text-md">75%</span>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Example" aria-valuenow={87} aria-valuemin={0} aria-valuemax={100} style={{ height: '7px' }}>
                            <div className="progress-bar bg-success" style={{ width: '87%' }} />
                        </div>
                    </div>
                    <div className="crd-upgrades">
                        <button className="btn btn-light-primary fw-medium full-width rounded-2" type="button">
                            <i className="fa-solid fa-sun me-2" />Upgrade Pro
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default SideBarProfilePage;
