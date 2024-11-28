import React, { useEffect } from 'react';
import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import About from './components/about';
import PageNotFound from './components/404';
import AddListing from './components/add-listing';
import Blogdetail from './components/blog-detail';
import Blog from './components/blog';
import BookingPage from './components/train_search_result/booking-page.jsx';
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
import FlightList01 from './components/train_search_result/TrainList.jsx';
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
import BookingPage2 from './components/bookingpage-02.jsx';
import BookingPage3 from './components/bookingpage-03.jsx';
import BookingPageSuccess from './components/bookingpage-success';
import MyBooking from './components/my-booking.jsx'
import Travelers from './components/travelers.jsx'
import PaymentDetails from './components/payment-detail.jsx'
import MyWishlists from './components/my-wishlists.jsx';
import Settings from './components/settings.jsx'
import DeleteAccount from './components/delete-account.jsx'
import { useDispatch } from 'react-redux';
import { setUser } from './store/Actions/authActions';
import FlightList from './components/flight_components/flight_list.jsx';
import { FlightBookingpage01 } from './components/flight_components/flight_bookingpage.jsx';
import FlightBookingPage02 from './components/flight_bookingpage02.jsx';
import { HotelBookingPage } from './components/hotel_components/BookingPage.jsx';
import HotelBookingpage02 from './components/HotelBookingpage02.jsx';
import HomeCruise from './components/home-cruise.jsx';
import BusinessTrourism from './components/BusinessTrourism.jsx';
import HomeBus from './components/homebus.jsx';
import { CabBookingPage } from './components/cab_components/cab_booking_page.jsx';
import CabList from './components/cab_components/cab_list_page.jsx';
import Bookingpayment from './components/cab_components/booking_payment-page.jsx';
import { BusBookingPage } from './components/bus_components/bus_booking_page.jsx';
import BusList from './components/bus_components/bus_list_page.jsx';
import BusBookingPayment from './components/bus_components/bus_booking_payment.jsx';
import CruiseList from './components/cruise_components/Cruise_list_page.jsx';
import CruiseResultpage from './components/cruise_components/Cruise_result_page.jsx';
import CruiseBookingPage from './components/cruise_components/Cruise_booking_page.jsx';
import CruiseBookingPayment from './components/bus_components/bus_booking_payment.jsx';
import MedicalTrourism from './components/Home-Medicaltourism.jsx';
import BtList from './components/business_tourism/bt_list_page.jsx';
import { BtBookingPage } from './components/business_tourism/bt_booking_page.jsx';
import BtBookingPayment from './components/business_tourism/booking_payment-page.jsx';
import MtBookingPage from './components/medical_tourism/mt_booking_page.jsx';
import MtList from './components/medical_tourism/mt_list_page.jsx';
import MtBookingPayment from './components/medical_tourism/booking_payment-page.jsx';
import TrainSearchResultList from './components/train_search_result/train_search-result.jsx';

import OTPModal from './components/otp-modal.jsx';
import SupportPage from './components/SupportPage.jsx';
import TrainList01 from './components/train_search_result/TrainList.jsx';
import CardOffers from './components/Offers/Offers_Result.jsx';
import TourGuides from './components/Guides/Guides.jsx';
import SelfDriveCars from './components/Self Drive/Selfdrivecars.jsx';
import Photographers from './components/Photographer/photographer.jsx';
import HomeStaysVillas from './components/Homestays&villas/HomeStaysVillas.jsx';
import TravelInsurance from './components/TravelInsurance/TravelInsurance.jsx';
import Packages from './components/packages/Packages.jsx';
import GiftCards from './components/Giftcards/GiftCards.jsx';
import TrainBookingDetails from './components/train_search_result/TrainBookingDetails.jsx';
import TrainBooking from './components/train_search_result/trainlistcard.jsx';
import TrainRunningStatus from './components/Features/TrainRunningStatus.jsx';
import PNRStatusEnquiry from './components/Features/PNRStatusEnquiry.jsx';
import TrainSeatAvailability from './components/Features/TrainSeatAvailability.jsx';
import Searchbyname from './components/Features/Searchbyname.jsx';
import SearchbyStation from './components/Features/SearchbyStation.jsx';
import TatkalRailwayreservation from './components/Features/TatkalRailwayreservation.jsx';
import Platformlocator from './components/Features/Platformlocator.jsx';


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
          {/* Core Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<About />} />
          
          {/* Authentication & User Management */}
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/two-factor-auth" element={<TwofactorAuth />} />
          <Route path="/otp-modal" element={<OTPModal />} />
          
          {/* User Profile & Settings */}
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="/my-booking" element={<MyBooking />} />
          <Route path="/my-wishlists" element={<MyWishlists />} />
          <Route path="/travelers" element={<Travelers />} />
          
          {/* Train Related Routes */}
          <Route path="/Train-list-01" element={<TrainList01 />} />
          <Route path="/train-result" element={<TrainSearchResultList />} />
          <Route path="/booking-page/:trainName" element={<BookingPage />} />
          <Route path="/booking-page-2" element={<BookingPage2 />} />
          <Route path="/booking-page-3" element={<BookingPage3 />} />
          <Route path="/booking-page-success" element={<BookingPageSuccess />} />
          <Route path="/trainbookingdetails" element={<TrainBookingDetails />} />
          <Route path="/train-card" element={<TrainBooking />} />
          {/* Train Related Features */}
          <Route path="/train-running-status" element={<TrainRunningStatus />} />
          <Route path="/pnr-status" element={<PNRStatusEnquiry />} />
          <Route path="/train-seat-availability" element={<TrainSeatAvailability />} />
          <Route path="/search-by-name" element={<Searchbyname />} />
          <Route path="/search-by-station" element={<SearchbyStation />} />
          <Route path="/tatkal-railway-reservation" element={<TatkalRailwayreservation/>}/>
          <Route path="/platform-locator" element={<Platformlocator/>}/>
          {/* Flight Related Routes */}
          <Route path="/flight-list" element={<FlightList />} />
          <Route path="/flight-Bookingpage" element={<FlightBookingpage01 />} />
          <Route path="/flight-Bookingpage02" element={<FlightBookingPage02 />} />
          
          {/* Hotel Related Routes */}
          <Route path="/hotel-bookingpage" element={<HotelBookingPage />} />
          <Route path="/hotel-bookingpage02" element={<HotelBookingpage02 />} />
          
          {/* Transportation Services */}
          {/* Cab Routes */}
          <Route path="/cabbookingpage" element={<CabBookingPage />} />
          <Route path="/cab-list" element={<CabList />} />
          <Route path="/cabBookingpayment" element={<Bookingpayment />} />
          
          {/* Bus Routes */}
          <Route path="/busbookingpage" element={<BusBookingPage />} />
          <Route path="/bus-list" element={<BusList />} />
          <Route path="/busBookingpayment" element={<BusBookingPayment />} />
          
          {/* Cruise Routes */}
          <Route path="/home-cruise" element={<HomeCruise />} />
          <Route path="/cruisebookingpage" element={<CruiseBookingPage />} />
          <Route path="/cruise-list" element={<CruiseList />} />
          
          {/* Tourism Services */}
          {/* Business Tourism */}
          <Route path="/home-businesstourism" element={<BusinessTrourism />} />
          <Route path="/btbookingpage" element={<BtBookingPage />} />
          <Route path="/bt-list" element={<BtList />} />
          <Route path="/btBookingPayment" element={<BtBookingPayment />} />
          
          {/* Medical Tourism */}
          <Route path="/home-medicaltourism" element={<MedicalTrourism />} />
          <Route path="/mtbookingpage" element={<MtBookingPage />} />
          <Route path="/mt-list" element={<MtList />} />
          <Route path="/mtBookingPayment" element={<MtBookingPayment />} />
          
          {/* Additional Services */}
          <Route path="/offers" element={<CardOffers />} />
          <Route path="/guides" element={<TourGuides />} />
          <Route path="/selfdrivecars" element={<SelfDriveCars />} />
          <Route path="/photographers" element={<Photographers />} />
          <Route path="/homestaysvillas" element={<HomeStaysVillas />} />
          <Route path="/travelinsurance" element={<TravelInsurance />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/giftcards" element={<GiftCards />} />
          
          {/* Support & Help */}
          <Route path="/support" element={<SupportPage />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          {/* Misc Pages */}
          <Route path="/error-page" element={<PageNotFound />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* ... remaining routes ... */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
