import React, { useState, useEffect } from "react";
import { Slider, Box, Typography } from "@mui/material";
const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  }).format(price);
};

const FlightFilter = ({
  filters,
  handleClearAll,
  selectDepTime,
  onDepTimeFilterChange,
  selectArrTime,
  onArrTimeFilterChange,
  selectRtnDepTime,
  onRtnDepTimeFilterChange,
  selectRtnArrTime,
  onRtnArrTimeFilterChange,
  selectPrice,
  onPriceFilterChange,
  selectStops,
  onStopsFilterChange,
  selectAirline,
  onAirlineFilterChange
}) => {
  // Add state for slider values
  const [priceRange, setPriceRange] = useState([0, 999999]);

  // Get min and max price from filters
  const getPriceRange = () => {
    if (!filters || !filters.Filter) {
      return { min: 0, max: 50000 };
    }

    const minPrice = Number(filters.Filter.MinPrice) - 1;
    const maxPrice = Math.ceil(filters.Filter.MaxPrice);

    return { min: minPrice, max: maxPrice };
  };

  const { min: minPrice, max: maxPrice } = getPriceRange();

  // Get current price range from selectPrice
  const getCurrentPriceRange = () => {
    if (!selectPrice) {
      return [minPrice, maxPrice];
    }
    const [min, max] = selectPrice.split("|").map(Number);
    // Clamp values to the current min/max from API
    return [
      Math.max(minPrice, Math.min(min, maxPrice)),
      Math.max(minPrice, Math.min(max, maxPrice)),
    ];
  };

  // Keep priceRange in sync with selectPrice and API range
  useEffect(() => {
    setPriceRange(getCurrentPriceRange());
    // eslint-disable-next-line
  }, [selectPrice, minPrice, maxPrice]);

  // If API range changes and selectPrice is out of bounds, reset
  useEffect(() => {
    if (
      priceRange[0] < minPrice ||
      priceRange[1] > maxPrice ||
      priceRange[0] > priceRange[1]
    ) {
      setPriceRange([minPrice, maxPrice]);
      // onPriceFilterChange({
      //   target: {
      //     checked: true,
      //     value: `${minPrice}|${maxPrice}`,
      //   },
      // });
    }
    // eslint-disable-next-line
  }, [minPrice, maxPrice]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handlePriceChangeCommitted = (event, newValue) => {
    const [min, max] = newValue;
    onPriceFilterChange({
      target: {
        checked: true,
        value: `${min}|${max}`,
      },
    });
  };

  const valuetext = (value) => {
    return formatPrice(value);
  };

  return (
    <>
      {filters.Filter && (
        <>
          <div className="col-xl-3 col-lg-4 col-md-12">
            <div className="filter-searchBar bg-white rounded-3">
              <div className="filter-searchBar-head border-bottom">
                <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
                  <div className="searchBar-headerfirst">
                    <h6 className="fw-bold fs-5 m-0">Filters</h6>
                    <p className="text-md text-muted m-0">
                      Showing {filters.TotalFlights}{" "}
                      {filters.TotalFlights > 1 ? " Flights" : " Flight"}
                    </p>
                  </div>
                  <div className="searchBar-headerlast text-end">
                    <button
                      className="btn btn-link text-danger p-0"
                      onClick={handleClearAll}
                    >
                      Clear All{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="filter-searchBar-body">
                {/* Departure & Return */}
                <div className="searchBar-single px-3 py-3 border-bottom">
                  <div className="searchBar-single-title d-flex mb-3">
                    <h6 className="sidebar-subTitle fs-6 fw-medium m-0">
                      Departure
                    </h6>
                  </div>
                  <div className="searchBar-single-wrap mb-4">
                    <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                      {filters.Filter &&
                        filters.Filter?.DepartureTime !== "" &&
                        filters.Filter?.DepartureTime?.split("|").map(
                          (dep, dpIdx) => (
                            <>
                              <li className="col-6">
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  id={"DepartureTime" + dpIdx}
                                  value={dep}
                                  checked={selectDepTime?.split("|").some(x => x === dep) || false}
                                  onChange={onDepTimeFilterChange}
                                />
                                <label
                                  className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                                  htmlFor={"DepartureTime" + dpIdx}
                                >
                                  {dep}
                                </label>
                              </li>
                            </>
                          )
                        )}
                    </ul>
                  </div>
                  <div className="searchBar-single-title d-flex mb-3">
                    <h6 className="sidebar-subTitle fs-6 fw-medium m-0">
                      Arrival
                    </h6>
                  </div>
                  <div className="searchBar-single-wrap">
                    <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                      {filters.Filter &&
                        filters.Filter?.ArrivalTime?.split("|").map(
                          (arr, arIdx) => (
                            <>
                              <li className="col-6">
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  id={"ArrivalTime" + arIdx}
                                  value={arr}
                                  checked={selectArrTime?.split("|").some(x => x === arr) || false}
                                  onChange={onArrTimeFilterChange}
                                />
                                <label
                                  className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                                  htmlFor={"ArrivalTime" + arIdx}
                                >
                                  {arr}
                                </label>
                              </li>
                            </>
                          )
                        )}
                    </ul>
                  </div>
                  {filters.Filter &&
                    filters.Filter?.ReturnDepartureTime !== "" && (
                      <>
                        <div className="searchBar-single-title d-flex mb-3">
                          <h6 className="sidebar-subTitle fs-6 fw-medium m-0">
                            Return Departure
                          </h6>
                        </div>
                        <div className="searchBar-single-wrap mb-4">
                          <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                            {filters.Filter &&
                              filters.Filter?.ReturnDepartureTime !== "" &&
                              filters.Filter?.ReturnDepartureTime?.split(
                                "|"
                              ).map((dep, dpIdx) => (
                                <>
                                  <li className="col-6">
                                    <input
                                      type="checkbox"
                                      className="btn-check"
                                      id={"ReturnDepartureTime" + dpIdx}
                                      value={dep}
                                      checked={selectRtnDepTime?.split("|").some(x => x === dep) || false}
                                      onChange={onRtnDepTimeFilterChange}
                                    />
                                    <label
                                      className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                                      htmlFor={"ReturnDepartureTime" + dpIdx}
                                    >
                                      {dep}
                                    </label>
                                  </li>
                                </>
                              ))}
                          </ul>
                        </div>
                      </>
                    )}
                  {filters.Filter &&
                    filters.Filter?.ReturnArrivalTime !== "" && (
                      <>
                        <div className="searchBar-single-title d-flex mb-3">
                          <h6 className="sidebar-subTitle fs-6 fw-medium m-0">
                            Return Arrival
                          </h6>
                        </div>
                        <div className="searchBar-single-wrap">
                          <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                            {filters.Filter &&
                              filters.Filter?.ReturnArrivalTime?.split("|").map(
                                (arr, arIdx) => (
                                  <>
                                    <li className="col-6">
                                      <input
                                        type="checkbox"
                                        className="btn-check"
                                        id={"ReturnArrivalTime" + arIdx}
                                        value={arr}
                                        checked={selectRtnArrTime?.split("|").some(x => x === arr) || false}
                                        onChange={onRtnArrTimeFilterChange}
                                      />
                                      <label
                                        className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                                        htmlFor={"ReturnArrivalTime" + arIdx}
                                      >
                                        {arr}
                                      </label>
                                    </li>
                                  </>
                                )
                              )}
                          </ul>
                        </div>
                      </>
                    )}
                </div>
                {/* Onward Stops */}
                <div className="searchBar-single px-3 py-3 border-bottom">
                  <div className="searchBar-single-title d-flex mb-3">
                    <h6 className="sidebar-subTitle fs-6 fw-medium m-0">
                      Onward Stops
                    </h6>
                  </div>
                  <div className="searchBar-single-wrap">
                    <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                      {filters.Filter &&
                        filters.Filter?.Stop?.split("|")
                          .sort((a, b) => b - a)
                          .map((stp, stIdx) => (
                            <>
                              <li className="col-6">
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  id={"stops" + stIdx}
                                  value={stp}
                                  checked={selectStops?.split("|").some(x => x === stp) || false}
                                  onChange={onStopsFilterChange}
                                />
                                <label
                                  className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                                  htmlFor={"stops" + stIdx}
                                >
                                  {isNaN(stp)
                                    ? stp
                                    : Number(stp) === 0
                                    ? "Direct"
                                    : Number(stp) > 1
                                    ? stp + " Stops"
                                    : stp + " Stop"}
                                </label>
                              </li>
                            </>
                          ))}
                    </ul>
                  </div>
                  {/* <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">
                Return Stops
              </h6>
            </div>
            <div className="searchBar-single-wrap">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="direct1" />
                  <label
                    className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                    htmlFor="direct1"
                  >
                    Direct
                  </label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="1stop1" />
                  <label
                    className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                    htmlFor="1stop1"
                  >
                    1 Stop
                  </label>
                </li>
                <li className="col-6">
                  <input type="checkbox" className="btn-check" id="2stop1" />
                  <label
                    className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                    htmlFor="2stop1"
                  >
                    2+ Stop
                  </label>
                </li>
              </ul>
            </div> */}
                </div>
                {/* Pricing */}
                <div className="searchBar-single px-3 py-3 border-bottom">
                  <div className="searchBar-single-title d-flex mb-3">
                    <h6 className="sidebar-subTitle fs-6 fw-medium m-0">
                      Pricing Range in INR
                    </h6>
                  </div>
                  <div className="searchBar-single-wrap">
                    <Box sx={{ width: "100%", px: 1 }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        gutterBottom
                      >
                        {formatPrice(priceRange[0])} -{" "}
                        {formatPrice(priceRange[1])}
                      </Typography>
                      <Slider
                        getAriaLabel={() => "Price range"}
                        value={priceRange}
                        onChange={handlePriceChange}
                        onChangeCommitted={handlePriceChangeCommitted}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        min={minPrice}
                        max={maxPrice}
                        step={100}
                        disableSwap
                        sx={{
                          "& .MuiSlider-thumb": {
                            backgroundColor: "#007bff",
                            "&:hover, &.Mui-focusVisible": {
                              boxShadow: "0 0 0 8px rgba(0, 123, 255, 0.16)",
                            },
                          },
                          "& .MuiSlider-track": {
                            backgroundColor: "#007bff",
                          },
                          "& .MuiSlider-rail": {
                            backgroundColor: "#e0e0e0",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: 1,
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          {formatPrice(minPrice)}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {formatPrice(maxPrice)}
                        </Typography>
                      </Box>
                    </Box>
                  </div>
                </div>
                {/* Facilities */}
                {/* <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">
                Facilities
              </h6>
            </div>
            <div className="searchBar-single-wrap">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                <li className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="baggage"
                    />
                    <label className="form-check-label" htmlFor="baggage">
                      Baggage
                    </label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inflightmeal"
                    />
                    <label className="form-check-label" htmlFor="inflightmeal">
                      In-flight Meal
                    </label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inflightenter"
                    />
                    <label className="form-check-label" htmlFor="inflightenter">
                      In-flight Entertainment
                    </label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flswifi"
                    />
                    <label className="form-check-label" htmlFor="flswifi">
                      WiFi
                    </label>
                  </div>
                </li>
                <li className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flusbport"
                    />
                    <label className="form-check-label" htmlFor="flusbport">
                      Power/USB Port
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
                {/* Popular Flights */}
                <div className="searchBar-single px-3 py-3 border-bottom">
                  <div className="searchBar-single-title d-flex align-items-center justify-content-between mb-3">
                    <h6 className="sidebar-subTitle fs-6 fw-medium m-0">
                      Preferred Airlines
                    </h6>
                    {/* <a href="#" className="text-md fw-medium text-muted active">
                Reset
              </a> */}
                  </div>
                  <div className="searchBar-single-wrap">
                    <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2">
                      {filters.Filter &&
                        filters.Filter?.Airline?.split("|").map(
                          (arlne, arlIdx) => (
                            <>
                              <li className="col-12">
                                <div className="form-check lg">
                                  <div className="frm-slicing d-flex align-items-center">
                                    <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                                      <div className="frms-flex d-flex align-items-center form-check">
                                        <input
                                          type="checkbox"
                                          className="form-check-input"
                                          id={"Airline" + arlIdx}
                                          value={arlne}
                                          checked={selectAirline?.split("|").some(x => x === arlne) || false}
                                          onChange={onAirlineFilterChange}
                                        />
                                        <div className="frm-slicing-img">
                                          <img
                                            src="https://placehold.co/110x110"
                                            className="img-fluid"
                                            width={25}
                                            alt=""
                                          />
                                        </div>
                                        <label
                                          className="btn btn-sm btn-secondary rounded-1 fw-medium px-4 full-width"
                                          htmlFor={"ReturnArrivalTime" + arlIdx}
                                        >
                                          {arlne}
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </>
                          )
                        )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FlightFilter;
