import '../assets/css/bootstrap.min.css';
import '../assets/css/animation.css';
import '../assets/css/dropzone.min.css';
import '../assets/css/flatpickr.min.css';
import '../assets/css/flickity.min.css';
import '../assets/css/lightbox.min.css';
import '../assets/css/magnifypopup.css';
import '../assets/css/select2.min.css';
import '../assets/css/rangeSlider.min.css';
import '../assets/css/prism.css';
import '../assets/css/bootstrap-icons.css';
import '../assets/css/fontawesome.css';
import '../assets/css/style.css';
import { trainImage, login } from '../assets/images';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEmail,
  setPassword,
  handleGoogleLogin,
  Loginn,
} from "../store/Actions/authActions";
import {
  selectEmail,
  selectPassword,
  selectError,
} from "../store/Selectors/authSelectors";
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const error = useSelector(selectError);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(Loginn(email, password, navigate));
  };

  // const fetchUserInfo = async (accessToken) => {
  //   try {
  //     const response = await fetch('http://localhost:3002/api/auth/google', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ token: accessToken }),
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //       // Assuming `data.user` is the validated user info from the backend
  //       dispatch(handleGoogleLogin(data.user, navigate));
  //     } else {
  //       console.error('Failed to validate Google token:', data.message);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching user info:', error);
  //   }
  // };


  // const loginWithGoogle = useGoogleLogin({
  //   onSuccess: (credentialResponse) => {
  //     fetchUserInfo(credentialResponse.access_token);
  //   },
  //   onError: () => {
  //     console.error('Google Login Failed');
  //   },
  // });

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      // Log the credential response and access token
      console.log('Credential Response:', credentialResponse);
      console.log('Access Token:', credentialResponse.access_token);

      // Dispatch action with access token
      dispatch(handleGoogleLogin(credentialResponse.access_token, navigate));
    },
    onError: () => console.error('Google Login Failed'),
  });



  return (
    <div>
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      <div id="main-wrapper">
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center align-items-center m-auto">
              <div className="col-12">
                <div className="bg-mode shadow rounded-3 overflow-hidden">
                  <div className="row g-0">
                    <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                      <div className="p-3 p-lg-5">
                        <img src={login} className="img-fluid" alt="" />
                      </div>
                      <div className="vr opacity-1 d-none d-lg-block" />
                    </div>
                    <div className="col-lg-6 order-1">
                      <div className="p-3 p-sm-4 p-md-5">
                        <Link to="/">
                          <img className="img-fluid mb-4" src={trainImage} width={200} alt="logo" />
                        </Link>
                        <p className="mb-0">Are you new here?<Link to="/register" className="fw-medium text-primary"> Create an account</Link></p>
                        <form className="mt-4 text-start" onSubmit={handleSubmit}>
                          {error && (
                            <div className="alert alert-danger">{error}</div>
                          )}
                          <div className="form py-4">
                            <div className="form-group">
                              <label className="form-label">
                                Enter Email ID
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) =>
                                  dispatch(setEmail(e.target.value))
                                }
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label className="form-label">
                                Enter Password
                              </label>
                              <div className="position-relative">
                                <input
                                  type={passwordVisible ? "text" : "password"}
                                  className="form-control"
                                  name="password"
                                  placeholder="Password"
                                  value={password}
                                  onChange={(e) =>
                                    dispatch(setPassword(e.target.value))
                                  }
                                  required
                                />
                                <span
                                  className={`fa-solid ${passwordVisible ? "fa-eye-slash" : "fa-eye"} toggle-password position-absolute top-50 end-0 translate-middle-y me-3`}
                                  onClick={togglePasswordVisibility}
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <button type="submit" className="btn btn-primary full-width font--bold btn-lg">Log In</button>
                            </div>
                            <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                              <div className="modal-flex-first">
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="checkbox" id="savepassword" defaultValue="option1" />
                                  <label className="form-check-label" htmlFor="savepassword">Save Password</label>
                                </div>
                              </div>
                              <div className="modal-flex-last">
                                <Link to="#" onClick={(e) => { e.preventDefault() }} className="text-primary fw-medium">Forget Password?</Link>
                              </div>
                            </div>
                          </div>
                          <div className="prixer px-3">
                            <div className="devider-wraps position-relative">
                              <div className="devider-text text-muted-2 text-md">Sign In with Socials</div>
                            </div>
                          </div>
                          <div className="social-login py-4 px-md-2">
                            <ul className="row align-items-center justify-content-center g-3 p-0 m-0">
                              <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-brands fa-facebook color--google fs-2" /></Link></li>
                              <li className="col">
                                {/*<Link to="#" className="square--60 border br-dashed rounded-2 mx-auto">
                                  <i className="fa-brands fa-google color--google fs-2" />
                                </Link>*/}
                                <Link to="#" className="square--60 border br-dashed rounded-2 mx-auto" onClick={() => loginWithGoogle()}>
                                  <i className="fa-brands fa-google color--google fs-2" />
                                </Link>
                              </li>
                              <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 mx-auto"><i className="fa-regular  fa-envelope color--black fs-2" /></Link></li>
                              <li className="col">
                                <Link to="/otp-modal" className="square--60 border br-dashed rounded-2 mx-auto">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
