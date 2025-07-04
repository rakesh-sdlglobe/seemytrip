import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header02 from '../header02';
import Footer from '../footer';
import HotelSearchbar from './HotelSearchbar';
import HotelsFilters from './HotelListFilters';
import HotelList from './HotelList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelsList } from '../../store/Actions/hotelActions';
import { selectHotelsList,selectFilter , selectSessionId, selectTotalHotel, selectTotalPages} from '../../store/Selectors/hotelSelectors';
import { selectHotelsLoading } from '../../store/Selectors/hotelSelectors';

const HotelSearchResult = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hotelsList = useSelector(selectHotelsList);
  const filters = useSelector(selectFilter);
  const TotalHotel =  useSelector(selectTotalHotel);
  const TotalPages =  useSelector(selectTotalPages);
  const SessionId =  useSelector(selectSessionId);
  const loading = useSelector(selectHotelsLoading)
  const [selectAmenity, setSelectAmenity] = useState(""); 
  const [selectMeal, setSelectMeal] = useState(""); 
  const [selectLocalities, setSelectLocalities] = useState(""); 
  const [selectStarRatings, setselectStarRatings] = useState(""); 
  const [selectPrice, setSelectPrice] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [MaxPrice, setMaxPrice] = useState(99999999);
  const [MinPrice, setMinPrice] = useState(selectFilter ? selectFilter.MinPrice : 0);
  const [filterLoading, setfilterLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hotelResultList, setHotelResultList] = useState([]);


  console.log("Hotels List:", hotelsList);

  console.log("Filters:", hotelResultList);

  useEffect(() => {
    // Get search parameters from localStorage
    const searchParams = JSON.parse(localStorage.getItem('hotelSearchParams') || '{}');
    const { cityId, checkInDate, checkOutDate, Rooms, adults, children } = searchParams;

    // Dispatch the API call if we have the required parameters
    if (cityId && checkInDate && checkOutDate && Rooms && adults) {
      dispatch(fetchHotelsList(cityId, checkInDate, checkOutDate, Rooms, adults, children, 1, null, null, null));
      
    }
  }, [dispatch]);
  

const loadMoreHotels = useCallback(() => {
  if (isLoadingMore) return;

  const searchParams = JSON.parse(localStorage.getItem("hotelSearchParams") || "{}");
  const { cityId, checkInDate, checkOutDate, Rooms, adults, children } = searchParams;



  if (cityId && checkInDate && checkOutDate && Rooms && adults && !filterLoading) {
    const Filter = {
      MinPrice,
      MaxPrice,
      MealPlans: selectMeal,
      StarRatings: selectStarRatings,
      Localities: selectLocalities,
      Amenities: selectAmenity,
    };

    setIsLoadingMore(true);
    dispatch(
      fetchHotelsList(
        cityId,
        checkInDate,
        checkOutDate,
        Rooms,
        adults,
        children,
        pageNo + 1,
        SessionId,
        Filter,
        null
      )
    ).finally(() => {
      setPageNo(prev => prev + 1);
      setIsLoadingMore(false);
    });
  }
}, [
  isLoadingMore,
  MinPrice,
  MaxPrice,
  selectMeal,
  selectStarRatings,
  selectLocalities,
  selectAmenity,
  pageNo,
  SessionId,
  dispatch,
  filterLoading
]);

  useEffect(() => {
    // Get search parameters from localStorage
    const searchParams = JSON.parse(localStorage.getItem('hotelSearchParams') || '{}');
    const { cityId, checkInDate, checkOutDate, Rooms, adults, children } = searchParams;

    // Dispatch the API call if we have the required parameters
    if (cityId && checkInDate && checkOutDate && Rooms && adults && filterLoading) {
      const Filter = {
      MinPrice,
      MaxPrice,
      MealPlans: selectMeal,
      StarRatings: selectStarRatings,
      Localities: selectLocalities,
      Amenities: selectAmenity,
    };
      dispatch(fetchHotelsList(cityId, checkInDate, checkOutDate, Rooms, adults, children, 1, SessionId, Filter, null));
    }
  }, [MaxPrice,MinPrice,selectAmenity, selectMeal, selectLocalities, selectStarRatings, selectPrice, pageNo,SessionId, dispatch, filterLoading]);

  useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= docHeight - 100) {
      if(!filterLoading && !isLoadingMore && pageNo < TotalPages) {
          loadMoreHotels();
      }
      
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [isLoadingMore,
  MinPrice,
  MaxPrice,
  selectMeal,
  selectStarRatings,
  selectLocalities,
  selectAmenity,
  pageNo,
  SessionId,
  dispatch,
  filterLoading,
  loadMoreHotels,
  TotalPages
]);


useEffect(() => {
  if (hotelsList) {
   
    setHotelResultList((prev) => {
      console.log("Previous Hotels:", prev);
      console.log("New Hotels:", hotelsList);
       const existingIds = new Set(prev.map(hotel => hotel.HotelProviderSearchId));
      const newHotels = hotelsList.filter(hotel => !existingIds.has(hotel.HotelProviderSearchId));
      return [...prev, ...newHotels];
    });
  }}, [hotelsList]);
  
const onStarRatingsFilterChange = useCallback((e) => {
    const { id, checked, type, value } = e.target;
    if(checked === true)
      {
        
      setselectStarRatings((prevValue) => prevValue !== "" ? prevValue + "|"+ value : value);
    }else{
      setselectStarRatings((prevValue) => prevValue.includes("|") ? prevValue.replace("|"+value,"") : prevValue.replace(value,"") );
    }
    setfilterLoading(true);
  }, []);

const onLocalitiesFilterChange = useCallback((e) => {
    const { id, checked, type, value } = e.target;
    if(checked === true)
      {
      setSelectLocalities((prevValue) => prevValue !== "" ? prevValue + "|"+ value : value);
    }else{
      setSelectLocalities((prevValue) => prevValue.includes("|") ? prevValue.replace("|"+value,"") : prevValue.replace(value,"") );
    }
    setfilterLoading(true);
  }, []);
  
const onMealFilterChange = useCallback((e) => {
    const { id, checked, type, value } = e.target;
    if(checked === true)
      {
        
      setSelectMeal((prevValue) => prevValue !== "" ? prevValue + "|"+ value : value);
    }else{
      setSelectMeal((prevValue) => prevValue.includes("|") ? prevValue.replace("|"+value,"") : prevValue.replace(value,"") );
    }
    setfilterLoading(true);
  }, []);
  const onAmenityFilterChange = useCallback((e) => {
    const { id, checked, type, value } = e.target;
    if(checked === true)
      {
      setSelectAmenity((prevValue) => prevValue !== "" ? prevValue + "|"+ value : value);
    }else{
      setSelectAmenity((prevValue) => prevValue.includes("|") ? prevValue.replace("|"+value,"") : prevValue.replace(value," ") );
    }
    setfilterLoading(true);
  }, []);
  const onFilterChange = useCallback((e) => {
    const { id, checked, type,MaxPrice,MinPrice,value } = e.target;
    if(checked === true)
      {
        setMinPrice(value.split("|")[0]);
        setMaxPrice(value.split("|")[1]);
      setSelectPrice(value);
    }else{
      setMinPrice(0);
        setMaxPrice(999999999);
      setSelectPrice("");
    }
    setfilterLoading(true);
  }, []);

  const handleClearAll = useCallback(() => {
    setMinPrice(0);
    setMaxPrice(999999999);
    setSelectAmenity("");
    setSelectMeal("");
    setSelectLocalities("");
    setselectStarRatings("");
    setSelectPrice("");
    setPageNo(1);
    setHotelResultList([]);
   // Get search parameters from localStorage
    const searchParams = JSON.parse(localStorage.getItem('hotelSearchParams') || '{}');
    const { cityId, checkInDate, checkOutDate, Rooms, adults, children } = searchParams;

    // Dispatch the API call if we have the required parameters
    if (cityId && checkInDate && checkOutDate && Rooms && adults) {
      dispatch(fetchHotelsList(cityId, checkInDate, checkOutDate, Rooms, adults, children, 1, null, null, null));
      
    }
  }, [dispatch]);
  
  const searchParams = JSON.parse(localStorage.getItem('hotelSearchParams') || '{}');

  return (
    <div>
      <div id="preloader">
        <div className="preloader">
          <span />
          <span />
        </div>
      </div>
      <div id="main-wrapper">
        <Header02 />
        <div className="clearfix" />
        <HotelSearchbar searchParams={searchParams} />
        <section className="gray-simple">
          <div className="container">
            <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
              <div className="col-xl-3 col-lg-4 col-md-12">
                {filters ? <HotelsFilters 
                  filters={filters}
                  TotalHotel={TotalHotel}
                  onFilterChange={onFilterChange}
                  onAmenityFilterChange={onAmenityFilterChange}
                  selectAmenity={selectAmenity}
                  selectMeal={selectMeal}
                  onMealFilterChange={onMealFilterChange}
                  selectLocalities={selectLocalities}
                  onLocalitiesFilterChange={onLocalitiesFilterChange}
                  selectStarRatings={selectStarRatings}
                  onStarRatingsFilterChange={onStarRatingsFilterChange}
                  selectPrice={selectPrice}
                  onClearAll={handleClearAll}
                /> :<></>}
                
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12">
                {hotelResultList ?
                <HotelList hotelsList={hotelResultList} />
                :<> </>
                }
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default React.memo(HotelSearchResult); 