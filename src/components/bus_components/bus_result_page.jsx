import { useCallback, useEffect, useState, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBusSearch,
  fetchBusSeatLayout,
  fetchBusBoardingPoints,
} from "../../store/Actions/busActions";
import { getEncryptedItem } from "../../utils/encryption";
import {
  selectBusSearchList,
  selectBusSearchLayoutList,
  selectBusBoardingPoints,
  selectBusSearchLoading,
  selectBusSeatLayoutLoading,
} from "../../store/Selectors/busSelectors";
import BusSeatLayoutPage from "./BusSeatLayoutPage";
import BusResultSkeleton from "./BusResultSkeleton";

// Utility functions (moved outside component for better performance)
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

const cleanBusType = (busType) => {
  if (!busType) return "";

  let result = [];

  // Check for A/C or Non A/C
  if (busType.toLowerCase().includes('non a/c') || busType.toLowerCase().includes('non ac')) {
    result.push('Non A/C');
  } else if (busType.toLowerCase().includes('a/c') || busType.toLowerCase().includes('ac')) {
    result.push('A/C');
  } else {
    result.push('Non A/C');
  }

  // Check for Sleeper types
  if (busType.toLowerCase().includes('sleeper')) {
    if (busType.toLowerCase().includes('sleeper/semi sleeper') || busType.toLowerCase().includes('sleeper semi sleeper')) {
      result.push('Sleeper/Semi Sleeper');
    }
    else if (busType.toLowerCase().includes('semi sleeper') || busType.toLowerCase().includes('semi-sleeper')) {
      result.push('Semi Sleeper');
    } else {
      result.push('Sleeper');
    }
  }

  // Check for Seater types
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

const TIME_BLOCKS = [
  { id: 'earlyMorning', start: 0, end: 6 },
  { id: 'morning', start: 6, end: 12 },
  { id: 'afternoon', start: 12, end: 18 },
  { id: 'evening', start: 18, end: 24 },
];

const BusResultPage = ({ filters }) => {
  const dispatch = useDispatch();
  const searchList = useSelector(selectBusSearchList);
  const seatLayout = useSelector(selectBusSearchLayoutList);
  const boardingPoints = useSelector(selectBusBoardingPoints);
  const loading = useSelector(selectBusSearchLoading);
  const seatLayoutLoading = useSelector(selectBusSeatLayoutLoading);
  
  const [openSeatIndex, setOpenSeatIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [travelNameFilter, setTravelNameFilter] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  
  const observerRef = useRef();
  const ITEMS_PER_PAGE = 5;

  // Memoized bus results
  const busResults = useMemo(() => searchList?.BusSearchResult?.BusResults || [], [searchList]);

  const getSearchParams = useCallback(() => {
    return getEncryptedItem("busSearchparams") || {};
  }, []);

  // Fetch bus search data
  useEffect(() => {
    const { date, fromCityId, toCityId, TokenId, EndUserIp } = getSearchParams();
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

  // Handle seat toggle with useCallback
  const handleSeatToggle = useCallback((bus, index) => {
    if (openSeatIndex === index) {
      setOpenSeatIndex(null);
    } else {
      setOpenSeatIndex(index);
      const { TokenId, EndUserIp } = getSearchParams();

      dispatch(
        fetchBusSeatLayout(
          TokenId,
          EndUserIp,
          bus.ResultIndex,
          searchList?.BusSearchResult?.TraceId
        )
      );

      dispatch(
        fetchBusBoardingPoints(
          TokenId,
          EndUserIp,
          bus.ResultIndex,
          searchList?.BusSearchResult?.TraceId
        )
      );
    }
  }, [openSeatIndex, getSearchParams, dispatch, searchList]);

  // Memoized helper functions
  const getHour = useCallback((dateTimeStr) => {
    if (!dateTimeStr) return null;
    const date = new Date(dateTimeStr);
    return date.getHours();
  }, []);

  const isInSelectedBlock = useCallback((hour, selectedBlocks) => {
    if (!selectedBlocks || selectedBlocks.length === 0) return true;
    return selectedBlocks.some(blockId => {
      const block = TIME_BLOCKS.find(b => b.id === blockId);
      return block && hour >= block.start && hour < block.end;
    });
  }, []);

  // Check if bus has matching pickup points
  const hasMatchingPickupPoints = useCallback((bus) => {
    if (!filters.pickupPoints || filters.pickupPoints.length === 0) return true;

    const busPickupPoints = bus.BoardingPointsDetails?.map(point => point.CityPointName) || [];
    return filters.pickupPoints.some(selectedPoint =>
      busPickupPoints.includes(selectedPoint)
    );
  }, [filters.pickupPoints]);

  // Check if bus has matching dropping points
  const hasMatchingDroppingPoints = useCallback((bus) => {
    if (!filters.droppingPoints || filters.droppingPoints.length === 0) return true;

    const busDroppingPoints = bus.DroppingPointsDetails?.map(point => point.CityPointName) || [];
    return filters.droppingPoints.some(selectedPoint =>
      busDroppingPoints.includes(selectedPoint)
    );
  }, [filters.droppingPoints]);

  // Memoized filtered results
  const filteredResults = useMemo(() => {
    return busResults.filter((bus) => {
      // Bus type filtering
      if (filters.busTypes.length > 0) {
        const busType = bus.BusType ? bus.BusType.toLowerCase() : '';

        const hasMatchingType = filters.busTypes.every(filterType => {
          const filterTypeLower = filterType.toLowerCase();

          if (filterTypeLower === 'ac') {
            return (busType.includes('a/c') || busType.includes('ac')) &&
              !busType.includes('non a/c') &&
              !busType.includes('nonac');
          }

          if (filterTypeLower === 'nonac') {
            return busType.includes('non a/c') ||
              busType.includes('nonac') ||
              (!busType.includes('a/c') && !busType.includes('ac'));
          }

          if (filterTypeLower === 'sleeper') {
            return busType.includes('sleeper') && !busType.includes('semi sleeper');
          }

          if (filterTypeLower === 'semisleeper') {
            return busType.includes('semi sleeper') || busType.includes('semi-sleeper');
          }

          if (filterTypeLower === 'seater') {
            return busType.includes('seater') && !busType.includes('sleeper');
          }

          return busType.includes(filterTypeLower.replace(/[\s\-]/g, ''));
        });

        if (!hasMatchingType) return false;
      }

      // Pickup points filtering
      if (!hasMatchingPickupPoints(bus)) return false;

      // Dropping points filtering
      if (!hasMatchingDroppingPoints(bus)) return false;

      // Price filtering
      const price = bus.BusPrice?.PublishedPriceRoundedOff || 0;
      if (price < (filters.minPrice || 0) || price > (filters.maxPrice || Infinity)) return false;

      // Rating filtering (fixed logic)
      const busRating = bus.Rating || 4.2;
      if (
        (filters.rating45 && busRating < 4.5) ||
        (filters.rating4 && busRating < 4.0) ||
        (filters.rating35 && busRating < 3.5)
      ) return false;

      // Departure time filter
      const depHour = getHour(bus.DepartureTime);
      if (!isInSelectedBlock(depHour, filters.departureTimes)) return false;

      // Arrival time filter
      const arrHour = getHour(bus.ArrivalTime);
      if (!isInSelectedBlock(arrHour, filters.arrivalTimes)) return false;

      return true;
    });
  }, [busResults, filters, hasMatchingPickupPoints, hasMatchingDroppingPoints, getHour, isInSelectedBlock]);

  // Memoized sorted results
  const sortedResults = useMemo(() => {
    const results = [...filteredResults];
    
    // Handle multiple price sort selections
    if (filters.priceSorts && filters.priceSorts.length > 0) {
      if (filters.priceSorts.includes('lowToHigh') && filters.priceSorts.includes('highToLow')) {
        // If both are selected, show low to high first, then high to low
        return results.sort((a, b) => (a.BusPrice?.PublishedPriceRoundedOff || 0) - (b.BusPrice?.PublishedPriceRoundedOff || 0));
      } else if (filters.priceSorts.includes('lowToHigh')) {
        return results.sort((a, b) => (a.BusPrice?.PublishedPriceRoundedOff || 0) - (b.BusPrice?.PublishedPriceRoundedOff || 0));
      } else if (filters.priceSorts.includes('highToLow')) {
        return results.sort((a, b) => (b.BusPrice?.PublishedPriceRoundedOff || 0) - (a.BusPrice?.PublishedPriceRoundedOff || 0));
      }
    }
    
    // Fallback to old priceSort for backward compatibility
    if (filters.priceSort === 'lowToHigh') {
      return results.sort((a, b) => (a.BusPrice?.PublishedPriceRoundedOff || 0) - (b.BusPrice?.PublishedPriceRoundedOff || 0));
    } else if (filters.priceSort === 'highToLow') {
      return results.sort((a, b) => (b.BusPrice?.PublishedPriceRoundedOff || 0) - (a.BusPrice?.PublishedPriceRoundedOff || 0));
    }
    
    return results;
  }, [filteredResults, filters.priceSorts, filters.priceSort]);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Apply travel name filter first
  const nameFilteredResults = useMemo(() => {
    return sortedResults.filter(bus =>
      bus.TravelName?.toLowerCase().includes(travelNameFilter.toLowerCase())
    );
  }, [sortedResults, travelNameFilter]);

  // Memoized sorting function
  const getSortedResults = useCallback((results) => {
    const sorted = [...results];
    
    switch (sortBy) {
      case 'rating':
        return sorted.sort((a, b) => (b.Rating || 0) - (a.Rating || 0));
      case 'price':
        return sorted.sort((a, b) => (a.BusPrice?.PublishedPriceRoundedOff || 0) - (b.BusPrice?.PublishedPriceRoundedOff || 0));
      case 'fastest':
        return sorted.sort((a, b) => {
          const durationA = getDuration(a.DepartureTime, a.ArrivalTime);
          const durationB = getDuration(b.DepartureTime, b.ArrivalTime);
          
          const getMinutes = (duration) => {
            if (!duration || duration === '-') return Infinity;
            const match = duration.match(/(\d+)h\s*(\d+)m/);
            if (match) return parseInt(match[1]) * 60 + parseInt(match[2]);
            return Infinity;
          };
          
          return getMinutes(durationA) - getMinutes(durationB);
        });
      case 'departure':
        return sorted.sort((a, b) => new Date(a.DepartureTime) - new Date(b.DepartureTime));
      case 'arrival':
        return sorted.sort((a, b) => new Date(a.ArrivalTime) - new Date(b.ArrivalTime));
      default:
        return sorted;
    }
  }, [sortBy]);

  const finalSortedResults = useMemo(() => {
    return getSortedResults(nameFilteredResults);
  }, [getSortedResults, nameFilteredResults]);

  // Get final paginated results
  const filteredPaginatedResults = useMemo(() => {
    return finalSortedResults.slice(0, currentPage * ITEMS_PER_PAGE);
  }, [finalSortedResults, currentPage]);

  const hasMoreBuses = useCallback(() => {
    return currentPage * ITEMS_PER_PAGE < finalSortedResults.length;
  }, [currentPage, finalSortedResults.length]);

  const loadMoreBuses = useCallback(() => {
    if (!isLoadingMore && hasMoreBuses()) {
      setIsLoadingMore(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsLoadingMore(false);
      }, 500);
    }
  }, [isLoadingMore, hasMoreBuses]);

  // Intersection Observer for infinite scroll
  const lastBusElementRef = useCallback(node => {
    if (loading || isLoadingMore) return;
    if (observerRef.current) observerRef.current.disconnect();
    
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMoreBuses()) {
        loadMoreBuses();
      }
    });
    
    if (node) observerRef.current.observe(node);
  }, [loading, isLoadingMore, hasMoreBuses, loadMoreBuses]);

  // Get search parameters for display
  const searchParams = getSearchParams();
  const fromCityName = searchParams.fromCityName || 'Unknown';
  const toCityName = searchParams.toCityName || 'Unknown';
  const searchDate = searchParams.date ? new Date(searchParams.date).toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric'
  }) : 'Unknown';

  // Render function remains the same as your original UI
  return (
    <>
      {loading ? (
        <BusResultSkeleton />
      ) : (
        <div className="col-xl-9 col-lg-9 col-md-12  ">
          {/* Show no buses message if no results */}
          {busResults.length === 0 ? (
            <div className="text-center py-5">
              <div className="bg-white rounded p-4">
                <h3 className="text-muted mb-3">No Buses Available</h3>
                <p className="text-muted">
                  Sorry, we couldn't find any buses for your selected route and date.
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Travel Name Filter Search Bar */}
              <div className="d-flex  flex-column mt-2 border rounded gap-2 align-items-center w-100 bg-white p-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Travel Name..."
                  value={travelNameFilter}
                  onChange={e => setTravelNameFilter(e.target.value)}
                />

              {/* Results Count and Sort Options */}
              <div className="d-flex justify-content-between m-0 p-0 gap-2 flex-wrap  align-items-center    w-100">
                <div className="fw-bold text-nowrap ">
                  {finalSortedResults.length} buses found
                </div>
                <div className="d-flex align-items-center justify-content-center p-0 m-0 overflow-auto" >
                  <span className="fw-bold text-nowrap me-1">SORT BY:</span>
                  <div className="d-flex align-items-center justify-content-center overflow-auto py-2 scroll-container" style={{width: "100%",
                    scrollbarWidth: "thin",
                    scrollbarColor: " #dc3545 #f8d7da"
                  }}>
                  <div className="btn-group" role="group" style={{
                    width: "100%",
                    minWidth:0
                    }}>
                    {[
                      { key: 'relevance', label: 'Relevance' },
                      { key: 'rating', label: 'Rating' },
                      { key: 'price', label: 'Price' },
                      { key: 'fastest', label: 'Fastest' },
                      { key: 'departure', label: 'Departure' },
                      { key: 'arrival', label: 'Arrival' }
                    ].map((option) => (
                      <button
                        key={option.key}
                        type="button"
                        className={`btn btn-sm btn-sort flex-shrink-0  ${sortBy === option.key ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => setSortBy(option.key)}
                      >
                        {option.label}
                        {sortBy === option.key && option.key === 'fastest' && (
                          <i className="fas fa-arrow-up ms-1" style={{ fontSize: '0.7rem' }}></i>
                        )}
                      </button>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
              </div>


              <div className="row align-items-center g-2 mt-2 ">
              <>
                {filteredPaginatedResults.map((bus, index) => {
                  const dep = formatDateTime(bus.DepartureTime);
                  const arr = formatDateTime(bus.ArrivalTime);
                  const duration = getDuration(bus.DepartureTime, bus.ArrivalTime);
                  const isLastElement = index === filteredPaginatedResults.length - 1;

                  return (
                    <div
                      ref={isLastElement ? lastBusElementRef : null}
                      className="border rounded p-3 mb-3 bg-white card-over"
                      key={`${bus.TravelName}-${bus.ResultIndex}-${index}`}
                    >
                      <div className="d-flex justify-content-between align-items-start flex-wrap position-relative">
                        {/* top */}
                        <div className="flex" style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}>
                          <div>
                            <h4 className="fw-bold mb-1">{bus.TravelName}</h4>
                            <p className="text-muted mb-2">{cleanBusType(bus.BusType)}</p>
                          </div>
                          <div className="fw-bold fs-4 mb-3">
                            ₹{bus.BusPrice?.PublishedPriceRoundedOff || "-"}
                          </div>
                        </div>

                        {/* Middle (Positioned absolutely in center - Horizontal layout) */}
                        <div className="middle-section">
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

                        {/* bottom */}
                        <div className="d-flex justify-content-between w-100">
                          <div className="d-flex flex-column  justify-content-between">
                            <div className="d-flex align-items-center mb-2">
                              <span
                                className="bg-primary text-white px-2 py-1 rounded me-2"
                                style={{ fontSize: "0.8rem" }}
                              >
                                ★ {bus.Rating?.toFixed(1) || '4.2'}
                              </span>
                              <span
                                className="text-muted"
                                style={{ fontSize: "0.9rem" }}
                              >
                                {bus.ReviewCount || '103'} Reviews
                              </span>
                            </div>
                            <span className="badge btn-secondary p-2">
                              On Time
                            </span>
                          </div>

                          <div>
                            <div className="text-muted mb-2">
                              {bus.AvailableSeats} Seats Left
                            </div>
                            <button
                              className="btn btn-md btn-danger"
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
                    <div className="border rounded p-3 mb-3 bg-white" style={{ borderColor: "#007bff" }}>
                      <div className="d-flex justify-content-center align-items-center" style={{ height: 100 }}>
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
              </div>
            </>
          )}

          {/* Button responsive styles */}
          <style>{`
            .middle-section{
               display: flex;
               justify-Content: center;
               align-Items: center;
               width: 100%;
               position: absolute;
               top: 50%;
               bottom: 50%;
            }
            
            /* Responsive styles for middle section */
            @media (max-width: 560px) {
              .middle-section {
                position: static;
                margin-bottom: 10px;
                gap: 2rem;
              }
              
              .middle-section > div {
                margin: 0 !important;
              }
            }

            /* Button responsive styles */
            @media (max-width: 768px) {
              .btn{
                height: 40px;
                padding: 0px 10px;
              }

              .btn-sort{
                height: 36px;
                padding: 0px 10px;
              }
            }

            @media (max-width: 560px) {
              .btn{
                height: 40px;
                padding: 0px 10px;
                font-size: 14px;
              }

              .btn-sort{
                height: 30px;
                padding: 0px 10px;
                font-size: 12px;
              }
            }

            .btn-outline-primary:hover{
              background:#f79d9d !important;
            }
          `}
          </style>
        </div>
      )}
    </>
  );
};

export default BusResultPage;