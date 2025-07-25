import { Link } from 'react-router-dom';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import BusSearch from './bus_search_page';
import BusFilterPage from './bus_filter_page';
import BusResultPage from './bus_result_page';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBusSearchList } from '../../store/Selectors/busSelectors';

const defaultFilters = {
  busTypes: [],
  wifi: false,
  charging: false,
  snacks: false,
  priceMin: 0,      // <-- add this
  priceMax: 5000,   // <-- and this
  rating45: false,
  rating4: false,
  rating35: false,
};

const BusList = () => {
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState(defaultFilters);

    // Handler for filter changes
    const handleFilterChange = (newFilters) => setFilters(prev => ({ ...prev, ...newFilters }));
    const handleClear = () => setFilters(defaultFilters);

    const searchList = useSelector(selectBusSearchList);
    const busResults = searchList?.BusSearchResult?.BusResults || [];
    const prices = busResults.map(bus => bus.BusPrice?.PublishedPriceRoundedOff || 0);
    const minPrice = prices.length ? Math.min(...prices) : 100;
    const maxPrice = prices.length ? Math.max(...prices) : 5000;

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
                        <BusSearch />
                        {/* </row> */}
                    </div>
                </div>
                {/*  Hero Banner End  */}
                {/*  Searches List Start  */}
                <section className="gray-simple">
                    <div className="container">
                        <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
                            {/* Sidebar */}
                            <BusFilterPage
                                filters={filters}
                                onFilterChange={handleFilterChange}
                                onClear={handleClear}
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                                loading={loading}
                                setLoading={setLoading}
                            />

                            {/* All List */}
                            <BusResultPage
                                filters={filters}
                                loading={loading}
                            />
                        </div>
                    </div>
                </section>
                {/*  Searches List End  */}
                {/*  Footer Start  */}
                <FooterDark />
                {/*  Footer End  */}
                {/**/}
            </div>
        </div>
    );
}

export default BusList;