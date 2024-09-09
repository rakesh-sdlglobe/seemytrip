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
import Footer from './footer';
import TopHeader from './topHeader';
import SideBarProfilePage from './sidebar_profilepage';
import PersonalWishList from './personal_wishlist';


const MyWishlists = () => {
      return (
        <div>
          
          {/* Preloader - style you can find in spinners.css */}
          <div id="preloader">
            <div className="preloader"><span /><span /></div>
          </div>
          {/* Main wrapper - style you can find in pages.scss */}
          <div id="main-wrapper">
            {/* Top header  */}
            {/* Start Navigation */}
            <Header02/>
            {/* End Navigation */}
            <div className="clearfix" />
            {/* Top header  */}
            {/* ============================ User Dashboard Menu ============================ */}
          <TopHeader/>
            {/* ============================ End user Dashboard Menu ============================ */}
            {/* ============================ Booking Page ================================== */}
            <section className="pt-5 gray-simple position-relative">
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
                    <button className="btn btn-dark fw-medium full-width d-block d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDashboard" aria-controls="offcanvasDashboard"><i className="fa-solid fa-gauge me-2" />Dashboard
                      Navigation</button>
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasDashboard" aria-labelledby="offcanvasScrollingLabel">
                      <div className="offcanvas-header gray-simple">
                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                      </div>
                    <TopHeader/>
                    </div>
                  </div>
                </div>
                <div className="row align-items-start justify-content-between gx-xl-4">
                  <SideBarProfilePage/>
                  <div className="col-xl-8 col-lg-8 col-md-12">
                    {/* Personal Information */}
                    <PersonalWishList/>
                  </div>
                </div>
              </div>
            </section>
            {/* ============================ Booking Page End ================================== */}
            {/* ============================ Footer Start ================================== */}
             <Footer/>
            {/* ============================ Footer End ================================== */}
          </div>
        </div>
      );
    }
export default MyWishlists;