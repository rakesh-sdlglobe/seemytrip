import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header02 from '../header02';
import Footer from '../footer';
import HotelSearchbar from './HotelSearchbar';
import HotelsFilters from './HotelListFilters';
import HotelList from './HotelList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelsList } from '../../store/Actions/hotelActions';
import { selectHotelsList } from '../../store/Selectors/hotelSelectors';
import { selectHotelsLoading } from '../../store/Selectors/hotelSelectors';

const HotelSearchResult = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hotelsList = useSelector(selectHotelsList);
  const loading = useSelector(selectHotelsLoading)

  console.log("17 Hotels List:", hotelsList);

  const [filters, setFilters] = useState({
    bedTypes: {
      doubleBed: false,
      twoBeds: false,
      singleBed: false,
      threeBeds: false,
      kingBed: false
    },
    popularFilters: {
      freeCancellation: false,
      bookAtOne: false,
      payAtHotel: false,
      freeBreakfast: false
    },
    priceRange: 500,
    customerRating: null,
    amenities: {
      freeWifi: false,
      breakfast: false,
      pool: false,
      parking: false,
      airConditioning: false
    }
  });

  useEffect(() => {
    // Get search parameters from localStorage
    const searchParams = JSON.parse(localStorage.getItem('hotelSearchParams') || '{}');
    const { cityId, checkInDate, checkOutDate, Rooms, adults, children } = searchParams;

    // Dispatch the API call if we have the required parameters
    if (cityId && checkInDate && checkOutDate && Rooms && adults) {
      dispatch(fetchHotelsList(cityId, checkInDate, checkOutDate, Rooms, adults, children));
    }
  }, [dispatch]);

  // useEffect(() => {
  //   // Log the hotels list whenever it changes
  //   console.log('57 Hotels List:', hotelsList);
  // }, [hotelsList]);

  const onFilterChange = useCallback((e) => {
    const { id, checked, type } = e.target;
    
    setFilters(prevFilters => {
      if (type === 'checkbox') {
        // Handle bed types
        if (id in prevFilters.bedTypes) {
          return {
            ...prevFilters,
            bedTypes: {
              ...prevFilters.bedTypes,
              [id]: checked
            }
          };
        }
        
        // Handle popular filters
        if (id in prevFilters.popularFilters) {
          return {
            ...prevFilters,
            popularFilters: {
              ...prevFilters.popularFilters,
              [id]: checked
            }
          };
        }
        
        // Handle amenities
        if (id in prevFilters.amenities) {
          return {
            ...prevFilters,
            amenities: {
              ...prevFilters.amenities,
              [id]: checked
            }
          };
        }
      }
      
      return prevFilters;
    });
  }, []);

  const handleClearAll = useCallback(() => {
    setFilters({
      bedTypes: {
        doubleBed: false,
        twoBeds: false,
        singleBed: false,
        threeBeds: false,
        kingBed: false
      },
      popularFilters: {
        freeCancellation: false,
        bookAtOne: false,
        payAtHotel: false,
        freeBreakfast: false
      },
      priceRange: 500,
      customerRating: null,
      amenities: {
        freeWifi: false,
        breakfast: false,
        pool: false,
        parking: false,
        airConditioning: false
      }
    });
  }, []);

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
        <HotelSearchbar />
        <section className="gray-simple">
          <div className="container">
            <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
              <div className="col-xl-3 col-lg-4 col-md-12">
                <HotelsFilters 
                  filters={filters}
                  onFilterChange={onFilterChange}
                  onClearAll={handleClearAll}
                />
              </div>
              <div className="col-xl-9 col-lg-8 col-md-12">
                <HotelList filters={filters} hotelsList={hotelsList} />
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