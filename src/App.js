import React, { useEffect } from 'react';
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import About from './components/about';
import PageNotFound from './components/404';
import AddListing from './components/add-listing';
import Blogdetail from './components/blog-detail';
import Blog from './components/blog';
import BookingPage from './components/booking-page';
import CarDetails from './components/car-detail';
import CarList01 from './components/car-list-01';
import CarList02 from './components/car-list-02';
import CarList03 from './components/car-list-03';
import CareerPage from './components/career-page';
import ClassicBlog from './components/classic-blog';
import CompareListing from './components/compare-listing';
import ContactV1 from './components/contact-v1';
import ContactV2 from './components/contact-v2';
import Destination01 from './components/destination-01';
import Destination02 from './components/destination-02';
import Destination03 from './components/destination-03';
import DestinationDetail from './components/destination-detail';
import Faq from './components/faq';
import FlightDetail from './components/Flight-detail';
import FlightList01 from './components/train_serach_result/flight-list-01.jsx';
import FlightList02 from './components/flight-list-02';
import ForgotPassword from './components/forgot-password';
import HelpCenter from './components/help-center';
import Home02 from './components/home-2';
import Home03 from './components/home-3';
import Home04 from './components/home-4';
import Home05 from './components/home-5';
import HomeCar from './components/home-car';
import HomeFlight from './components/home-flight';
import HomeHotel from './components/home-hotel';
import HomeRental from './components/home-rental';
import HomeStay from './components/home-stay';
import HotelDetail02 from './components/hotel-detail-2';
import HotelDetail01 from './components/hotel-list-01';
import HotelList01 from './components/hotel-list-01';
import HotelList02 from './components/hotel-list-02';
import HotelList03 from './components/hotel-list-03';
import Register from './components/register';
import SliderHome from './components/slider-home';
import PropertyList from './components/property-list-01';
import PropertyList2 from './components/property-list-02';
import PropertyList3 from './components/property-list-03';
import RentalDetail from './components/rental-detail';
import JoinUs from './components/join-us';
import MyProfile from './components/my-profile';
import TwofactorAuth from './components/two-factor-auth'
import Pricing from './components/pricing';
import PrivacyPolicy from './components/privacy-policy';
import BookingPage2 from './components/bookingpage-02';
import BookingPage3 from './components/bookingpage-03';
import BookingPageSuccess from './components/bookingpage-success';
import MyBooking from './components/my-booking.jsx'
import Travelers from './components/travelers.jsx'
import PaymentDetails from './components/payment-detail.jsx'
import MyWishlists from './components/my-wishlists.jsx';
import Settings from './components/settings.jsx'
import DeleteAccount from './components/delete-account.jsx'
import { useDispatch } from 'react-redux';
import { setUser } from './store/Actions/authActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user');
    
    if (token && user) {
      dispatch(setUser(JSON.parse(user))); 
    }
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/home2" element={<Home02 />} />
          <Route path="/home3" element={<Home03 />} />
          <Route path="/home4" element={<Home04 />} />
          <Route path="/home5" element={<Home05 />} />
          <Route path="/sliderhome" element={<SliderHome />} />
          <Route path="/hotel-list-01" element={<HotelList01 />} />
          <Route path="/hotel-list-02" element={<HotelList02 />} />
          <Route path="/hotel-list-03" element={<HotelList03 />} />
          <Route path="/hotel-detail-01" element={<HotelDetail01 />} />
          <Route path="/hotel-detail-02" element={<HotelDetail02 />} />
          <Route path="/flight-list-01" element={<FlightList01 />} />
          <Route path="/flight-list-02" element={<FlightList02 />} />
          <Route path="/flight-detail" element={<FlightDetail />} />
          <Route path="/rental-list-01" element={<PropertyList />} />
          <Route path="/rental-list-02" element={<PropertyList2 />} />
          <Route path="/rental-list-03" element={<PropertyList3 />} />
          <Route path="/rental-detail" element={<RentalDetail />} />
          <Route path="/car-list-01" element={<CarList01 />} />
          <Route path="/car-list-02" element={<CarList02 />} />
          <Route path="/car-list-03" element={<CarList03 />} />
          <Route path="/car-detail" element={<CarDetails />} />
          <Route path="/destination-list-01" element={<Destination01 />} />
          <Route path="/destination-list-02" element={<Destination02 />} />
          <Route path="/destination-list-03" element={<Destination03 />} />
          <Route path="/destination-detail" element={<DestinationDetail />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/add-listing" element={<AddListing />} />
          <Route path="/compare-listing" element={<CompareListing />} />
          <Route path="/booking-page" element={<BookingPage />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/classic-blog" element={<ClassicBlog />} />
          <Route path="/blog-grid" element={<Blog />} />
          <Route path="/single-blog" element={<Blogdetail />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/two-factor-auth" element={<TwofactorAuth />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/career-page" element={<CareerPage />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/error-page" element={<PageNotFound />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-v1" element={<ContactV1 />} />
          <Route path="/contact-v2" element={<ContactV2 />} />
          <Route path="/home-stay" element={<HomeStay />} />
          <Route path="/home-hotel" element={<HomeHotel />} />
          <Route path="/home-flight" element={<HomeFlight />} />
          <Route path="/home-rental" element={<HomeRental />} />
          <Route path="/home-car" element={<HomeCar />} />
          <Route path="/home-destination" element={<HomeStay />} />
          <Route path= "/booking-page" element={<BookingPage/>}/>
          <Route path= "/booking-page-2" element={<BookingPage2/>}/>
          <Route path= "/booking-page-3" element={<BookingPage3/>}/>
          <Route path= "/booking-page-success" element={<BookingPageSuccess/>}/>
          <Route path= "/my-booking" element ={<MyBooking/>}/>
          <Route path= "/travelers" element ={<Travelers/>}/>
          <Route path= "/payment-detail" element ={<PaymentDetails/>}/>
          <Route path= "/my-wishlists" element ={<MyWishlists/>}/>
          <Route path= "/settings" element ={<Settings/>}/>
          <Route path= "/delete-account" element ={<DeleteAccount/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
