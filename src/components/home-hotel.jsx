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
import Header02 from './header02';
import { Link } from 'react-router-dom';
import Footer from './footer';
import { HotelSearchbar } from './hotel_components/HotelSearchbar';
import { Bangalore, benglore, charminar, chennai, delhi, Delhi, Hotel01, Hotel02, Hotel03, Hotel04, Hyderabad, kerla, kolkota, mumbai, Mumbai, utterpradesh } from '../assets/images';
import AppApk from './App_apk_promotion';
import { Features } from './medical_tourism/Features';

// Utility function to get hotel search params from localStorage
function getHotelSearchParamsFromStorage() {
  try {
    const data = localStorage.getItem('hotelSearchParams');
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

const HomeHotel = () => {
  const initialSearchParams = getHotelSearchParamsFromStorage();
  return (
    <div>
      {/* ============================================================== */}
      {/* Preloader - style you can find in spinners.css */}
      {/* ============================================================== */}
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      {/* ============================================================== */}
      {/* Main wrapper - style you can find in pages.scss */}
      {/* ============================================================== */}
      <div id="main-wrapper">
        {/* ============================================================== */}
        {/* Top header  */}
        {/* ============================================================== */}
        {/* Start Navigation */}
        <Header02 />
        {/* End Navigation */}
        <div className="clearfix" />
        {/* ============================================================== */}
        {/* Top header  */}
        {/* ============================================================== */}
        {/* ============================ Hero Banner  Start================================== */}
        <div className="image-cover hero-header bg-white" style={{ background: 'url(../images/hotel.png)no-repeat' }} data-overlay={5}>
          <div className="container">
            {/* Search Form */}
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                <div className="position-relative text-center mb-5">
                  <h1>Start Your Trip with <span className="position-relative z-4">See My Trip<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                    <svg width="185px" height="23px" viewBox="0 0 445.5 23">
                      <path className="fill-white opacity-7" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z">
                      </path>
                    </svg>
                  </span></span></h1>
                  <p className="fs-5 fw-light">Take a little break from the everyday work stress. Plan a trip and explore beautiful destinations!</p>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="search-wrap bg-white rounded-3 p-3">
              <Features/>
              <HotelSearchbar searchParams={initialSearchParams} />
              </div>
             </div>
            </div>
            {/* </row> */}
          </div>
        </div>
        {/* ============================ Hero Banner End ================================== */}
        {/* ============================ Offers Start ================================== */}
        {/* <section className="py-5">
          <div className="container">
            <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="pop-touritems">
                  <div className="card bg-light-success rounded-3 p-4 m-0">
                    <div className="card-body py-3 px-1">
                      <div className="position-relative">
                        <div className="offers-pic"><img src="https://placehold.co/300x100" className="img-fluid rounded" width={150} alt="" /></div>
                      </div>
                      <div className="position-relative py-4 my-1">
                        <span className="mb-1 text-dark fw-medium">Flat</span>
                        <h4 className="mb-1 text-success">₹899 off</h4>
                        <h6 className="fw-normal fw-medium">On Domestic Flights</h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-light-success border border-2 border-success br-dashed rounded-2 px-3 py-2">
                          <h5 className="fw-bold user-select-all text-success mb-0">LOG125F</h5>
                        </div>
                        <Link to="#" className="nav-link text-success"><i className="fa-solid fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="pop-touritems">
                  <div className="card bg-light-purple rounded-3 p-4 m-0">
                    <div className="card-body py-3 px-1">
                      <div className="position-relative">
                        <div className="offers-pic"><img src="https://placehold.co/300x100" className="img-fluid rounded" width={150} alt="" />
                        </div>
                      </div>
                      <div className="position-relative py-4 my-1">
                        <span className="mb-1 text-dark fw-medium">Flat</span>
                        <h4 className="mb-1 text-purple">₹899 off</h4>
                        <h6 className="fw-normal fw-medium">On Domestic Flights</h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-light-purple border border-2 border-purple br-dashed rounded-2 px-3 py-2">
                          <h5 className="fw-bold user-select-all text-purple mb-0">INT285</h5>
                        </div>
                        <Link to="#" className="nav-link text-purple"><i className="fa-solid fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="pop-touritems">
                  <div className="card bg-light-danger rounded-3 p-4 m-0">
                    <div className="card-body py-3 px-1">
                      <div className="position-relative">
                        <div className="offers-pic"><img src="https://placehold.co/300x100" className="img-fluid rounded" width={150} alt="" /></div>
                      </div>
                      <div className="position-relative py-4 my-1">
                        <span className="mb-1 text-dark fw-medium">Flat</span>
                        <h4 className="mb-1 text-danger">₹899 off</h4>
                        <h6 className="fw-normal fw-medium">On Domestic Flights</h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-light-danger border border-2 border-danger br-dashed rounded-2 px-3 py-2">
                          <h5 className="fw-bold user-select-all text-danger mb-0">LOG125F</h5>
                        </div>
                        <Link to="#" className="nav-link text-danger"><i className="fa-solid fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="pop-touritems">
                  <div className="card bg-light-warning rounded-3 p-4 m-0">
                    <div className="card-body py-3 px-1">
                      <div className="position-relative">
                        <div className="offers-pic"><img src="https://placehold.co/300x100" className="img-fluid rounded" width={150} alt="" /></div>
                      </div>
                      <div className="position-relative py-4 my-1">
                        <span className="mb-1 text-dark fw-medium">Flat</span>
                        <h4 className="mb-1 text-warning">₹899 off</h4>
                        <h6 className="fw-normal fw-medium">On Domestic Flights</h6>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-light-warning border border-2 border-warning br-dashed rounded-2 px-3 py-2">
                          <h5 className="fw-bold user-select-all text-warning mb-0">LOG125F</h5>
                        </div>
                        <Link to="#" className="nav-link text-warning"><i className="fa-solid fa-arrow-right" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* ============================ Offers End ================================== */}
        <section>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                  <h2>Top Places</h2>
                  <p>Experience the scenic journeys that connect you to remarkable destinations.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center gy-4 gx-3">
              <Link to="./" />
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={charminar} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                    {/* <Link to="#"><img src="./assets/images/charminar.png" class="img-fluid " alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Hyderabad</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">10 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">5 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to='#'>
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={benglore} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                    {/* <Link to="#"><img src="./assets/images/Bangalore.png" class="img-fluid rounded" alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Bangalore</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">06 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">14 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={kolkota} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                    {/* <Link to="#"><img src="./assets/images/kolkata.png" class="img-fluid rounded" alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Kolkata</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">09 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">16 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={mumbai} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                    {/* <Link to="#"><img src="./assets/images/mumbai.png" class="img-fluid rounded" alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Mumbai</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">07 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">18 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={utterpradesh} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                    {/* <Link to="#"><img src="./assets/images/Uttrapradesh.png" class="img-fluid rounded" alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Uttar Pradesh</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">4 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">12 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={kerla} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                    {/* <Link to="#"><img src="./assets/images/kerala.png" class="img-fluid rounded" alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Kerala</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">16 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">7 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={delhi} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                    {/* <Link to="#"><img src="./assets/images/delhi.png" class="img-fluid rounded" alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Delhi</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">14 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">10 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <Link to="#">
                      <div className="flight-thumb-wrapper p-2 pb-0">
                        <div className="popFlights-item-overHidden rounded-3">
                          <img src={chennai} className="img-fluid" alt="" />
                        </div>
                      </div>
                    </Link>
                    {/* <Link to="#"><img src="./assets/images/chennai.png" class="img-fluid rounded" alt=""></Link> */}
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Chennai</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">12 Destinations</span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">32 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Popular Hotels Start ================================== */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center mb-3">
              <div className="col-8">
                <div className="upside-heading">
                  <h5 className="fw-bold fs-6 m-0">Explore Top Hotels &amp; Resorts</h5>
                </div>
              </div>
              <div className="col-4">
                <div className="text-end grpx-btn">
                  <Link to="#" className="btn btn-light-primary btn-md fw-medium">More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                </div>
              </div>
              {/* single card */}
              <div className='mt-3'></div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src={Hotel01} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>Hyderabad</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">Delhi</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3.5 Km From Delhi</span>
                        </p>
                        <div className="touritem-centrio mt-4">
                          <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                            Cancellation Till 10 Aug 23</span></div>
                          <div className="aments-lists mt-2">
                            <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="trsms-foots mt-4">
                        <div className="flts-flex d-flex align-items-end justify-content-between">
                          <div className="flts-flex-strat">
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="label bg-seegreen text-light">15% Off</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="text-dark fw-bold fs-4">₹5,999</div>
                              <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">₹4,879</div>
                            </div>
                            <div className="d-flex align-items-start flex-column">
                              <div className="text-muted-2 text-sm">Per Night</div>
                            </div>
                          </div>
                          <div className="flts-flex-end">
                            <div className="row align-items-center justify-content-end gx-2">
                              <div className="col-auto text-start text-md-end">
                                <div className="text-md text-dark fw-medium">Exceptional</div>
                                <div className="text-md text-muted-2">3,014 reviews</div>
                              </div>
                              <div className="col-auto">
                                <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* single card */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src={Hotel02} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>Mumbai</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">Delhi</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3.5 Km From Delhi</span>
                        </p>
                        <div className="touritem-centrio mt-4">
                          <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                            Cancellation Till 10 Aug 23</span></div>
                          <div className="aments-lists mt-2">
                            <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="trsms-foots mt-4">
                        <div className="flts-flex d-flex align-items-end justify-content-between">
                          <div className="flts-flex-strat">
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="label bg-seegreen text-light">15% Off</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="text-dark fw-bold fs-4">₹5,999</div>
                              <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">₹5,999</div>
                            </div>
                            <div className="d-flex align-items-start flex-column">
                              <div className="text-muted-2 text-sm">Per Night</div>
                            </div>
                          </div>
                          <div className="flts-flex-end">
                            <div className="row align-items-center justify-content-end gx-2">
                              <div className="col-auto text-start text-md-end">
                                <div className="text-md text-dark fw-medium">Exceptional</div>
                                <div className="text-md text-muted-2">3,014 reviews</div>
                              </div>
                              <div className="col-auto">
                                <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* single card */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src={Hotel03} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>Bangalore</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">Delhi</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3.5 Km From Delhi</span>
                        </p>
                        <div className="touritem-centrio mt-4">
                          <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                            Cancellation Till 10 Aug 23</span></div>
                          <div className="aments-lists mt-2">
                            <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="trsms-foots mt-4">
                        <div className="flts-flex d-flex align-items-end justify-content-between">
                          <div className="flts-flex-strat">
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="label bg-seegreen text-light">15% Off</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="text-dark fw-bold fs-4">₹5,999</div>
                              <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">₹5,999</div>
                            </div>
                            <div className="d-flex align-items-start flex-column">
                              <div className="text-muted-2 text-sm">Per Night</div>
                            </div>
                          </div>
                          <div className="flts-flex-end">
                            <div className="row align-items-center justify-content-end gx-2">
                              <div className="col-auto text-start text-md-end">
                                <div className="text-md text-dark fw-medium">Exceptional</div>
                                <div className="text-md text-muted-2">3,014 reviews</div>
                              </div>
                              <div className="col-auto">
                                <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* signge card */}
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src={Hotel04} className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>Delhi</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">Delhi</span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3.5 Km From Delhi</span>
                        </p>
                        <div className="touritem-centrio mt-4">
                          <div className="d-block position-relative"><span className="label bg-light-success text-success">Free
                            Cancellation Till 10 Aug 23</span></div>
                          <div className="aments-lists mt-2">
                            <ul className="p-0 row gx-3 gy-2 align-items-start flex-wrap">
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Cooling</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Pet Allow</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Free WiFi</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Food</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Parking</li>
                              <li className="col-auto text-dark text-md text-muted-2 d-inline-flex align-items-center"><i className="fa-solid fa-check text-success me-1" />Spa &amp; Massage</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="trsms-foots mt-4">
                        <div className="flts-flex d-flex align-items-end justify-content-between">
                          <div className="flts-flex-strat">
                            <div className="d-flex align-items-center justify-content-start">
                              <span className="label bg-seegreen text-light">15% Off</span>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="text-dark fw-bold fs-4">₹5,999</div>
                              <div className="text-muted-2 fw-medium text-decoration-line-through ms-2">₹5,999</div>
                            </div>
                            <div className="d-flex align-items-start flex-column">
                              <div className="text-muted-2 text-sm">Per Night</div>
                            </div>
                          </div>
                          <div className="flts-flex-end">
                            <div className="row align-items-center justify-content-end gx-2">
                              <div className="col-auto text-start text-md-end">
                                <div className="text-md text-dark fw-medium">Exceptional</div>
                                <div className="text-md text-muted-2">3,014 reviews</div>
                              </div>
                              <div className="col-auto">
                                <div className="square--40 rounded-2 bg-primary text-light">4.8</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Popular Hotels End ================================== */}
        {/* ============================ Google & IOS App Start ================================== */}
        <section className="py-5">
           <AppApk/>
        </section>
        {/* ============================ Google & IOS App End ================================== */}
        {/* <section className="py-0">
          <div className="container">
            <div className="row align-items-center justify-content-between mb-3">
              <div className="col-8">
                <div className="upside-heading">
                  <h5 className="fw-bold fs-6 m-0">Featured Rental In Australia</h5>
                </div>
              </div>
              <div className="col-4">
                <div className="text-end grpx-btn">
                  <Link to="#" className="btn btn-light-primary btn-md fw-medium">More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                </div>
              </div>
            </div>
            <div className="row justify-content-center gy-4 gx-3">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <Link className="recommend-module-card" to="#">
                  <div className="bokker-bg-full" style={{ background: 'url(https://placehold.co/650x850)no-repeat' }} />
                  <div className="bokker-content">
                    <div className="bokker-content-text fs-4 lh-base">Discover great deals on hotels around the world</div>
                    <div className="bokker-content-button">Go Now</div>
                  </div>
                </Link>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <div className="d-flex align-items-start justify-content-start flex-column">
                          <span className="city-destination label text-success bg-light-success mb-1">House</span>
                          <h4 className="city fs-6 m-0 fw-bold">
                            <span>Pagoda Partners Realty</span>
                          </h4>
                        </div>
                        <div className="detail ellipsis-container mt-3">
                          <span className="ellipsis">3 Beds</span>
                          <span className="ellipsis">2 Baths</span>
                          <span className="ellipsis">2100 sqft</span>
                        </div>
                      </div>
                      <div className="flight-footer">
                        <div className="epocsic">
                          <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                          <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">₹492</span>
                          </h5>
                        </div>
                        <div className="rates">
                          <div className="star-rates">
                            <i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" />
                          </div>
                          <div className="rat-reviews">
                            <strong>4.6</strong><span>(142 Reviews)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <div className="d-flex align-items-start justify-content-start flex-column">
                          <span className="city-destination label text-success bg-light-success mb-1">Villa</span>
                          <h4 className="city fs-6 m-0 fw-bold">
                            <span>Strive Partners Realty</span>
                          </h4>
                        </div>
                        <div className="detail ellipsis-container mt-3">
                          <span className="ellipsis">3 Beds</span>
                          <span className="ellipsis">2 Baths</span>
                          <span className="ellipsis">2100 sqft</span>
                        </div>
                      </div>
                      <div className="flight-footer">
                        <div className="epocsic">
                          <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                          <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">₹492</span>
                          </h5>
                        </div>
                        <div className="rates">
                          <div className="star-rates">
                            <i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" />
                          </div>
                          <div className="rat-reviews">
                            <strong>4.6</strong><span>(142 Reviews)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="pop-touritem">
                  <Link to="#" className="card rounded-3 border br-dashed m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img src="https://placehold.co/1200x800" className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <div className="d-flex align-items-start justify-content-start flex-column">
                          <span className="city-destination label text-success bg-light-success mb-1">Apartment</span>
                          <h4 className="city fs-6 m-0 fw-bold">
                            <span>Closers Group Real Estate</span>
                          </h4>
                        </div>
                        <div className="detail ellipsis-container mt-3">
                          <span className="ellipsis">3 Beds</span>
                          <span className="ellipsis">2 Baths</span>
                          <span className="ellipsis">2100 sqft</span>
                        </div>
                      </div>
                      <div className="flight-footer">
                        <div className="epocsic">
                          <span className="label d-inline-flex bg-light-danger text-danger mb-1">15% Off</span>
                          <h5 className="fs-5 low-price m-0"><span className="tag-span">From</span> <span className="price">₹492</span>
                          </h5>
                        </div>
                        <div className="rates">
                          <div className="star-rates">
                            <i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" /><i className="fa-solid fa-star active" />
                          </div>
                          <div className="rat-reviews">
                            <strong>4.6</strong><span>(142 Reviews)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* ============================ Featured Rental Property End ================================== */}
        {/* ================================ Article Section Start ======================================= */}
        {/* <section className="py-5">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                  <h2>Trending &amp; Popular Articles</h2>
                  <p>Cicero famously orated against his political opponent Lucius Sergius Catilina.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center g-4">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="blogGrid-wrap d-flex flex-column h-100">
                  <div className="blogGrid-pics">
                    <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog img" /></Link>
                  </div>
                  <div className="blogGrid-caps pt-3">
                    <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Destination</span></div>
                    <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                      Comfirtable And Best Price</Link></h4>
                    <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                      to be unintendedly humorous or offensive day of going live.</p>
                    <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="blogGrid-wrap d-flex flex-column h-100">
                  <div className="blogGrid-pics">
                    <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog img" /></Link>
                  </div>
                  <div className="blogGrid-caps pt-3">
                    <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Journey</span></div>
                    <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                      Comfirtable And Best Price</Link></h4>
                    <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                      to be unintendedly humorous or offensive day of going live.</p>
                    <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="blogGrid-wrap d-flex flex-column h-100">
                  <div className="blogGrid-pics">
                    <Link to="#" className="d-block"><img src="https://placehold.co/1200x800" className="img-fluid rounded" alt="Blog img" /></Link>
                  </div>
                  <div className="blogGrid-caps pt-3">
                    <div className="d-flex align-items-center mb-1"><span className="label text-success bg-light-success">Business</span></div>
                    <h4 className="fw-bold fs-6 lh-base"><Link to="#" className="text-dark">Make Your Next Journey Delhi To Paris in
                      Comfirtable And Best Price</Link></h4>
                    <p className="mb-3">Think of a news blog that's filled with content hourly on the Besides, random text risks
                      to be unintendedly humorous or offensive day of going live.</p>
                    <Link className="text-primary fw-medium" to="#">Read More<i className="fa-solid fa-arrow-trend-up ms-2" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* ================================ Article Section Start ======================================= */}
        {/* ============================ Call To Action Start ================================== */}
        <div className="position-relative bg-cover py-5 bg-dark" style={{ background: 'url(assets/img/bg2.png)no-repeat' }}>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="calltoAction-wraps position-relative py-5 px-4">
                  <div className="ht-40" />
                  <div className="row align-items-center justify-content-center">
                    <div className="col-xl-8 col-lg-9 col-md-10 col-sm-11 text-center">
                      <div className="calltoAction-title mb-5">
                        <h4 className="text-light fs-2 fw-bold lh-base m-0">Subscribe &amp; Get<br />Special Discount with See My Trip.com
                        </h4>
                      </div>
                      <div className="newsletter-forms mt-md-0 mt-4">
                        <form>
                          <div className="row align-items-center justify-content-between bg-white rounded-3 p-2 gx-0">
                            <div className="col-xl-9 col-lg-8 col-md-8">
                              <div className="form-group m-0">
                                <input type="text" className="form-control bold ps-1 border-0" placeholder="Enter Your Mail!" />
                              </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-4">
                              <div className="form-group m-0">
                                <button type="button" className="btn btn-primary fw-medium full-width">Submit<i className="fa-solid fa-arrow-trend-up ms-2" /></button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="ht-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ============================ Call To Action Start ================================== */}
        {/* ============================ Footer Start ================================== */}
       <Footer/>
        {/* ============================ Footer End ================================== */}
        {/* Log In Modal */}
        <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
            <div className="modal-content" id="loginmodal">
              <div className="modal-header">
                <h4 className="modal-title fs-6">Sign In / Register</h4>
                <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
              </div>
              <div className="modal-body">
                <div className="modal-login-form py-4 px-md-3 px-0">
                  <form>
                    <div className="form-floating mb-4">
                      <input type="email" className="form-control" placeholder="name@example.com" />
                      <label>User Name</label>
                    </div>
                    <div className="form-floating mb-4">
                      <input type="password" className="form-control" placeholder="Password" />
                      <label>Password</label>
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
                        <Link to="#" onClick={(e)=>{e.preventDefault()}} className="text-primary fw-medium">Forget Password?</Link>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="prixer px-3">
                  <div className="devider-wraps position-relative">
                    <div className="devider-text text-muted-2 text-md">Sign In with More Methods</div>
                  </div>
                </div>
                <div className="social-login py-4 px-2">
                  <ul className="row align-items-center justify-content-between g-3 p-0 m-0">
                    <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2 full-width"><i className="fa-brands fa-facebook color--facebook fs-2" /></Link></li>
                    <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-whatsapp color--whatsapp fs-2" /></Link></li>
                    <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-linkedin color--linkedin fs-2" /></Link></li>
                    <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-dribbble color--dribbble fs-2" /></Link></li>
                    <li className="col"><Link to="#" className="square--60 border br-dashed rounded-2"><i className="fa-brands fa-twitter color--twitter fs-2" /></Link></li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer align-items-center justify-content-center">
                <p>Don't have an account yet?<Link to="signup.html" className="text-primary fw-medium ms-1">Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal */}
        {/* Choose Currency Modal */}
        <div className="modal modal-lg fade" id="currencyModal" tabIndex={-1} aria-labelledby="currenyModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title fs-6" id="currenyModalLabel">Select Your Currency</h4>
                <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
              </div>
              <div className="modal-body">
                <div className="allCurrencylist">
                  <div className="suggestedCurrencylist-wrap mb-4">
                    <div className="d-inline-block mb-0 ps-3">
                      <h5 className="fs-6 fw-bold">Suggested Currency For you</h5>
                    </div>
                    <div className="suggestedCurrencylists">
                      <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2 gy-2 gx-3 m-0 p-0">
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">United State Dollar</div>
                            <div className="text-muted-2 text-md text-uppercase">USD</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Pound Sterling</div>
                            <div className="text-muted-2 text-md text-uppercase">GBP</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency active" to="#">
                            <div className="text-dark text-md fw-medium">Indian Rupees</div>
                            <div className="text-muted-2 text-md text-uppercase">Inr</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Euro</div>
                            <div className="text-muted-2 text-md text-uppercase">EUR</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Australian Dollar</div>
                            <div className="text-muted-2 text-md text-uppercase">aud</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Thai Baht</div>
                            <div className="text-muted-2 text-md text-uppercase">thb</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="suggestedCurrencylist-wrap">
                    <div className="d-inline-block mb-0 ps-3">
                      <h5 className="fs-6 fw-bold">All Currencies</h5>
                    </div>
                    <div className="suggestedCurrencylists">
                      <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2 gy-2 gx-3 m-0 p-0">
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">United State Dollar</div>
                            <div className="text-muted-2 text-md text-uppercase">USD</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Property currency</div>
                            <div className="text-muted-2 text-md text-uppercase">GBP</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Argentine Peso</div>
                            <div className="text-muted-2 text-md text-uppercase">EUR</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Azerbaijani Manat</div>
                            <div className="text-muted-2 text-md text-uppercase">Inr</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Australian Dollar</div>
                            <div className="text-muted-2 text-md text-uppercase">aud</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Bahraini Dinar</div>
                            <div className="text-muted-2 text-md text-uppercase">thb</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Brazilian Real</div>
                            <div className="text-muted-2 text-md text-uppercase">USD</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Bulgarian Lev</div>
                            <div className="text-muted-2 text-md text-uppercase">GBP</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Canadian Dollar</div>
                            <div className="text-muted-2 text-md text-uppercase">EUR</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Chilean Peso</div>
                            <div className="text-muted-2 text-md text-uppercase">Inr</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Colombian Peso</div>
                            <div className="text-muted-2 text-md text-uppercase">aud</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Danish Krone</div>
                            <div className="text-muted-2 text-md text-uppercase">thb</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Egyptian Pound</div>
                            <div className="text-muted-2 text-md text-uppercase">USD</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Hungarian Forint</div>
                            <div className="text-muted-2 text-md text-uppercase">GBP</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Japanese Yen</div>
                            <div className="text-muted-2 text-md text-uppercase">EUR</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Jordanian Dinar</div>
                            <div className="text-muted-2 text-md text-uppercase">Inr</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Kuwaiti Dinar</div>
                            <div className="text-muted-2 text-md text-uppercase">aud</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Malaysian Ringgit</div>
                            <div className="text-muted-2 text-md text-uppercase">thb</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCurrency" to="#">
                            <div className="text-dark text-md fw-medium">Singapore Dollar</div>
                            <div className="text-muted-2 text-md text-uppercase">thb</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Choose Countries Modal */}
        <div className="modal modal-lg fade" id="countryModal" tabIndex={-1} aria-labelledby="countryModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title fs-6" id="countryModalLabel">Select Your Country</h4>
                <Link to="#" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-square-xmark" /></Link>
              </div>
              <div className="modal-body">
                <div className="allCountrieslist">
                  <div className="suggestedCurrencylist-wrap mb-4">
                    <div className="d-inline-block mb-0 ps-3">
                      <h5 className="fs-6 fw-bold">Suggested Countries For you</h5>
                    </div>
                    <div className="suggestedCurrencylists">
                      <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">United State Dollar</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Pound Sterling</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry active" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Indian Rupees</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Euro</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Thai Baht</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="suggestedCurrencylist-wrap">
                    <div className="d-inline-block mb-0 ps-3">
                      <h5 className="fs-6 fw-bold">All Countries</h5>
                    </div>
                    <div className="suggestedCurrencylists">
                      <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">United State Dollar</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Property currency</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Argentine Peso</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Azerbaijani Manat</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Australian Dollar</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Bahraini Dinar</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Brazilian Real</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Bulgarian Lev</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Canadian Dollar</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Chilean Peso</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Colombian Peso</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Danish Krone</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Egyptian Pound</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Hungarian Forint</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Japanese Yen</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Jordanian Dinar</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Kuwaiti Dinar</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Malaysian Ringgit</div>
                          </Link>
                        </li>
                        <li className="col">
                          <Link className="selectCountry" to="#">
                            <div className="d-inline-block"><img src="https://placehold.co/100x100" className="img-fluid circle" width={35} alt="" /></div>
                            <div className="text-dark text-md fw-medium ps-2">Singapore Dollar</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video Modal */}
        <div className="modal fade" id="popup-video" tabIndex={-1} role="dialog" aria-labelledby="popupvideo" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" id="popupvideo">
              <iframe className="embed-responsive-item full-width" title="YouTube video: Example Title" height={480} src="https://www.youtube.com/embed/qN3OueBm9F4?rel=0" frameBorder={0} allowFullScreen />
            </div>
          </div>
        </div>
        {/* End Video Modal */}
        
      </div>
      {/* ============================================================== */}
      {/* End Wrapper */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* All Jquery */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* This page plugins */}
      {/* ============================================================== */}
    </div>
  );
}

export default HomeHotel;