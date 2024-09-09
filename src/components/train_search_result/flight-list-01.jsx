import Header02 from '../header02';
import Footer from '../footer';
import SerchComponent from './search_component';
import FilterSearchPage from './filter_search_page';
import TopFilter from './top_filter';
import TrainSearchResultList from './train_search-result';
const FlightList01 = () => {
  return (
    <div>
      {/* Preloader - style you can find in spinners.css */}
      <div id="preloader">
        <div className="preloader"><span /><span /></div>
      </div>
      {/* Main wrapper - style you can find in pages.scss */}
      <div id="main-wrapper">
        {/* Top header  */}
        {/* Start Navigation */}
        <Header02 />
        {/* End Navigation */}
        <div className="clearfix" />
        {/* Top header  */}
        {/*  Hero Banner  Start */}
        <SerchComponent />
        {/*  Hero Banner End  */}
        {/*  All Flits Search Lists Start  */}
        <section className="gray-simple">
          <div className="container">
            <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
              <FilterSearchPage />
              <div className="col-xl-9 col-lg-8 col-md-12">
                 <TopFilter/>
                 <TrainSearchResultList/>
              </div>
            </div>
          </div>
        </section>
        {/*  All Flits Search Lists End  */}
        {/*  Footer Start  */}
        <Footer />
        {/*  Footer End  */}
      </div>
    </div>
  );
}
export default FlightList01;