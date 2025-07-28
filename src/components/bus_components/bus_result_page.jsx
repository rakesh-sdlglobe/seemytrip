import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBusSearch,
  fetchBusSeatLayout,
} from "../../store/Actions/busActions";
import {
  selectBusSearchList,
  selectBusSearchLayoutList,
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

const BusResultPage = ({ filters, loading }) => {
  const dispatch = useDispatch();
  const searchList = useSelector(selectBusSearchList);
  const seatLayout = useSelector(selectBusSearchLayoutList);
  const busResults = searchList?.BusSearchResult?.BusResults || [];
  const [openSeatIndex, setOpenSeatIndex] = useState(null);

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
      dispatch(
        fetchBusSeatLayout(
          TokenId,
          EndUserIp,
          bus.ResultIndex,
          searchList?.BusSearchResult?.TraceId
        )
      );
    }
  };

  const filteredResults = busResults.filter((bus) => {
    if (
      filters.busTypes.length > 0 &&
      !filters.busTypes.some(
        (type) =>
          bus.BusType &&
          bus.BusType.toLowerCase()
            .replace(/[\s\-\/]/g, "")
            .includes(type.toLowerCase().replace(/[\s\-\/]/g, ""))
      )
    )
      return false;

    const price = bus.BusPrice?.PublishedPriceRoundedOff || 0;
    if (price < (filters.priceMin || 0) || price > filters.priceMax)
      return false;

    if (
      (filters.rating45 && 4.2 < 4.5) ||
      (filters.rating4 && 4.2 < 4) ||
      (filters.rating35 && 4.2 < 3.5)
    )
      return false;

    return true;
  });

  return (
    <div className="col-xl-9 col-lg-8 col-md-12">
      <div className="row align-items-center justify-content-between">
        <div className="col-xl-4 col-lg-4 col-md-4">
          <h5 className="fw-bold fs-6 mb-lg-0 mb-3">
            Showing {loading ? "..." : filteredResults.length} Search Results
          </h5>
        </div>
      </div>

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
            {filteredResults.map((bus, index) => {
              const dep = formatDateTime(bus.DepartureTime);
              const arr = formatDateTime(bus.ArrivalTime);
              const duration = getDuration(bus.DepartureTime, bus.ArrivalTime);

              return (
                <div
                  className="border rounded p-3 mb-3 bg-white"
                  style={{ borderColor: "#007bff" }}
                  key={index}
                >
                  <div className="d-flex justify-content-between align-items-start flex-wrap">
                    {/* Left */}
                    <div>
                      <h5 className="fw-bold mb-1">{bus.TravelName}</h5>
                      <p className="text-muted mb-2">{bus.BusType}</p>
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

                    {/* Middle (Aligned Departure - Duration - Arrival) */}
                    <div
                      className="d-flex align-items-center justify-content-center mx-auto"
                      style={{ minWidth: 300 }}
                    >
                      <div
                        className="text-center px-3"
                        style={{ minWidth: 100 }}
                      >
                        <div className="fw-bold">{dep.time}</div>
                        <div className="text-muted small">{dep.date}</div>
                      </div>
                      <div
                        className="text-center px-3"
                        style={{ minWidth: 100 }}
                      >
                        <div className="text-muted fw-semibold">{duration}</div>
                      </div>
                      <div
                        className="text-center px-3"
                        style={{ minWidth: 100 }}
                      >
                        <div className="fw-bold">{arr.time}</div>
                        <div className="text-muted small">{arr.date}</div>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="text-end">
                      <div className="fw-bold fs-4 mb-3">
                        ₹{bus.BusPrice?.PublishedPriceRoundedOff || "-"}
                      </div>
                      <div className="text-muted mb-2">
                        {bus.AvailableSeats} Seats Left
                      </div>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleSeatToggle(bus, index)}
                      >
                        {openSeatIndex === index ? "Hide Seats" : "Show Seats"}
                      </button>
                    </div>
                  </div>

                  {/* Seat Selection */}
                  {openSeatIndex === index && (
                    <div className="mt-3">
                      <BusSeatLayoutPage seatLayout={seatLayout} />
                    </div>
                  )}
                </div>
              );
            })}
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
