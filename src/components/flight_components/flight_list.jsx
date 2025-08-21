import React, { useState, useEffect, useRef, useCallback } from "react";
import FooterDark from "../footer-dark"; // Ensure this path is correct
import Header02 from "../header02"; // Ensure this path is correct
import FlightSearch from "./flight_search"; // Ensure this path is correct
import FlightFilter from "./flight_filter"; // Ensure this path is correct
import { useLocation, useNavigate } from "react-router-dom";
import TopFilter from "./top_filter";
import FlightSearchResult from "./flight_search_result";
import { useDispatch, useSelector } from "react-redux";

import { fetchFlightsResultsList } from "../../store/Actions/flightActions";
import {
  selectflightResultList,
  selectTotalFlight,
  selectTotalPages,
  selectSessionId,
} from "../../store/Selectors/flightSelectors";

const DEFULAT_PAGE_SIZE = 10;

const FlightList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchResults = useSelector(selectflightResultList);
  const [pageNo, setPageNo] = useState(1);
  const [MaxPrice, setMaxPrice] = useState(99999999);
  const [MinPrice, setMinPrice] = useState(0);
  const [selectPrice, setSelectPrice] = useState("");
  const [selectDepTime, setSelectDepTime] = useState("");
  const [selectArrTime, setSelectArrTime] = useState("");
  const [selectRtnDepTime, setSelectRtnDepTime] = useState("");
  const [selectRtnArrTime, setSelectRtnArrTime] = useState("");
  const [selectStops, setSelectStops] = useState("");
  const [selectAirline, setSelectAirline] = useState("");
  const TotalPages = useSelector(selectTotalPages);
  const SessionId = useSelector(selectSessionId);
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [filterLoading, setfilterLoading] = useState(false);
  const { flightsearchrequest } = location.state || {};
  const calledOnce = useRef(false);

  useEffect(() => {
    if (!calledOnce.current) {
      // Log location state and set search results
      flightsearchrequest.ServiceTypeCode = "F";
      //flightsearchrequest.GroupResult = true;
      flightsearchrequest.PageNo = 1;
      flightsearchrequest.PageSize = DEFULAT_PAGE_SIZE;
      flightsearchrequest.SessionID = null;
      flightsearchrequest.isPagination = false;
      dispatch(fetchFlightsResultsList(flightsearchrequest));
      console.log("Received main flightsearchrequest:", flightsearchrequest);
      calledOnce.current = true;
    }
  }, [flightsearchrequest, dispatch]);

  useEffect(() => {
    if (!filterLoading) return;
    var Filter = {
      MinPrice,
      MaxPrice,
      DepartureTime: selectDepTime !== ""  ? selectDepTime : null,
      ArrivalTime: selectArrTime !== "" ? selectArrTime : null,
      ReturnDepartureTime: selectRtnDepTime !== "" ? selectRtnDepTime : null,
      ReturnArrivalTime: selectRtnArrTime !== "" ? selectRtnArrTime : null,
      Stop: selectStops !== "" ? selectStops : null,
      Airline: selectAirline !== ""  ? selectAirline : null,
    };
    // Log location state and set search results
    flightsearchrequest.ServiceTypeCode = "F";
    flightsearchrequest.PageNo = 1;
    flightsearchrequest.PageSize = DEFULAT_PAGE_SIZE;
    flightsearchrequest.SessionID = null;
    flightsearchrequest.Filter = Filter;
    flightsearchrequest.isPagination = false;
    dispatch(fetchFlightsResultsList(flightsearchrequest));
  }, [
    flightsearchrequest,
    pageNo,
    MinPrice,
    MaxPrice,
    selectArrTime,
    selectDepTime,
    selectRtnDepTime,
    selectRtnArrTime,
    selectAirline,
    selectStops,
    filterLoading,
    dispatch,
  ]);

  const handleSearchResults = useCallback(
    (data) => {
      navigate("/flight-list", { state: { flightsearchrequest: data } });
    },
    [navigate]
  );

  const onPriceFilterChange = useCallback((e) => {
    const { checked, value } = e.target;
    if (checked === true) {
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

  const onDepTimeFilterChange = useCallback((e) => {
    const { checked, value } = e.target;
    if (checked === true) {
      setSelectDepTime((prevValue) =>
        prevValue !== "" ? prevValue + "|" + value : value
      );
    } else {
      setSelectDepTime((prevValue) =>
        prevValue.includes("|")
          ? prevValue.replace("|" + value, "")
          : prevValue.replace(value, "")
      );
    }
    setfilterLoading(true);
  }, []);

  const onArrTimeFilterChange = useCallback((e) => {
    const { checked, value } = e.target;
    if (checked === true) {
      setSelectArrTime((prevValue) =>
        prevValue !== "" ? prevValue + "|" + value : value
      );
    } else {
      setSelectArrTime((prevValue) =>
        prevValue.includes("|")
          ? prevValue.replace("|" + value, "")
          : prevValue.replace(value, "")
      );
    }
    setfilterLoading(true);
  }, []);

  const onRtnDepTimeFilterChange = useCallback((e) => {
    const { checked, value } = e.target;
    if (checked === true) {
      setSelectRtnDepTime((prevValue) =>
        prevValue !== "" ? prevValue + "|" + value : value
      );
    } else {
      setSelectRtnDepTime((prevValue) =>
        prevValue.includes("|")
          ? prevValue.replace("|" + value, "")
          : prevValue.replace(value, "")
      );
    }
    setfilterLoading(true);
  }, []);

  const onRtnArrTimeFilterChange = useCallback((e) => {
    const { checked, value } = e.target;
    if (checked === true) {
      setSelectRtnArrTime((prevValue) =>
        prevValue !== "" ? prevValue + "|" + value : value
      );
    } else {
      setSelectRtnArrTime((prevValue) =>
        prevValue.includes("|")
          ? prevValue.replace("|" + value, "")
          : prevValue.replace(value, "")
      );
    }
    setfilterLoading(true);
  }, []);

  const onAirlineFilterChange = useCallback((e) => {
    const { checked, value } = e.target;
    if (checked === true) {
      setSelectAirline((prevValue) =>
        prevValue !== "" ? prevValue + "|" + value : value
      );
    } else {
      setSelectAirline((prevValue) =>
        prevValue.includes("|")
          ? prevValue.replace("|" + value, "")
          : prevValue.replace(value, "")
      );
    }
    setfilterLoading(true);
  }, []);

  const onStopsFilterChange = useCallback((e) => {
    const { checked, value } = e.target;
    if (checked === true) {
      setSelectStops((prevValue) =>
        prevValue !== "" ? prevValue + "|" + value : value
      );
    } else {
      setSelectStops((prevValue) =>
        prevValue.includes("|")
          ? prevValue.replace("|" + value, "")
          : prevValue.replace(value, "")
      );
    }
    setfilterLoading(true);
  }, []);

  const handleClearAll = () => {
    setMinPrice(0);
    setMaxPrice(999999999);
    setSelectPrice("");
    flightsearchrequest.ServiceTypeCode = "F";
    //flightsearchrequest.GroupResult = true;
    flightsearchrequest.PageNo = 1;
    flightsearchrequest.PageSize = DEFULAT_PAGE_SIZE;
    flightsearchrequest.SessionID = "";
    flightsearchrequest.isPagination = false;
    flightsearchrequest.Filter = null;
    dispatch(fetchFlightsResultsList(flightsearchrequest));
  };
  // Handle Show More button click
  const handleShowMore = useCallback(() => {
    var Filter = {
      MinPrice,
      MaxPrice,
    };
    if (pageNo <= TotalPages) {
      const nextPage = pageNo + 1;
      setPageNo(nextPage);
      setPaginationLoading(true);
      // Log location state and set search results
      flightsearchrequest.ServiceTypeCode = "F";
      flightsearchrequest.PageNo = nextPage;
      flightsearchrequest.PageSize = DEFULAT_PAGE_SIZE;
      flightsearchrequest.SessionID = SessionId;
      flightsearchrequest.Filter = Filter;
      flightsearchrequest.isPagination = true;
      dispatch(fetchFlightsResultsList(flightsearchrequest));
    }
  }, [
    flightsearchrequest,
    pageNo,
    TotalPages,
    SessionId,
    MinPrice,
    MaxPrice,
    dispatch,
  ]);
  // const filteredFlights = searchResults.filter((flight) => {
  //   let isMatch = true;

  //   // Apply filters to flight data
  //   if (filters.ac) {
  //     isMatch =
  //       isMatch &&
  //       flight.classes.some((seat) =>
  //         ["Economy", "Business"].includes(seat.type)
  //       ); // Example filter for classes
  //   }
  //   if (filters.departureEarlyMorning) {
  //     isMatch =
  //       isMatch &&
  //       flight.departureTime >= "00:00" &&
  //       flight.departureTime < "06:00";
  //   }
  //   if (filters.departureMorning) {
  //     isMatch =
  //       isMatch &&
  //       flight.departureTime >= "06:00" &&
  //       flight.departureTime < "12:00";
  //   }
  //   if (filters.departureMidDay) {
  //     isMatch =
  //       isMatch &&
  //       flight.departureTime >= "12:00" &&
  //       flight.departureTime < "18:00";
  //   }
  //   if (filters.departureNight) {
  //     isMatch =
  //       isMatch &&
  //       flight.departureTime >= "18:00" &&
  //       flight.departureTime < "24:00";
  //   }
  //   if (filters.arrivalEarlyMorning) {
  //     isMatch =
  //       isMatch &&
  //       flight.arrivalTime >= "00:00" &&
  //       flight.arrivalTime < "06:00";
  //   }
  //   if (filters.arrivalMorning) {
  //     isMatch =
  //       isMatch &&
  //       flight.arrivalTime >= "06:00" &&
  //       flight.arrivalTime < "12:00";
  //   }
  //   if (filters.arrivalMidDay) {
  //     isMatch =
  //       isMatch &&
  //       flight.arrivalTime >= "12:00" &&
  //       flight.arrivalTime < "18:00";
  //   }
  //   if (filters.arrivalNight) {
  //     isMatch =
  //       isMatch &&
  //       flight.arrivalTime >= "18:00" &&
  //       flight.arrivalTime < "24:00";
  //   }

  //   return isMatch;
  // });
  // Reset pagination loading when hotelsList changes
  useEffect(() => {
    setPaginationLoading(false);
  }, [searchResults]);
  console.log("Flights list:", searchResults); // Debug log

  return (
    <div>
      {/* Preloader */}
      <div id="preloader">
        <div className="preloader">
          <span />
          <span />
        </div>
      </div>

      {/* Main wrapper */}
      <div id="main-wrapper">
        {/* Top header */}
        <Header02 />
        <div className="clearfix" />

        {/* Flight Search Component */}
        <FlightSearch
          onSearchResults={handleSearchResults}
          backgroundColor="#cd2c22"
          height="130px"
          leavingLabel={null}
          goingLabel={null}
          dateLabel={null}
          buttonBackgroundColor="#cd2c22"
          buttonTextColor="#ffffff"
          dropdownHindden="none"
          radioHindden="none"
          ReturnLable={null}
        />

        {/* Flight Filter and Results */}
        <section className="gray-simple">
          <div className="container">
            <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
              {/* Sidebar Filter Options */}
              <FlightFilter
                filters={searchResults}
                onPriceFilterChange={onPriceFilterChange}
                selectPrice={selectPrice}
                onDepTimeFilterChange={onDepTimeFilterChange}
                selectDepTime={selectDepTime}
                onArrTimeFilterChange={onArrTimeFilterChange}
                selectArrTime={selectArrTime}
                onRtnDepTimeFilterChange={onRtnDepTimeFilterChange}
                selectRtnDepTime={selectRtnDepTime}
                onRtnArrTimeFilterChange={onRtnArrTimeFilterChange}
                selectRtnArrTime={selectRtnArrTime}
                selectAirline={selectAirline}
                onAirlineFilterChange={onAirlineFilterChange}
                selectStops={selectStops}
                onStopsFilterChange={onStopsFilterChange}
                handleClearAll={handleClearAll}
              />

              {/* Flight Search Results */}
              <div className="col-xl-9 col-lg-8 col-md-12">
                {/* <TopFilter /> */}
                {searchResults && (
                  <>
                    <FlightSearchResult
                      flightData={searchResults}
                      
                    />

                    {TotalPages > 1 && pageNo < TotalPages && (
                      <div style={{ textAlign: "center", margin: "2rem 0" }}>
                        <button
                          className="btn btn-primary"
                          onClick={handleShowMore}
                          disabled={paginationLoading}
                        >
                          {paginationLoading ? "Loading..." : "Show More"}
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterDark />

        {/* Back to Top Button */}
        {/* <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="fa-solid fa-sort-up" />
        </a> */}
      </div>
    </div>
  );
};

export default FlightList;
