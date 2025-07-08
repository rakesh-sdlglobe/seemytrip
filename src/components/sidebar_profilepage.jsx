import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { selectUserProfile } from '../store/Selectors/userSelector';
import { imageUpload } from '../store/Actions/userActions';
import { setEncryptedItem, getEncryptedItem, removeEncryptedItem } from '../utils/encryption';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const SideBarProfilePage = ({ allowImageUpload = true }) => {
    const userProfile = useSelector(selectUserProfile);
    const dispatch = useDispatch();
    const [uploadedImage, setUploadedImage] = useState(null);
    const fileInputRef = useRef(null);

    // Snackbar state
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // 'success' | 'error' | 'info'
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        if (userProfile?.img_url) {
            setUploadedImage(userProfile.img_url);
            setEncryptedItem('profileImage', userProfile.img_url);
        } else {
            const savedImage = getEncryptedItem('profileImage');
            if (savedImage) setUploadedImage(savedImage);
            else setUploadedImage(null);
        }
    }, [userProfile]);

    // Handles image upload and user authentication
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        // console.log("34 file ", file);
        if (!file) {
            setSnackbarSeverity('error');
            setSnackbarMessage('Please select a file');
            setSnackbarOpen(true);
            return;
        }

        // Decrypt user1 from localStorage and check user_id
        const decryptedUser = getEncryptedItem('user1');
        console.log("44 decryptedUser ", decryptedUser);
        if (!decryptedUser) {
            // If user1 is missing or corrupted, clear it and prompt re-login
            removeEncryptedItem('user1');
            setSnackbarSeverity('error');
            setSnackbarMessage('User authentication required. Please log in again.');
            setSnackbarOpen(true);
            return;
        }
        if (!decryptedUser.user_id) {
            setSnackbarSeverity('error');
            setSnackbarMessage('User ID missing. Please log in again.');
            setSnackbarOpen(true);
            return;
        }

        // Verify that the user_id matches between Redux state and decrypted localStorage
        if (userProfile?.user_id && decryptedUser.user_id !== userProfile.user_id) {
            setSnackbarSeverity('error');
            setSnackbarMessage('User ID mismatch. Please login again.');
            setSnackbarOpen(true);
            return;
        }

        try {
            setSnackbarSeverity('info');
            setSnackbarMessage('Uploading image...');
            setSnackbarOpen(true);

            // imageUpload will use user1.user_id internally
            const response = await imageUpload(file);
            setUploadedImage(response.img_url);

            setSnackbarSeverity('success');
            setSnackbarMessage('Image uploaded successfully');
            setSnackbarOpen(true);

            setEncryptedItem('profileImage', response.img_url);
        } catch (error) {
            console.error('Image upload error:', error);
            setSnackbarSeverity('error');
            setSnackbarMessage(error.message || 'Image upload failed');
            setSnackbarOpen(true);
        }
    };

    // Get initials for avatar fallback
    const getInitials = () => {
        const first = userProfile?.firstName?.charAt(0).toUpperCase() || '';
        const last = userProfile?.lastName?.charAt(0).toUpperCase() || '';
        return (first + last) || 'GU';
    };

    // Get full name for display
    const getFullName = () => {
        return `${userProfile?.firstName || ''} ${userProfile?.middleName || ''} ${userProfile?.lastName || ''}`.trim() || 'Guest User';
    };

    return (
        <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="card rounded-2 me-xl-5 mb-4">
                <div className="card-top bg-primary position-relative">
                    <div className="py-5 px-3">
                        <div className="crd-thumbimg text-center">
                            <div className="p-2 d-flex align-items-center justify-content-center brd position-relative">
                                <div className="d-flex flex-column align-items-center">
                                    <div
                                        className="circle bg-secondary text-white d-flex align-items-center justify-content-center"
                                        style={{
                                            width: '260px',
                                            height: '200px',
                                            fontSize: '2.5rem',
                                            fontWeight: 'bold',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            cursor: allowImageUpload ? 'pointer' : 'default',
                                            borderRadius: '50%',
                                        }}
                                        onClick={() => allowImageUpload && fileInputRef.current.click()}
                                    >
                                        {uploadedImage ? (
                                            <img
                                                src={uploadedImage}
                                                alt={getFullName()}
                                                className="img-fluid circle"
                                                style={{
                                                    width: '300px',
                                                    height: '200px',
                                                    objectFit: 'cover',
                                                    borderRadius: '50%',
                                                }}
                                            />
                                        ) : (
                                            <span>{getInitials()}</span>
                                        )}
                                        <input
                                            type="file"
                                            name="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            ref={fileInputRef}
                                            style={{ display: 'none' }}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <h5 className="mb-0 text-light fw-semibold">{getFullName()}</h5>
                                        {/* {allowImageUpload && (
                                            <small className="text-light opacity-75">
                                                Click to change photo
                                            </small>
                                        )} */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <MuiAlert
                    onClose={() => setSnackbarOpen(false)}
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                    elevation={6}
                    variant="filled"
                >
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </div>
    );
};

export default SideBarProfilePage;
