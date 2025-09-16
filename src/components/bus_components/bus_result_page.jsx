import { useCallback, useEffect, useState, useRef } from "react";
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

const SearchSkeleton = () => (
  <div className="d-flex flex-column mt-2 border rounded gap-2 align-items-center w-100 bg-white p-3">
    {/* Search input skeleton */}
    <div className="placeholder-glow w-100">
      <div className="placeholder col-12" style={{ height: 40 }}></div>
    </div>

    {/* Results count and sort options skeleton */}
    <div className="d-flex justify-content-between flex-wrap gap-2 align-items-center w-100">
      <div className="placeholder-glow">
        <div className="placeholder" style={{ width: 120, height: 20 }}></div>
      </div>
      <div className="d-flex align-items-center justify-content-center overflow-auto">
        <div className="placeholder-glow me-3">
          <div className="placeholder" style={{ width: 60, height: 16 }}></div>
        </div>
        <div className="d-flex align-items-center justify-content-center overflow-auto py-2 scroll-container" style={{width: "100%", scrollbarWidth: "thin", scrollbarColor: " #dc3545 #f8d7da"}}>
          <div className="btn-group" role="group" style={{width: "100%", minWidth: 0}}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="placeholder-glow">
                <div className="placeholder" style={{ width: 80, height: 32, margin: "0 2px" }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ResultSkeleton = () => (
  <div className="border rounded p-3 mb-3 bg-white" style={{ borderColor: "#007bff" }}>
    <div className="d-flex justify-content-between align-items-start flex-wrap position-relative">
      {/* Top section - Travel name and price */}
      <div className="flex w-100" style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}>
        <div>
          <div className="placeholder-glow mb-2">
            <div className="placeholder" style={{ width: "60%", height: 28 }}></div>
          </div>
          <div className="placeholder-glow">
            <div className="placeholder" style={{ width: "40%", height: 18 }}></div>
          </div>
        </div>
        <div className="placeholder-glow">
          <div className="placeholder" style={{ width: 80, height: 32 }}></div>
        </div>
      </div>

      {/* Middle section - Departure, Duration, Arrival */}
      <div className="middle-section">
        <div className="text-center me-4">
          <div className="placeholder-glow mb-1">
            <div className="placeholder" style={{ width: 60, height: 24 }}></div>
          </div>
          <div className="placeholder-glow">
            <div className="placeholder" style={{ width: 40, height: 16 }}></div>
          </div>
        </div>
        <div className="text-center mx-3">
          <div className="placeholder-glow">
            <div className="placeholder" style={{ width: 80, height: 20 }}></div>
          </div>
        </div>
        <div className="text-center ms-4">
          <div className="placeholder-glow mb-1">
            <div className="placeholder" style={{ width: 60, height: 24 }}></div>
          </div>
          <div className="placeholder-glow">
            <div className="placeholder" style={{ width: 40, height: 16 }}></div>
          </div>
        </div>
      </div>

      {/* Bottom section - Rating, reviews, and button */}
      <div className="d-flex justify-content-between w-100">
        <div>
          <div className="d-flex align-items-center mb-2">
            <div className="placeholder-glow me-2">
              <div className="placeholder rounded-pill" style={{ width: 50, height: 24 }}></div>
            </div>
            <div className="placeholder-glow">
              <div className="placeholder" style={{ width: 80, height: 16 }}></div>
            </div>
          </div>
          <div className="placeholder-glow">
            <div className="placeholder" style={{ width: 70, height: 28 }}></div>
          </div>
        </div>

        <div>
          <div className="placeholder-glow mb-2">
            <div className="placeholder" style={{ width: 100, height: 16 }}></div>
          </div>
          <div className="placeholder-glow">
            <div className="placeholder" style={{ width: 120, height: 40 }}></div>
          </div>
        </div>
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

  const getSearchParams = useCallback(() => {
    return getEncryptedItem("busSearchparams") || {};
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
      } else {
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

  // Filter by travel name (case-insensitive)
  const [travelNameFilter, setTravelNameFilter] = useState("");
  
  // Sorting state
  const [sortBy, setSortBy] = useState("relevance");
  
  // Apply travel name filter
  const nameFilteredResults = paginatedResults.filter(bus =>
    bus.TravelName?.toLowerCase().includes(travelNameFilter.toLowerCase())
  );

  // Apply sorting
  const getSortedResults = (results) => {
    const sorted = [...results];
    
    switch (sortBy) {
      case 'relevance':
        // Keep original order (already filtered)
        return sorted;
      case 'rating':
        return sorted.sort((a, b) => (b.Rating || 0) - (a.Rating || 0));
      case 'price':
        return sorted.sort((a, b) => (a.BusPrice?.PublishedPriceRoundedOff || 0) - (b.BusPrice?.PublishedPriceRoundedOff || 0));
      case 'fastest':
        return sorted.sort((a, b) => {
          const durationA = getDuration(a.DepartureTime, a.ArrivalTime);
          const durationB = getDuration(b.DepartureTime, b.ArrivalTime);
          // Convert duration to minutes for comparison
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
  };

  const filteredPaginatedResults = getSortedResults(nameFilteredResults);

  return (
    <div className="col-xl-9 col-lg-8 col-md-12  ">
      {/* Travel Name Filter Search Bar */}
      {loading ? (
        <SearchSkeleton />
      ) : (
        <div className="d-flex  flex-column mt-2 border rounded gap-2 align-items-center w-100 bg-white p-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by Travel Name..."
            value={travelNameFilter}
            onChange={e => setTravelNameFilter(e.target.value)}
          />

        {/* Results Count and Sort Options */}
        <div className="d-flex justify-content-between flex-wrap gap-2 align-items-center  w-100">
          <div className="fw-bold text-nowrap">
            {filteredPaginatedResults.length} buses found
          </div>
          <div className="d-flex align-items-center justify-content-center overflow-auto" >
            <span className="fw-bold me-3 text-nowrap">SORT BY:</span>
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
      )}


      <div className="row align-items-center g-2 mt-2 ">
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
            <div className="col-xl-12">
              <ResultSkeleton />
            </div>
          </>
        ) : (
          <>
            {filteredPaginatedResults.map((bus, index) => {
              const dep = formatDateTime(bus.DepartureTime);
              const arr = formatDateTime(bus.ArrivalTime);
              const duration = getDuration(bus.DepartureTime, bus.ArrivalTime);
              const isLastElement = index === filteredPaginatedResults.length - 1;

              return (
                <div
                  ref={isLastElement ? lastBusElementRef : null}
                  className="border rounded p-3 mb-3 bg-white "
                  style={{ borderColor: "#007bff" }}
                  key={`${bus.TravelName}-${index}`}
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
                      <div>
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
                        <button className="btn border border-secondary  btn-sm px-3 py-1">
                          On Time
                        </button>
                      </div>

                      <div>
                        <div className="text-muted mb-2">
                          {bus.AvailableSeats} Seats Left
                        </div>
                        <button
                          className="btn btn-md btn-danger hover-btn-color-white"
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
                <ResultSkeleton />
              </div>
            )}
          </>
        )}
      </div>

      {/* Light skeleton styles */}
      <style>{`
        /* Light skeleton overrides - matching left sidebar color */
        .placeholder {
          background-color: #E0E0E0 !important;
          opacity: 1;
        }
        
        .placeholder-glow .placeholder {
          background: linear-gradient(90deg, #E0E0E0 0%, #F0F0F0 50%, #E0E0E0 100%) !important;
          background-size: 200% 100%;
          animation: placeholder-glow 2s ease-in-out infinite;
        }
        
        @keyframes placeholder-glow {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
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
            flex-direction: column;
            gap: 8px;
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
  );
};

export default BusResultPage;
