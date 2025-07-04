import React from 'react';
import { Link } from 'react-router-dom';
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(price);
  };
const  getMealPlanName = (meal)  =>{
  
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
const HotelsFilters = ({ filters, TotalHotel,selectAmenity,selectMeal,selectLocalities,selectStarRatings , onMealFilterChange,onAmenityFilterChange,onLocalitiesFilterChange,onStarRatingsFilterChange,selectPrice,onFilterChange, onClearAll }) => {
  console.log("selectAmenity:", selectAmenity);
  return (
    <div className="filter-searchBar bg-white rounded-3" style={{ boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)" }}>
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
              {filters.MealPlans && filters.MealPlans.sort((a,b) => b.Name - a.Name ).map((meal, i) => (

                <li className="col-6" key={"mealplan_"+(i+1)}>
                <input 
                  type="checkbox" 
                  className="btn-check" 
                  id={meal.Name.replace(/\s+/g, '')+"_"+ (i+1)} // Remove spaces for ID
                    value={meal.Name}
                    checked={meal.Selected || selectMeal.split("|").some(x=> x.toLowerCase() === meal.Name.toLowerCase())}
                  onChange={onMealFilterChange}
                />
                <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor={meal.Name.replace(/\s+/g, '')+"_"+ (i+1)}>{getMealPlanName(meal.Name)}</label>
              </li>
              ))}
              
            </ul>
          </div>
        </div>
}
       

        {/* Pricing */}
        {filters.PriceRangeHotels && filters.PriceRangeHotels.length > 0 &&
        <div className="searchBar-single px-3 py-3 border-bottom">
          <div className="searchBar-single-title d-flex mb-3">
            <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Price</h6>
          </div>
          <div className="searchBar-single-wrap">
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
              {filters.PriceRangeHotels && filters.PriceRangeHotels.filter(x=> x.MaxPrice > filters.MinPrice).map((price, i) => (

                <li className="col-6" key={"price_"+(i+1)}>
                <input 
                  type="checkbox" 
                  className="btn-check" 
                  id={"price_"+price.MinPrice+"_"+price.MaxPrice+"_"+ (i+1)} // Remove spaces for ID
                    MinPrice={price.MinPrice}
                    MaxPrice={price.MaxPrice}
                    value={`${price.MinPrice}|${price.MaxPrice}`}
                    checked={selectPrice === `${price.MinPrice}|${price.MaxPrice}`}
                  onChange={onFilterChange}
                />
                <label className="btn btn-sm btn-secondary rounded-1 fw-medium full-width" htmlFor={"price_"+price.MinPrice+"_"+price.MaxPrice+"_"+ (i+1)}>{formatPrice(price.MinPrice < filters.MinPrice ? filters.MinPrice : price.MinPrice)} - {formatPrice(price.MaxPrice)}</label>
              </li>
              ))}
              
            </ul>
          </div>
        </div>
}

        {/* Customer Ratings */}
        {filters.StarRatings && filters.StarRatings.length > 0 &&
        <div className="searchBar-single px-3 py-3 border-bottom">
          <div className="searchBar-single-title d-flex mb-3">
            <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Customer Ratings</h6>
          </div>
          <div className="searchBar-single-wrap">
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
              {filters.StarRatings.map((rating,i) => (
                <li className="col-12" key={"StarRatings_"+i+1}>
                  <div className="form-check lg">
                  <div className="frm-slicing d-flex align-items-center">
                    <div className="frm-slicing-first">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id={(Number(rating.Name)*10)+"_"+ (i+1)}
                        value={rating.Name}
                        checked={rating.Selected || selectStarRatings.split("|").some(x=> x === rating.Name)}
                        onChange={onStarRatingsFilterChange}
                      />
                      <label className="form-check-label" htmlFor={(Number(rating.Name)*10)+"_"+ (i+1)} />
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
              </li>  ))}
              
            </ul>
          </div>
        </div>
        }
      {filters.Localities && filters.Localities.length > 0 &&
        <div className="searchBar-single px-3 py-3 border-bottom">
          <div className="searchBar-single-title d-flex mb-3">
            <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Localities</h6>
          </div>
          <div className="searchBar-single-wrap">
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
              {filters.Localities.map((Localities,i) => (
                <li className="col-12" key={"Localities_"+i+1}>
                  <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id={Localities.Name.replace(/\s+/g, '')+"_"+ (i+1)} // Remove spaces for ID
                    value={Localities.Name}
                    checked={Localities.Selected || selectLocalities.split("|").some(x=> x.toLowerCase() === Localities.Name.toLowerCase())}
                    onChange={onLocalitiesFilterChange}
                  />
                  <label className="form-check-label" htmlFor={Localities.Name.replace(/\s+/g, '')+"_"+ (i+1)}>{Localities.Name}</label>
                </div>
              </li>  ))}
            </ul>
          </div>
        </div>
        } 
        {/* Amenities */}
        {filters.Amenities && filters.Amenities.length > 0 &&
        <div className="searchBar-single px-3 py-3 border-bottom">
          <div className="searchBar-single-title d-flex mb-3">
            <h6 className="sidebar-subTitle fs-6 fw-medium m-0">Amenities</h6>
          </div>
          <div className="searchBar-single-wrap">
            <ul className="row align-items-center justify-content-between p-0 gx-3 gy-2 mb-0">
              {filters.Amenities.map((amenity,i) => (
                <li className="col-12" key={"amenity_"+i+1}>
                  <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id={amenity.Name.replace(/\s+/g, '')+"_"+ (i+1)} // Remove spaces for ID
                    value={amenity.Name}
                    checked={amenity.Selected || selectAmenity.split("|").some(x=> x.toLowerCase() === amenity.Name.toLowerCase())}
                    onChange={onAmenityFilterChange}
                  />
                  <label className="form-check-label" htmlFor={amenity.Name.replace(/\s+/g, '')+"_"+ (i+1)}>{amenity.Name}</label>
                </div>
              </li>  ))}
            </ul>
          </div>
        </div>
        }
      </div>
    </div>
  );
};

export default HotelsFilters;
