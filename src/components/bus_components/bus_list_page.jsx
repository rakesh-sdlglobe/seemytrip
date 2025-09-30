import { Link } from 'react-router-dom';
import Header02 from '../header02';
import FooterDark from '../footer-dark';
import BusSearch from './bus_search_page';
import BusFilterPage from './bus_filter_page';
import BusResultPage from './bus_result_page';
import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectBusSearchList, selectBusSearchLoading } from '../../store/Selectors/busSelectors';

const defaultFilters = {
    busTypes: [],
    wifi: false,
    charging: false,
    snacks: false,
    rating45: false,
    rating4: false,
    rating35: false,
    departureTimes: [],
    arrivalTimes: [],
    pickupPoints: [],
    droppingPoints: [],
    priceSorts: [], // Changed to array for multiple selections
    priceMin: 0,
    priceMax: Infinity,
};

const BusList = () => {
    const [filters, setFilters] = useState(defaultFilters);
    const loading = useSelector(selectBusSearchLoading);

    // Handler for filter changes - optimized to prevent unnecessary re-renders
    const handleFilterChange = useCallback((newFilters) => {
        setFilters(prev => {
            // Check if any values actually changed to prevent unnecessary updates
            const hasChanges = Object.keys(newFilters).some(key => {
                const newValue = newFilters[key];
                const prevValue = prev[key];
                
                // Handle array comparisons
                if (Array.isArray(newValue) && Array.isArray(prevValue)) {
                    return newValue.length !== prevValue.length || 
                           !newValue.every((val, index) => val === prevValue[index]);
                }
                
                return newValue !== prevValue;
            });
            
            return hasChanges ? { ...prev, ...newFilters } : prev;
        });
    }, []);
    
    const handleClear = useCallback(() => setFilters(defaultFilters), []);

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
                <section className="gray-simple" >
                    <div className="container-xl" >
                        <div className="row justify-content-between gx-xl-4 gx-lg-3 gx-md-3">
                            {/* Sidebar */}
                            <BusFilterPage
                                filters={filters}
                                onFilterChange={handleFilterChange}
                                onClear={handleClear}
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                                loading={loading}
                                busResults={busResults}
                            />

                            {/* All List */}
                            <BusResultPage
                                filters={filters}
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