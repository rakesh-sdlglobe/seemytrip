import { Link } from 'react-router-dom';
import CabSearch from './mt_search_componets';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import MtFilterPage from './mt_filter_page';
import MtResultPage from './mt_result_page';
import MtSearch from './mt_search_componets';


const MtList = () => {
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
                <div className="py-5 bg-primary position-relative">
                    <div className="container">
                        {/* Search Form */}
                        <MtSearch />
                        {/* </row> */}
                    </div>
                </div>
                {/*  Hero Banner End  */}
                {/*  Searches List Start  */}
                <section className="gray-simple">
                    <div className="container">
                        <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
                            {/* Sidebar */}
                            <MtFilterPage />

                            {/* All List */}
                            <MtResultPage />
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

export default MtList