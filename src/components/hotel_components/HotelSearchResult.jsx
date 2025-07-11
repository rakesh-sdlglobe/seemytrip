import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header02 from '../header02';
import Footer from '../footer';
import HotelSearchbar from './HotelSearchbar';
import HotelsFilters from './HotelListFilters';
import HotelList from './HotelList';
import HotelListSkeleton from './HotelListSkeleton';
import HotelsFiltersSkeleton from './HotelsFiltersSkeleton';
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
  const [MinPrice, setMinPrice] = useState(0);
  const [filterLoading, setfilterLoading] = useState(false);
  const [hotelResultList, setHotelResultList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  console.log("Hotels List:", hotelsList);
  console.log("Hotel Result List:", hotelResultList);

  // Initial load effect
  useEffect(() => {
    const searchParams = JSON.parse(localStorage.getItem('hotelSearchParams') || '{}');
    const { cityId, checkInDate, checkOutDate, Rooms, adults, children } = searchParams;

    if (cityId && checkInDate && checkOutDate && Rooms && adults) {
      // Reset states for new search
      setHotelResultList([]);
      setPageNo(1);
      setVisibleCount(6);
      setfilterLoading(false);
      
      // Clear all filter selections for new search
      setSelectAmenity("");
      setSelectMeal("");
      setSelectLocalities("");
      setselectStarRatings("");
      setSelectPrice("");
      setMinPrice(0);
      setMaxPrice(99999999);
      
      dispatch(fetchHotelsList(cityId, checkInDate, checkOutDate, Rooms, adults, children, 1, null, null, null));
    }
  }, [dispatch]);

  // Filter effect - only trigger when filters change and filterLoading is true
  useEffect(() => {
    if (!filterLoading) return; // Only proceed if filterLoading is true
    
    const searchParams = JSON.parse(localStorage.getItem('hotelSearchParams') || '{}');
    const { cityId, checkInDate, checkOutDate, Rooms, adults, children } = searchParams;

    if (cityId && checkInDate && checkOutDate && Rooms && adults) {
      const Filter = {
        MinPrice,
        MaxPrice,
        MealPlans: selectMeal,
        StarRatings: selectStarRatings,
        Localities: selectLocalities,
        Amenities: selectAmenity,
      };
      
      // Reset hotel list for filtered search
      setHotelResultList([]);
      setPageNo(1);
      setVisibleCount(6);
      
      dispatch(fetchHotelsList(cityId, checkInDate, checkOutDate, Rooms, adults, children, 1, SessionId, Filter, null));
      setfilterLoading(false); // Reset filterLoading after dispatch
    }
  }, [MaxPrice, MinPrice, selectAmenity, selectMeal, selectLocalities, selectStarRatings, selectPrice, SessionId, dispatch, filterLoading]);

  // Update hotelResultList when hotelsList changes
  useEffect(() => {
    if (hotelsList && hotelsList.length > 0) {
      setHotelResultList(hotelsList); // Simply replace the list with new results
    }
  }, [hotelsList]);

  // Reset visibleCount when hotelResultList changes
  useEffect(() => {
    setVisibleCount(6);
  }, [hotelResultList]);

  const onStarRatingsFilterChange = useCallback((e) => {
    const { checked, value } = e.target;
    if(checked === true) {
      setselectStarRatings((prevValue) => prevValue !== "" ? prevValue + "|"+ value : value);
    } else {
      setselectStarRatings((prevValue) => prevValue.includes("|") ? prevValue.replace("|"+value,"") : prevValue.replace(value,""));
    }
    setfilterLoading(true);
  }, []);

  const onLocalitiesFilterChange = useCallback((e) => {
    const { checked, value } = e.target;
    if(checked === true) {
      setSelectLocalities((prevValue) => prevValue !== "" ? prevValue + "|"+ value : value);
    } else {
      setSelectLocalities((prevValue) => prevValue.includes("|") ? prevValue.replace("|"+value,"") : prevValue.replace(value,""));
    }
    setfilterLoading(true);
  }, []);

  const onMealFilterChange = useCallback((e) => {
    const { checked, value } = e.target;
    if(checked === true) {
      setSelectMeal((prevValue) => prevValue !== "" ? prevValue + "|"+ value : value);
    } else {
      setSelectMeal((prevValue) => prevValue.includes("|") ? prevValue.replace("|"+value,"") : prevValue.replace(value,""));
    }
    setfilterLoading(true);
  }, []);

  const onAmenityFilterChange = useCallback((e) => {
    const { checked, value } = e.target;
    if(checked === true) {
      setSelectAmenity((prevValue) => prevValue !== "" ? prevValue + "|"+ value : value);
    } else {
      setSelectAmenity((prevValue) => prevValue.includes("|") ? prevValue.replace("|"+value,"") : prevValue.replace(value,""));
    }
    setfilterLoading(true);
  }, []);

  const onFilterChange = useCallback((e) => {
    const { checked, value } = e.target;
    if(checked === true) {
      setMinPrice(value.split("|")[0]);
      setMaxPrice(value.split("|")[1]);
      setSelectPrice(value);
    } else {
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
    
    const searchParams = JSON.parse(localStorage.getItem('hotelSearchParams') || '{}');
    const { cityId, checkInDate, checkOutDate, Rooms, adults, children } = searchParams;

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
                {(loading || filterLoading) && !filters ? (
                  <HotelsFiltersSkeleton />
                ) : filters ? (
                  <HotelsFilters
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
                  />
                ) : null}
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12">
                {loading || filterLoading ? (
                  <HotelListSkeleton count={6} />
                ) : hotelsList && hotelsList.length > 0 ? (
                  <>
                    <HotelList hotelsList={hotelsList.slice(0, visibleCount)} />
                    {visibleCount < hotelsList.length && (
                      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                        <button
                          className="btn btn-primary"
                          onClick={() => setVisibleCount((prev) => prev + 6)}
                        >
                          Show More
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div style={{textAlign: 'center', padding: '2rem', color: '#888'}}>
                    <img src="/images/no-hotels.png" alt="No hotels found" style={{width: '80px', marginBottom: '1rem', opacity: 0.7}} />
                    <div>No hotels found for your search.</div>
                  </div>
                )}
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