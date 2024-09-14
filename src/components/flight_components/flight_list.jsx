import FooterDark from "../footer-dark";
import Header02 from "../header02";
import { FlightFilter } from "./flight_filter";
import { FlightSearch } from "./flight_search";
import { FlightSearchResult } from "./flight_search_result";
import { TopFilter } from "./top_filter";

const FlightList = () => {
  return (
    <div>
      {/* Preloader - style you can find in spinners.css */}
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>

      {/* Main wrapper - style you can find in pages.scss */}
      <div id="main-wrapper">
        {/* Top header */}
        <Header02 />
        <div className="clearfix" />

        {/* Hero Banner */}
        <FlightSearch />

        {/* All Flights Search Lists */}
        <section className="gray-simple">
          <div className="container">
            <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
              {/* Sidebar Filter Options */}
              <FlightFilter />
              {/* All Flight Lists */}
              <div className="col-xl-9 col-lg-8 col-md-12">
                <TopFilter />
                <FlightSearchResult />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterDark />

        {/* Back to Top Button */}
        <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="fa-solid fa-sort-up" />
        </a>
      </div>
    </div>
  );
};

export default FlightList;
