import { Link } from 'react-router-dom';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
// import BusSearch from './bus_search_page';
// import BusFilterPage from './bus_filter_page';
// import BusResultPage from './bus_result_page';
import CruiseFilterpage from './Cruise_filter_page';

import CruiseSearch from './Cruise_search_page';
import CruiseResultpage from './Cruise_result_page';

const CruiseList = () => {
    return (
        <div>
            {/*  */}
            {/* Preloader - style you can find in spinners.css */}
            {/*  */}
            <div id="preloader">
                <div className="preloader"><span /><span /></div>
            </div>
            {/*  */}
            {/* Main wrapper - style you can find in pages.scss */}
            {/*  */}
            <div id="main-wrapper">
                {/*  */}
                {/* Top header  */}
                {/*  */}
                {/* Start Navigation */}
                <Header02 />
                {/* End Navigation */}
                <div className="clearfix" />
                {/*  */}
                {/* Top header  */}
                {/*  */}
                {/*  Hero Banner  Start */}
                <div className="py-5 bg-primary position-relative">
                    <div className="container">
                        {/* Search Form */}
                        <CruiseSearch />
                        {/* </row> */}
                    </div>
                </div>
                {/*  Hero Banner End  */}
                {/*  Searches List Start  */}
                <section className="gray-simple">
                    <div className="container">
                        <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
                            {/* Sidebar */}
                            <CruiseFilterpage />

                            {/* All List */}
                            <CruiseResultpage />
                        </div>
                    </div>
                </section>
                {/*  Searches List End  */}
                {/*  Footer Start  */}
                <FooterDark />
                {/*  Footer End  */}
                <Link id="back2Top" className="top-scroll" title="Back to top" to="#"><i className="fa-solid fa-sort-up" /></Link>
            </div>
        </div>
    );
}

export default CruiseList;