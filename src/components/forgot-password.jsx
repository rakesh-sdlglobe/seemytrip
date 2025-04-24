// import React, { useState } from 'react';
// import '../assets/css/bootstrap.min.css';
// import '../assets/css/style.css';
// import { auth, trainImage } from '../assets/images';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { useDispatch } from 'react-redux';
// import { resetPassword } from '../store/Actions/verifyEmail';
// import { sendVerificationOTP } from '../store/Actions/emailAction';
// import { selectOTPError } from '../store/Selectors/emailSelector';
// import { selectOTPSent } from '../store/Selectors/emailSelector';
// import { useSelector } from 'react-redux';

// const SendEmailSection = ({ email, setEmail, handleSendOTP }) => (
//   <div className="form-group">
//     <label className="form-label">Enter your email ID</label>
//     <input
//       type="email"
//       className="form-control"
//       placeholder="name@example.com"
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       required
//     />
//     <button type="button" className="btn btn-primary w-100 mt-3" onClick={handleSendOTP}>
//       Send OTP
//     </button>
//   </div>
// );

// const EnterOTPSection = ({ otp, setOtp, handleVerifyOTP }) => (
//   <div className="form-group">
//     <label className="form-label">Enter OTP</label>
//     <input
//       type="text"
//       className="form-control"
//       placeholder="Enter OTP"
//       value={otp}
//       onChange={(e) => setOtp(e.target.value)}
//       required
//     />
//     <button type="button" className="btn btn-primary w-100 mt-3" onClick={handleVerifyOTP}>
//       Verify OTP
//     </button>
//   </div>
// );

// const ResetPasswordSection = ({ newPassword, setNewPassword, confirmPassword, setConfirmPassword, handleResetPassword }) => (
//   <>
//     <div className="form-group">
//       <label className="form-label">New Password</label>
//       <input
//         type="password"
//         className="form-control"
//         placeholder="New Password"
//         value={newPassword}
//         onChange={(e) => setNewPassword(e.target.value)}
//         required
//       />
//     </div>
//     <div className="form-group">
//       <label className="form-label">Confirm Password</label>
//       <input
//         type="password"
//         className="form-control"
//         placeholder="Confirm Password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         required
//       />
//     </div>
//     <button type="button" className="btn btn-primary w-100 mt-3" onClick={handleResetPassword}>
//       Reset Password
//     </button>
//   </>
// );

// const ForgotPassword = () => {
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const error = useSelector(selectOTPError);
//   const otpSentSelector  = useSelector(selectOTPSent);

//   // const emailRef = useRef(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

//   const handleSendOTP = async () => {
//     if (!email || !validateEmail(email)) {
//       toast.error('Please enter a valid email.');
//       return;
//     }
//     try {
//       dispatch(sendVerificationOTP(email));
//       if(otpSentSelector){
//         toast.success('OTP sent to your email.');
//         setOtpSent(true);
//       }
//     } catch (error) {
//       toast.error(error.message || 'Failed to send OTP.');
//     }
//   };

//   const handleVerifyOTP = async () => {
//     if (!otp) {
//       toast.error('Please enter the OTP.');
//       return;
//     }
//     try {
//       // await dispatch(verifyEmailOTPForgot(email, otp, navigate));
//       toast.success('OTP verified successfully.');
//       setOtpVerified(true);
//     } catch (error) {
//       toast.error(error.message || 'Invalid or expired OTP.');
//     }
//   };

//   const handleResetPassword = async () => {
//     if (newPassword !== confirmPassword) {
//       toast.error('Passwords do not match.');
//       return;
//     }
//     if (newPassword.length < 6) {
//       toast.error('Password must be at least 6 characters long.');
//       return;
//     }
//     try {
//       await dispatch(resetPassword(email, newPassword));
//       toast.success('Password reset successfully.');
//       navigate('/login');
//     } catch (error) {
//       toast.error(error.message || 'Failed to reset password.');
//     }
//   };

//   return (
//     <div>
//       <ToastContainer />
//       <div id="main-wrapper">
//         <section className="py-5">
//           <div className="container">
//             <div className="row justify-content-center align-items-center">
//               <div className="col-12">
//                 <div className="bg-mode shadow rounded-3 overflow-hidden">
//                   <div className="row g-0">
//                     <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
//                       <div className="p-3 p-lg-5">
//                         <img src={auth} className="img-fluid" alt="" />
//                       </div>
//                     </div>
//                     <div className="col-lg-6 order-1">
//                       <div className="p-4 p-sm-7">
//                         <Link to="/">
//                           <img className="img-fluid mb-4" src={trainImage} width={180} alt="logo" />
//                         </Link>
//                         <h1 className="mb-2 fs-2">Forgot Password?</h1>
//                         <p className="mb-0">Enter the email address associated with your account.</p>
//                         <form className="mt-4 text-start">
//                         {error && (
//                             <div className="alert alert-danger">{error}</div>
//                           )}
//                           <div className="form py-4">
//                             {!otpSent ? (
//                               <SendEmailSection email={email} setEmail={setEmail} handleSendOTP={handleSendOTP} />
//                             ) : !otpVerified ? (
//                               <EnterOTPSection otp={otp} setOtp={setOtp} handleVerifyOTP={handleVerifyOTP} />
//                             ) : (
//                               <ResetPasswordSection
//                                 newPassword={newPassword}
//                                 setNewPassword={setNewPassword}
//                                 confirmPassword={confirmPassword}
//                                 setConfirmPassword={setConfirmPassword}
//                                 handleResetPassword={handleResetPassword}
//                               />
//                             )}
//                             <div className="form-group text-center mt-3">
//                               <p>
//                                 Back to{' '}
//                                 <Link to="/login" className="fw-medium text-primary">
//                                   Sign in
//                                 </Link>
//                               </p>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;
