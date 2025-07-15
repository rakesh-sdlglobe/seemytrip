import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Slider, Box, Typography } from '@mui/material';
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }).format(price);
};
const getMealPlanName = (meal) => {

  if (meal === "BB") {
    return "Bed & Breakfast";
  }
  if (meal === "HB") {
    return "Half Board";
  }
  if (meal === "FB") {
    return "Full Board";
  }
  if (meal === "AI") {
    return "All Inclusive";
  }
  if (meal === "RO") {
    return "Room Only";
  }
  return meal; // Default case if no match found

}
const HotelsFilters = ({
  filters,
  TotalHotel,
  selectAmenity,
  selectMeal,
  selectLocalities,
  selectStarRatings,
  onMealFilterChange,
  onAmenityFilterChange,
  onLocalitiesFilterChange,
  onStarRatingsFilterChange,
  selectPrice,
  onFilterChange,
  onClearAll,
  onApplyFilters,
  filtersChanged
}) => {
  console.log("selectAmenity:", selectAmenity);
  const [visibleAmenitiesCount, setVisibleAmenitiesCount] = useState(6);
  const [visibleLocalitiesCount, setVisibleLocalitiesCount] = useState(6);

  // Add state for slider values
  const [priceRange, setPriceRange] = useState([0, 50000]);

  // Get min and max price from filters
  const getPriceRange = () => {
    if (!filters || !filters.PriceRangeHotels || filters.PriceRangeHotels.length === 0) {
      return { min: 0, max: 50000 };
    }

    const prices = filters.PriceRangeHotels
      .filter(x => x.MaxPrice > filters.MinPrice)
      .map(x => ({ min: x.MinPrice, max: x.MaxPrice }));

    const minPrice = Math.min(...prices.map(p => p.min));
    const maxPrice = Math.max(...prices.map(p => p.max));

    return { min: minPrice, max: maxPrice };
  };

  const { min: minPrice, max: maxPrice } = getPriceRange();

  // Get current price range from selectPrice
  const getCurrentPriceRange = () => {
    if (!selectPrice) {
      return [minPrice, maxPrice];
    }

    const [min, max] = selectPrice.split('|').map(Number);
    return [min, max];
  };

  // Initialize price range
  useEffect(() => {
    setPriceRange(getCurrentPriceRange());
  }, [selectPrice, filters]);

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handlePriceChangeCommitted = (event, newValue) => {
    const [min, max] = newValue;
    onFilterChange({
      target: {
        checked: true,
        value: `${min}|${max}`
      }
    });
  };

  const valuetext = (value) => {
    return formatPrice(value);
  };

  return (
    <div className="filter-searchBar bg-white rounded-3" style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
      <div className="filter-searchBar-head border-bottom">
        <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
          <div className="searchBar-headerfirst">
            <h6 className="fw-bold fs-5 m-0">Filters</h6>
            <p className="text-md text-muted m-0">Showing {TotalHotel} Hotels</p>
          </div>
          <div className="searchBar-headerlast text-end">
            <Link
              to="#"
              className="text-md fw-medium text-primary active"
              onClick={onClearAll}
            >
              Clear All
            </Link>
          </div>
        </div>
      </div>
      <div className="filter-searchBar-body">
        {/* Bed types */}
        {filters.MealPlans && filters.MealPlans.length > 0 &&
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Meal Plan</h6>
            </div>
            <div className="searchBar-single-wrap">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                {filters.MealPlans && filters.MealPlans.sort((a, b) => b.Name - a.Name).map((meal, i) => (

                  <li className="col-6" key={"mealplan_" + (i + 1)}>
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={meal.Name.replace(/\s+/g, '') + "_" + (i + 1)} // Remove spaces for ID
                      value={meal.Name}
                      checked={meal.Selected || selectMeal?.split("|").some(x => x.toLowerCase() === meal.Name.toLowerCase())}
                      onChange={onMealFilterChange}
                    />
                    <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor={meal.Name.replace(/\s+/g, '') + "_" + (i + 1)}>{getMealPlanName(meal.Name)}</label>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        }


        {/* Pricing - Replace the existing checkbox section with this */}
        {filters.PriceRangeHotels && filters.PriceRangeHotels.length > 0 && (
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Price</h6>
            </div>
            <div className="searchBar-single-wrap">
              <Box sx={{ width: '100%', px: 1 }}>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                </Typography>
                <Slider
                  getAriaLabel={() => 'Price range'}
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
                    '& .MuiSlider-thumb': {
                      backgroundColor: '#007bff',
                      '&:hover, &.Mui-focusVisible': {
                        boxShadow: '0 0 0 8px rgba(0, 123, 255, 0.16)',
                      },
                    },
                    '& .MuiSlider-track': {
                      backgroundColor: '#007bff',
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: '#e0e0e0',
                    },
                  }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
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
        )}

        {/* Customer Ratings */}
        {filters.StarRatings && filters.StarRatings.length > 0 &&
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Customer Ratings</h6>
            </div>
            <div className="searchBar-single-wrap">
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                {filters.StarRatings.map((rating, i) => (
                  <li className="col-12" key={"StarRatings_" + i + 1}>
                    <div className="form-check lg">
                      <div className="frm-slicing d-flex align-items-center">
                        <div className="frm-slicing-first">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={(Number(rating.Name) * 10) + "_" + (i + 1)}
                            value={rating.Name}
                            checked={rating.Selected || selectStarRatings?.split("|").some(x => x === rating.Name)}
                            onChange={onStarRatingsFilterChange}
                          />
                          <label className="form-check-label" htmlFor={(Number(rating.Name) * 10) + "_" + (i + 1)} />
                        </div>
                        <div className="frm-slicing-end d-flex align-items-center justify-content-between full-width ps-1">
                          <div className="frms-flex d-flex align-items-center">
                            <div className="frm-slicing-ico text-md">
                              <i className="fa fa-star text-warning" />
                            </div>
                            <div className="frm-slicing-title ps-1"><span className="text-dark fw-bold">{rating.Name}</span></div>
                          </div>
                          <div className="text-end"><span className="text-md text-muted-2 opacity-75">{rating.Count}</span></div>
                        </div>
                      </div>
                    </div>
                  </li>))}

              </ul>
            </div>
          </div>
        }
        {filters.Localities && filters.Localities.length > 0 &&
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Localities</h6>
            </div>
            <div className="searchBar-single-wrap" style={{ position: 'relative', paddingBottom: '2rem' }}>
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                {filters.Localities.slice(0, visibleLocalitiesCount).map((Localities, i) => (
                  <li className="col-12" key={"Localities_" + i + 1}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={Localities.Name.replace(/\s+/g, '') + "_" + (i + 1)} // Remove spaces for ID
                        value={Localities.Name}
                        checked={Localities.Selected || selectLocalities?.split("|").some(x => x.toLowerCase() === Localities.Name.toLowerCase())}
                        onChange={onLocalitiesFilterChange}
                      />
                      <label className="form-check-label" htmlFor={Localities.Name.replace(/\s+/g, '') + "_" + (i + 1)}>{Localities.Name}</label>
                    </div>
                  </li>))}
              </ul>
              {filters.Localities.length > visibleLocalitiesCount && (
                <span
                  style={{
                    color: 'red',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    margin: '0.5rem',
                  }}
                  onClick={() => setVisibleLocalitiesCount(c => c + 6)}
                >
                  Show More
                </span>
              )}
            </div>
          </div>
        }
        {/* Amenities */}
        {filters.Amenities && filters.Amenities.length > 0 &&
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="searchBar-single-title d-flex mb-3">
              <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Amenities</h6>
            </div>
            <div className="searchBar-single-wrap" style={{ position: 'relative', paddingBottom: '2rem' }}>
              <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
                {filters.Amenities.slice(0, visibleAmenitiesCount).map((amenity, i) => (
                  <li className="col-12" key={"amenity_" + i + 1}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={amenity.Name.replace(/\s+/g, '') + "_" + (i + 1)} // Remove spaces for ID
                        value={amenity.Name}
                        checked={amenity.Selected || selectAmenity?.split("|").some(x => x.toLowerCase() === amenity.Name.toLowerCase())}
                        onChange={onAmenityFilterChange}
                      />
                      <label className="form-check-label" htmlFor={amenity.Name.replace(/\s+/g, '') + "_" + (i + 1)}>{amenity.Name}</label>
                    </div>
                  </li>))}
              </ul>
              {filters.Amenities.length > visibleAmenitiesCount && (
                <span
                  style={{
                    color: 'red',
                    cursor: 'pointer',
                    fontSize: '0.8em',
                    fontWeight: 500,
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    margin: '0.5rem',
                  }}
                  onClick={() => setVisibleAmenitiesCount(c => c + 6)}
                >
                  Show More
                </span>
              )}
            </div>
          </div>
        }

        {/* Add Apply Filters button at the bottom */}
        <div className="searchBar-single px-3 py-3">
          <button
            className={`btn w-100 ${filtersChanged ? 'btn-primary' : 'btn-secondary'}`}
            onClick={onApplyFilters}
            disabled={!filtersChanged}
          >
            {filtersChanged ? 'Apply Filters' : 'No Changes'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelsFilters;
