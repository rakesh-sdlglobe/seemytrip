import { useCallback, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBusSearch,
  fetchBusSeatLayout,
  fetchBusBoardingPoints,
} from "../../store/Actions/busActions";
import {
  selectBusSearchList,
  selectBusSearchLayoutList,
  selectBusBoardingPoints,
  selectBusSearchLoading,
  selectBusSeatLayoutLoading,
} from "../../store/Selectors/busSelectors";
import SeatSelection from "../seatselection";
import BusSeatLayoutPage from "./BusSeatLayoutPage";


const formatDateTime = (isoString) => {
  if (!isoString) return { time: "-", date: "-" };
  const dateObj = new Date(isoString);
  const time = dateObj.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const date = dateObj.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  });
  return { time, date };
};

const getDuration = (start, end) => {
  if (!start || !end) return "-";
  const startDate = new Date(start);
  const endDate = new Date(end);
  let diff = (endDate - startDate) / 1000;
  if (diff < 0) diff += 24 * 3600;
  const hours = Math.floor(diff / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  return `${hours}h ${minutes}m`;
};

const ResultSkeleton = () => (
  <div className="card list-layout-block rounded-3 p-3 mb-4">
    <div className="row">
      <div className="col-xl-4 col-lg-3 col-md">
        <div
          className="skeleton skeleton-img rounded-2 mb-3"
          style={{ width: "100%", height: 120, background: "#eee" }}
        />
      </div>
      <div className="col-xl col-lg col-md">
        <div
          className="skeleton skeleton-title mb-2"
          style={{
            width: "60%",
            height: 24,
            borderRadius: 4,
            background: "#eee",
          }}
        />
        <div
          className="skeleton skeleton-line mb-2"
          style={{
            width: "40%",
            height: 16,
            borderRadius: 4,
            background: "#eee",
          }}
        />
        <div
          className="skeleton skeleton-line mb-2"
          style={{
            width: "30%",
            height: 16,
            borderRadius: 4,
            background: "#eee",
          }}
        />
        <div
          className="skeleton skeleton-line mb-2"
          style={{
            width: "50%",
            height: 16,
            borderRadius: 4,
            background: "#eee",
          }}
        />
        <div
          className="skeleton skeleton-line mb-2"
          style={{
            width: "80%",
            height: 16,
            borderRadius: 4,
            background: "#eee",
          }}
        />
      </div>
      <div className="col-xl-auto col-lg-auto col-md-auto text-right text-md-left d-flex align-items-start align-items-md-end flex-column">
        <div
          className="skeleton skeleton-rating mb-2"
          style={{ width: 40, height: 40, borderRadius: 8, background: "#eee" }}
        />
        <div
          className="skeleton skeleton-price mb-2"
          style={{ width: 80, height: 24, borderRadius: 4, background: "#eee" }}
        />
        <div
          className="skeleton skeleton-btn"
          style={{
            width: 120,
            height: 36,
            borderRadius: 8,
            background: "#eee",
          }}
        />
      </div>
    </div>
  </div>
);

const BusResultPage = ({ filters }) => {
  const dispatch = useDispatch();
  const searchList = useSelector(selectBusSearchList);
  const seatLayout = useSelector(selectBusSearchLayoutList);
  const boardingPoints = useSelector(selectBusBoardingPoints);
  const loading = useSelector(selectBusSearchLoading);
  const seatLayoutLoading = useSelector(selectBusSeatLayoutLoading);
  const busResults = searchList?.BusSearchResult?.BusResults || [];
  const [openSeatIndex, setOpenSeatIndex] = useState(null);
  
  // Add pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const observerRef = useRef();
  const ITEMS_PER_PAGE = 5;

  // Add state for boarding/dropping points
  // const [selectedBoardingPoint, setSelectedBoardingPoint] = useState('');
  // const [selectedDroppingPoint, setSelectedDroppingPoint] = useState('');

  const getSearchParams = useCallback(() => {
    return JSON.parse(localStorage.getItem("busSearchparams") || "{}");
  }, []);

  useEffect(() => {
    const { date, fromCityId, toCityId, TokenId, EndUserIp } =
      getSearchParams();
    if (date && fromCityId && toCityId && TokenId && EndUserIp) {
      dispatch(
        fetchBusSearch({
          DateOfJourney: date,
          OriginId: fromCityId,
          DestinationId: toCityId,
          TokenId,
          EndUserIp,
        })
      );
    }
  }, [dispatch, getSearchParams]);

  const handleSeatToggle = (bus, index) => {
    if (openSeatIndex === index) {
      setOpenSeatIndex(null);
    } else {
      setOpenSeatIndex(index);
      const { TokenId, EndUserIp } = getSearchParams();

      console.log("Fetching seat layout and boarding points for bus:", bus);
      console.log("Using TokenId:", TokenId, "EndUserIp:", EndUserIp);
      console.log("TraceId:", searchList?.BusSearchResult?.TraceId);

      // Fetch seat layout data
      dispatch(
        fetchBusSeatLayout(
          TokenId,
          EndUserIp,
          bus.ResultIndex,
          searchList?.BusSearchResult?.TraceId
        )
      );

      // Fetch boarding points data using the same function pattern as fetchBusSeatLayout
      dispatch(
        fetchBusBoardingPoints(
          TokenId,
          EndUserIp,
          bus.ResultIndex,
          searchList?.BusSearchResult?.TraceId
        )
      );
    }
  };

  // Add a function to clean up bus type
  const cleanBusType = (busType) => {
    if (!busType) return "";
    
    let result = [];
    
    // Check for A/C or Non A/C - look for explicit "Non A/C" first
    if (busType.toLowerCase().includes('non a/c') || busType.toLowerCase().includes('non ac')) {
      result.push('Non A/C');
    } else if (busType.toLowerCase().includes('a/c') || busType.toLowerCase().includes('ac')) {
      result.push('A/C');
    } else {
      result.push('Non A/C');
    }
    
    // Check for Sleeper types - handle both Sleeper and Semi Sleeper
    if (busType.toLowerCase().includes('sleeper')) {
      if (busType.toLowerCase().includes('sleeper/semi sleeper') || busType.toLowerCase().includes('sleeper semi sleeper')) {
        result.push('Sleeper/Semi Sleeper');
      }
      else if (busType.toLowerCase().includes('semi sleeper') || busType.toLowerCase().includes('semi-sleeper')) {
        result.push('Semi Sleeper');
      }  else {
        result.push('Sleeper');
      }
    }
    
    // Check for Seater types - handle both Seater and Pushback
    if (busType.toLowerCase().includes('seater')) {
      if (busType.toLowerCase().includes('seater/pushback') || busType.toLowerCase().includes('seater pushback')) {
        result.push('Seater/Pushback');
      }
      else if (busType.toLowerCase().includes('pushback')) {
        result.push('Pushback');
      } else {
        result.push('Seater');
      }
    }
    
    return result.join(' ');
  };

  // Get boarding and dropping points from current bus data
  const getBoardingPoints = (bus) => {
    if (!bus || !bus.BoardingPointsDetails || bus.BoardingPointsDetails.length === 0) {
      return [];
    }
    
    return bus.BoardingPointsDetails.map(point => ({
      location: point.CityPointName,
      time: point.CityPointTime,
      phone: '7303093510',
      address: point.CityPointLocation || ''
    }));
  };

  const getDroppingPoints = (bus) => {
    if (!bus || !bus.DroppingPointsDetails || bus.DroppingPointsDetails.length === 0) {
      return [];
    }
    
    return bus.DroppingPointsDetails.map(point => ({
      location: point.CityPointName,
      time: point.CityPointTime,
      address: point.CityPointLocation || '',
      note: point.CityPointLocation || ''
    }));
  };

  const getHour = (dateTimeStr) => {
    if (!dateTimeStr) return null;
    const date = new Date(dateTimeStr);
    return date.getHours();
  };

  const TIME_BLOCKS = [
    { id: 'earlyMorning', start: 0, end: 6 },
    { id: 'morning', start: 6, end: 12 },
    { id: 'afternoon', start: 12, end: 18 },
    { id: 'evening', start: 18, end: 24 },
  ];

  const isInSelectedBlock = (hour, selectedBlocks) => {
    if (!selectedBlocks || selectedBlocks.length === 0) return true;
    return selectedBlocks.some(blockId => {
      const block = TIME_BLOCKS.find(b => b.id === blockId);
      return block && hour >= block.start && hour < block.end;
    });
  };

  // Check if bus has matching pickup points
  const hasMatchingPickupPoints = (bus) => {
    if (!filters.pickupPoints || filters.pickupPoints.length === 0) return true;
    
    const busPickupPoints = bus.BoardingPointsDetails?.map(point => point.CityPointName) || [];
    return filters.pickupPoints.some(selectedPoint => 
      busPickupPoints.includes(selectedPoint)
    );
  };

  // Check if bus has matching dropping points
  const hasMatchingDroppingPoints = (bus) => {
    if (!filters.droppingPoints || filters.droppingPoints.length === 0) return true;
    
    const busDroppingPoints = bus.DroppingPointsDetails?.map(point => point.CityPointName) || [];
    return filters.droppingPoints.some(selectedPoint => 
      busDroppingPoints.includes(selectedPoint)
    );
  };

  const filteredResults = busResults.filter((bus) => {
    // Bus type filtering - improved logic for combinations
    if (filters.busTypes.length > 0) {
      const busType = bus.BusType ? bus.BusType.toLowerCase() : '';
      
      // Check if bus matches ALL selected filter types (AND logic, not OR)
      const hasMatchingType = filters.busTypes.every(filterType => {
        const filterTypeLower = filterType.toLowerCase();
        
        // Handle AC/Non-AC filtering more precisely
        if (filterTypeLower === 'ac') {
          // Only match if bus type contains A/C but NOT "Non A/C"
          return (busType.includes('a/c') || busType.includes('ac')) && 
                 !busType.includes('non a/c') && 
                 !busType.includes('nonac');
        }
        
        if (filterTypeLower === 'nonac') {
          // Only match if bus type contains "Non A/C" or doesn't contain A/C at all
          return busType.includes('non a/c') || 
                 busType.includes('nonac') || 
                 (!busType.includes('a/c') && !busType.includes('ac'));
        }
        
        // Handle other filter types
        if (filterTypeLower === 'sleeper') {
          return busType.includes('sleeper') && !busType.includes('semi sleeper');
        }
        
        if (filterTypeLower === 'semisleeper') {
          return busType.includes('semi sleeper') || busType.includes('semi-sleeper');
        }
        
        // Default matching for other types
        return busType.includes(filterTypeLower.replace(/[\s\-]/g, ''));
      });
      
      if (!hasMatchingType) {
        return false;
      }
    }

    // Pickup points filtering
    if (!hasMatchingPickupPoints(bus)) {
      return false;
    }

    // Dropping points filtering
    if (!hasMatchingDroppingPoints(bus)) {
      return false;
    }

    const price = bus.BusPrice?.PublishedPriceRoundedOff || 0;
    if (price < (filters.priceMin || 0) || price > filters.priceMax)
      return false;

    if (
      (filters.rating45 && 4.2 < 4.5) ||
      (filters.rating4 && 4.2 < 4) ||
      (filters.rating35 && 4.2 < 3.5)
    )
      return false;

    // Departure time filter
    const depHour = getHour(bus.DepartureTime);
    if (!isInSelectedBlock(depHour, filters.departureTimes)) return false;

    // Arrival time filter
    const arrHour = getHour(bus.ArrivalTime);
    if (!isInSelectedBlock(arrHour, filters.arrivalTimes)) return false;

    return true;
  });

  let sortedResults = [...filteredResults];
  if (filters.priceSort === 'lowToHigh') {
    sortedResults.sort((a, b) => (a.BusPrice?.PublishedPriceRoundedOff || 0) - (b.BusPrice?.PublishedPriceRoundedOff || 0));
  } else if (filters.priceSort === 'highToLow') {
    sortedResults.sort((a, b) => (b.BusPrice?.PublishedPriceRoundedOff || 0) - (a.BusPrice?.PublishedPriceRoundedOff || 0));
  }

  // Intersection Observer for infinite scroll
  const lastBusElementRef = useCallback(node => {
    if (loading) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMoreBuses()) {
        loadMoreBuses();
      }
    });
    if (node) observerRef.current.observe(node);
  }, [loading]);

  const hasMoreBuses = () => {
    return currentPage * ITEMS_PER_PAGE < sortedResults.length;
  };

  const loadMoreBuses = () => {
    if (!isLoadingMore && hasMoreBuses()) {
      setIsLoadingMore(true);
      // Simulate loading delay
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsLoadingMore(false);
      }, 500);
    }
  };

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Get paginated results
  const paginatedResults = sortedResults.slice(0, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="col-xl-9 col-lg-5 col-md-0 mt-lg-0">
      {/* <div className="row align-items-center justify-content-between">
        <div className="col-xl-4 col-lg-4 col-md-4">
          <h5 className="fw-bold fs-6 mb-lg-0 mb-3">
            Showing {loading ? "..." : paginatedResults.length} of {sortedResults.length} Search Results
          </h5>
        </div>
      </div> */}

      <div className="row align-items-center g-2 mt-2">
        {loading ? (
          <>
            <div className="col-xl-12">
              <ResultSkeleton />
            </div>
            <div className="col-xl-12">
              <ResultSkeleton />
            </div>
            <div className="col-xl-12">
              <ResultSkeleton />
            </div>
          </>
        ) : (
          <>
            {paginatedResults.map((bus, index) => {
              const dep = formatDateTime(bus.DepartureTime);
              const arr = formatDateTime(bus.ArrivalTime);
              const duration = getDuration(bus.DepartureTime, bus.ArrivalTime);
              const isLastElement = index === paginatedResults.length - 1;

              return (
                <div
                  ref={isLastElement ? lastBusElementRef : null}
                  className="border rounded p-3 mb-3 bg-white"
                  style={{ borderColor: "#007bff" }}
                  key={`${bus.TravelName}-${index}`}
                >
                  <div className="d-flex justify-content-between align-items-start flex-wrap position-relative">
                    {/* Left */}
                    <div className="flex-grow-1">
                      <h5 className="fw-bold mb-1">{bus.TravelName}</h5>
                      <p className="text-muted mb-2">{cleanBusType(bus.BusType)}</p>

                      <div className="d-flex align-items-center mb-2">
                        <span
                          className="bg-primary text-white px-2 py-1 rounded me-2"
                          style={{ fontSize: "0.8rem" }}
                        >
                          ★ 4.2
                        </span>
                        <span
                          className="text-muted"
                          style={{ fontSize: "0.9rem" }}
                        >
                          103 Reviews
                        </span>
                      </div>
                      <button className="btn btn-outline-secondary btn-sm px-3 py-1">
                        On Time
                      </button>

                      
                    </div>

                    {/* Middle (Positioned absolutely in center - Horizontal layout) */}
                    <div
                      className="position-absolute d-flex align-items-center justify-content-center"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        minWidth: 200,
                        pointerEvents: "none"
                      }}
                    >
                      <div className="text-center me-4">
                        <div className="fw-bold">{dep.time}</div>
                        <div className="text-muted small">{dep.date}</div>
                      </div>
                      <div className="text-center mx-3">
                        <div className="text-muted fw-semibold">{duration}</div>
                      </div>
                      <div className="text-center ms-4">
                        <div className="fw-bold">{arr.time}</div>
                        <div className="text-muted small">{arr.date}</div>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="text-end flex-grow-1">
                      <div className="fw-bold fs-4 mb-3">
                        ₹{bus.BusPrice?.PublishedPriceRoundedOff || "-"}
                      </div>
                      <div className="text-muted mb-2">
                        {bus.AvailableSeats} Seats Left
                      </div>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleSeatToggle(bus, index)}
                        disabled={seatLayoutLoading && openSeatIndex === index}
                      >
                        {seatLayoutLoading && openSeatIndex === index ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Loading Seats...
                          </>
                        ) : (
                          openSeatIndex === index ? "Hide Seats" : "Show Seats"
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Seat Selection (now includes boarding points as a tab) */}
                  {openSeatIndex === index && (
                    <div className="mt-3">
                      <BusSeatLayoutPage seatLayout={seatLayout} currentBus={bus} />
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Loading more indicator */}
            {isLoadingMore && (
              <div className="col-xl-12">
                <ResultSkeleton />
              </div>
            )}
            
       
            
          </>
        )}
      </div>

      {/* Skeleton animation */}
      <style>{`
        .skeleton {
          animation: skeleton-loading 1.2s infinite linear alternate;
        }
        @keyframes skeleton-loading {
          0% { background-color: #eee; }
          100% { background-color: #e0e0e0; }
        }
      `}</style>
    </div>
  );
};

export default BusResultPage;
