import { useDispatch } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from "./components/404";
import About from "./components/about";
import AddListing from "./components/add-listing";
import Blog from "./components/blog";
import Blogdetail from "./components/blog-detail";
import BookingPage2 from "./components/bookingpage-02.jsx";
import BookingPage3 from "./components/bookingpage-03.jsx";
import BookingPageSuccess from "./components/bookingpage-success";
import {
  default as BusBookingPayment,
  default as CruiseBookingPayment,
} from "./components/bus_components/bus_booking_payment.jsx";
import BusList from "./components/bus_components/bus_list_page.jsx";
import BtBookingPayment from "./components/business_tourism/booking_payment-page.jsx";
import { BtBookingPage } from "./components/business_tourism/bt_booking_page.jsx";
import BtList from "./components/business_tourism/bt_list_page.jsx";
import BusinessTrourism from "./components/BusinessTrourism.jsx";
import Bookingpayment from "./components/cab_components/booking_payment-page.jsx";
import { CabBookingPage } from "./components/cab_components/cab_booking_page.jsx";
import CabList from "./components/cab_components/cab_list_page.jsx";
import CarDetails from "./components/car-detail";
import CarList01 from "./components/car-list-01";
import CarList02 from "./components/car-list-02";
import CarList03 from "./components/car-list-03";
import CareerPage from "./components/career-page";
import ClassicBlog from "./components/classic-blog";
import CompareListing from "./components/compare-listing";
import ContactV1 from "./components/contact-v1";
import ContactV2 from "./components/contact-v2";
import CruiseBookingPage from "./components/cruise_components/Cruise_booking_page.jsx";
import CruiseList from "./components/cruise_components/Cruise_list_page.jsx";
import DeleteAccount from "./components/delete-account.jsx";
import Destination01 from "./components/destination-01";


import Destination02 from "./components/destination-02";
import Destination03 from "./components/destination-03";
import DestinationDetail from "./components/destination-detail";
import Faq from "./components/faq";
import FlightDetail from "./components/Flight-detail";
import FlightList02 from "./components/flight-list-02";
import FlightBookingPage02 from "./components/flight_bookingpage02.jsx";
import { FlightBookingpage01 } from "./components/flight_components/flight_bookingpage.jsx";
import FlightList from "./components/flight_components/flight_list.jsx";
import HelpCenter from "./components/help-center";
import Home from "./components/home";
import Home02 from "./components/home-2";
import Home03 from "./components/home-3";
import Home04 from "./components/home-4";
import Home05 from "./components/home-5";
import HomeCar from "./components/home-car";
import HomeCruise from "./components/home-cruise.jsx";
import HomeFlight from "./components/home-flight";
import HomeHotel from "./components/home-hotel";
import MedicalTrourism from "./components/Home-Medicaltourism.jsx";
import HomeRental from "./components/home-rental";
import HomeStay from "./components/home-stay";
import HomeBus from "./components/homebus.jsx";
import HotelDetail02 from "./components/hotel-detail-2";
import HotelList03 from "./components/hotel-list-03.jsx";
import { HotelBookingPage } from "./components/hotel_components/BookingPage.jsx";
import HotelDetail01 from "./components/hotel_components/hotel-list-01.jsx";
import HotelBookingpage02 from "./components/HotelBookingpage02.jsx";
import JoinUs from "./components/join-us";
import MtBookingPayment from "./components/medical_tourism/booking_payment-page.jsx";
import MtBookingPage from "./components/medical_tourism/mt_booking_page.jsx";
import MtList from "./components/medical_tourism/mt_list_page.jsx";
import MyBooking from "./components/my-booking.jsx";
import MyProfile from "./components/my-profile";
import MyWishlists from "./components/my-wishlists.jsx";
import PaymentDetails from "./components/payment-detail.jsx";
import Pricing from "./components/pricing";
import PrivacyPolicy from "./components/privacy-policy";
import PropertyList from "./components/property-list-01";
import PropertyList2 from "./components/property-list-02";
import PropertyList3 from "./components/property-list-03";
import RentalDetail from "./components/rental-detail";
import Settings from "./components/settings.jsx";
import SliderHome from "./components/slider-home";
import BookingPage from "./components/train_search_result/booking-page.jsx";
import TrainSearchResultList from "./components/train_search_result/train_search-result.jsx";
import Travelers from "./components/travelers.jsx";
import TwofactorAuth from "./components/two-factor-auth";

import BackToTop from "./components/BackToTop";
import Platformlocator from "./components/Features/Platformlocator.jsx";
import PNRStatusEnquiry from "./components/Features/PNRStatusEnquiry.jsx";
import Searchbyname from "./components/Features/Searchbyname.jsx";
import SearchbyStation from "./components/Features/SearchbyStation.jsx";
import TatkalRailwayreservation from "./components/Features/TatkalRailwayreservation.jsx";
import TrainRunningStatus from "./components/Features/TrainRunningStatus.jsx";
import TrainSeatAvailability from "./components/Features/TrainSeatAvailability.jsx";
import FlightSeatSelection from "./components/flight_components/FlightSeatSelection.jsx";
import GiftCards from "./components/Giftcards/GiftCards.jsx";
import TourGuides from "./components/Guides/Guides.jsx";
import HomeStaysVillas from "./components/Homestays&villas/HomeStaysVillas.jsx";
import HotelDetails from "./components/hotel_components/HotelDetails.jsx";
import HotelImages from "./components/hotel_components/HotelImages.jsx";
import HotelReview from "./components/hotel_components/HotelReview";
import HotelConfirmation from "./components/hotel_components/hotelConfirmation.jsx";
import HotelSearchResult from "./components/hotel_components/HotelSearchResult";
import CardOffers from "./components/Offers/Offers_Result.jsx";
import Packages from "./components/packages/Packages.jsx";
import Photographers from "./components/Photographer/photographer.jsx";
import SelfDriveCars from "./components/Self Drive/Selfdrivecars.jsx";
import SupportPage from "./components/SupportPage.jsx";
import RazorpayPaymentButton from "./components/train_search_result/RazorpayPaymentButton.jsx";
import TrainBookingDetails from "./components/train_search_result/TrainBookingDetails.jsx";
import TrainList01 from "./components/train_search_result/TrainList.jsx";
import TrainBooking from "./components/train_search_result/trainlistcard.jsx";
import TravelInsurance from "./components/TravelInsurance/TravelInsurance.jsx";
import AboutUs from "./components/footer/AboutUs";
import ContactUs from "./components/footer/ContactUs";
import PrivacyPolicyFooter from "./components/footer/PrivacyPolicy";
import TermsAndConditions from "./components/footer/TermsAndConditions";
import CancellationAndRefundPolicy from "./components/footer/CancellationAndRefundPolicy";
import BusSeatLayoutPage from "./components/bus_components/BusSeatLayoutPage.jsx";
import { BusBookingPage } from "./components/bus_components/bus_booking_detail_page.jsx";
import BoardingPointsPage from "./components/bus_components/BoardingPointsPage.jsx";
import Bus_Comfirmation_Page from "./components/bus_components/Bus_Comfirmation_Page.jsx";


function App() {
  const dispatch = useDispatch();

  // useEffect(() => {

  //   const token = localStorage.getItem('authToken');
  //   const user = localStorage.getItem('user');

  //   if (token && user) {
  //     dispatch(setUser(JSON.parse(user)));
  //   }
  // }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Main/Home Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home2" element={<Home02 />} />
          <Route path="/home3" element={<Home03 />} />
          <Route path="/home4" element={<Home04 />} />
          <Route path="/home5" element={<Home05 />} />
          <Route path="/sliderhome" element={<SliderHome />} />

          {/* Authentication Routes */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/sign-in" element={<Login />} /> */}
          {/* <Route path='/register' element={<Register />} /> */}
          {/* <Route path="/sign-up" element={<Register />} /> */}
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
          <Route path="/two-factor-auth" element={<TwofactorAuth />} />
          {/* <Route path='/otp-modal' element={<OTPModal/>} /> */}

          {/* User Account Routes */}
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-booking" element={<MyBooking />} />
          <Route path="/travelers" element={<Travelers />} />
          <Route path="/payment-detail" element={<PaymentDetails />} />
          <Route path="/my-wishlists" element={<MyWishlists />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/delete-account" element={<DeleteAccount />} />

          {/* Train Routes */}
          <Route
            path="/RazorpayPaymentButton"
            element={<RazorpayPaymentButton />}
          />

          <Route path="/Train-list-01" element={<TrainList01 />} />
          <Route
            path="/booking-page"
            element={<BookingPage trainName="12976 JP MYSORE EXP" />}
          />
          <Route path="/booking-page/:trainName" element={<BookingPage />} />
          <Route path="/booking-page-2" element={<BookingPage2 />} />
          <Route path="/booking-page-3" element={<BookingPage3 />} />
          <Route
            path="/booking-page-success"
            element={<BookingPageSuccess />}
          />
          <Route path="/train-result" element={<TrainSearchResultList />} />
          <Route
            path="/trainbookingdetails"
            element={<TrainBookingDetails />}
          />
          <Route path="/train-card" element={<TrainBooking />} />

          {/* Train Features Routes */}
          <Route
            path="/train-running-status"
            element={<TrainRunningStatus />}
          />
          <Route path="/pnr-status" element={<PNRStatusEnquiry />} />
          <Route
            path="/train-seat-availability"
            element={<TrainSeatAvailability />}
          />
          <Route path="/search-by-name" element={<Searchbyname />} />
          <Route path="/search-by-station" element={<SearchbyStation />} />
          <Route
            path="/tatkal-railway-reservation"
            element={<TatkalRailwayreservation />}
          />
          <Route path="/platform-locator" element={<Platformlocator />} />

          {/* Flight Routes */}
          <Route path="/home-flight" element={<HomeFlight />} />
          <Route path="/flight-list" element={<FlightList />} />
          <Route path="/flight-list-02" element={<FlightList02 />} />
          <Route path="/flight-detail" element={<FlightDetail />} />
          <Route path="/flight-Bookingpage" element={<FlightBookingpage01 />} />
          <Route
            path="/flight-seat-selection"
            element={<FlightSeatSelection />}
          />
          <Route
            path="/flight-Bookingpage02"
            element={<FlightBookingPage02 />}
          />

          {/* Hotel Routes */}
          <Route path="/hotel-search-result" element={<HotelSearchResult />} />
          <Route path="/home-hotel" element={<HomeHotel />} />
          <Route path="/hotel-images" element={<HotelImages />} />
          <Route path="/hotel-list-03" element={<HotelList03 />} />
          <Route path="/hotel-detail-01" element={<HotelDetail01 />} />
          <Route path="/hotel-detail-02" element={<HotelDetail02 />} />
          <Route path="/hotel-bookingpage" element={<HotelBookingPage />} />
          <Route path="/hotel-bookingpage02" element={<HotelBookingpage02 />} />
          <Route path="/hotel-details" element={<HotelDetails />} />
          <Route path="/hotel-review" element={<HotelReview />} />
          <Route path="/hotel-confirmation" element={<HotelConfirmation />} />

          {/* Car & Cab Routes */}
          <Route path="/home-car" element={<HomeCar />} />
          <Route path="/car-list-01" element={<CarList01 />} />
          <Route path="/car-list-02" element={<CarList02 />} />
          <Route path="/car-list-03" element={<CarList03 />} />
          <Route path="/car-detail" element={<CarDetails />} />
          <Route path="/cabbookingpage" element={<CabBookingPage />} />
          <Route path="/cab-list" element={<CabList />} />
          <Route path="/cabBookingpayment" element={<Bookingpayment />} />

          {/* Bus Routes */}
          <Route path="/home-bus" element={<HomeBus />} />
          <Route path="/busbookingpage" element={<BusBookingPage />} />
          <Route path="/bus-list" element={<BusList />} />
          <Route path="/bus-seat-layout" element={<BusSeatLayoutPage />} />
          <Route path="/boarding-points" element={<BoardingPointsPage />} />
          <Route path="/busBookingpayment" element={<BusBookingPayment />} />
          <Route path="/bus-confirmation" element={<Bus_Comfirmation_Page/>} />

          {/* Cruise Routes */}
          <Route path="/home-cruise" element={<HomeCruise />} />
          <Route path="/cruisebookingpage" element={<CruiseBookingPage />} />
          <Route path="/cruise-list" element={<CruiseList />} />
          <Route
            path="/cruiseBookingPayment"
            element={<CruiseBookingPayment />}
          />

          {/* Tourism Routes */}
          <Route path="/home-businesstourism" element={<BusinessTrourism />} />
          <Route path="/btbookingpage" element={<BtBookingPage />} />
          <Route path="/bt-list" element={<BtList />} />
          <Route path="/btBookingPayment" element={<BtBookingPayment />} />
          <Route path="/home-medicaltourism" element={<MedicalTrourism />} />
          <Route path="/mtbookingpage" element={<MtBookingPage />} />
          <Route path="/mt-list" element={<MtList />} />
          <Route path="/mtBookingPayment" element={<MtBookingPayment />} />

          {/* Property & Rental Routes */}
          <Route path="/home-rental" element={<HomeRental />} />
          <Route path="/rental-list-01" element={<PropertyList />} />
          <Route path="/rental-list-02" element={<PropertyList2 />} />
          <Route path="/rental-list-03" element={<PropertyList3 />} />
          <Route path="/rental-detail" element={<RentalDetail />} />
          <Route path="/home-stay" element={<HomeStay />} />

          {/* Destination Routes */}
          <Route path="/destination-list-01" element={<Destination01 />} />
          <Route path="/destination-list-02" element={<Destination02 />} />
          <Route path="/destination-list-03" element={<Destination03 />} />
          <Route path="/destination-detail" element={<DestinationDetail />} />
          <Route path="/home-destination" element={<HomeStay />} />

          {/* Blog Routes */}
          <Route path="/classic-blog" element={<ClassicBlog />} />
          <Route path="/blog-grid" element={<Blog />} />
          <Route path="/single-blog" element={<Blogdetail />} />

          {/* Additional Services Routes */}
          <Route path="/offers" element={<CardOffers />} />
          <Route path="/guides" element={<TourGuides />} />
          <Route path="/selfdrivecars" element={<SelfDriveCars />} />
          <Route path="/photographers" element={<Photographers />} />
          <Route path="/homestaysvillas" element={<HomeStaysVillas />} />
          <Route path="/travelinsurance" element={<TravelInsurance />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/giftcards" element={<GiftCards />} />

          {/* Footer Info Pages */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyFooter />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route
            path="/cancellation-and-refund-policy"
            element={<CancellationAndRefundPolicy />}
          />

          {/* Miscellaneous Routes */}
          <Route path="/error-page" element={<PageNotFound />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
        <BackToTop />
      </Router>
    </div>
  );
}

export default App;
