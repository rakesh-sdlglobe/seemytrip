import React from 'react';

const Skeleton = () => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-12">
      <div className="filter-searchBar bg-white rounded-3">
        {/* Header Skeleton */}
        <div className="filter-searchBar-head border-bottom">
          <div className="searchBar-headerBody d-flex align-items-start justify-content-between px-3 py-3">
            <div className="searchBar-headerfirst">
              <div className="skeleton skeleton-title mb-2" style={{ width: '60%', height: 24, borderRadius: 4 }}></div>
              <div className="skeleton skeleton-subtitle" style={{ width: '40%', height: 16, borderRadius: 4 }}></div>
            </div>
            <div className="searchBar-headerlast">
              <div className="skeleton skeleton-link" style={{ width: 60, height: 16, borderRadius: 4 }}></div>
            </div>
          </div>
        </div>

        <div className="filter-searchBar-body">
          {/* Bus Type Section Skeleton */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="skeleton skeleton-section-title mb-3" style={{ width: '70%', height: 20, borderRadius: 4 }}></div>
            <div className="searchBar-single-wrap">
              <div className="row gx-3 gy-2">
                {[1, 2, 3, 4].map((item) => (
                  <div className="col-6" key={item}>
                    <div className="skeleton skeleton-button" style={{ width: '100%', height: 32, borderRadius: 4 }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Departure Time Section Skeleton */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="skeleton skeleton-section-title mb-3" style={{ width: '80%', height: 20, borderRadius: 4 }}></div>
            <div className="searchBar-single-wrap">
              {[1, 2, 3, 4].map((item) => (
                <div className="skeleton skeleton-checkbox mb-2" key={item} style={{ width: '100%', height: 20, borderRadius: 4 }}></div>
              ))}
            </div>
          </div>

          {/* Arrival Time Section Skeleton */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="skeleton skeleton-section-title mb-3" style={{ width: '75%', height: 20, borderRadius: 4 }}></div>
            <div className="searchBar-single-wrap">
              {[1, 2, 3, 4].map((item) => (
                <div className="skeleton skeleton-checkbox mb-2" key={item} style={{ width: '100%', height: 20, borderRadius: 4 }}></div>
              ))}
            </div>
          </div>

          {/* Price Sort Section Skeleton */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="skeleton skeleton-section-title mb-3" style={{ width: '65%', height: 20, borderRadius: 4 }}></div>
            <div className="searchBar-single-wrap">
              <div className="row gx-3">
                <div className="col-6">
                  <div className="skeleton skeleton-button" style={{ width: '100%', height: 32, borderRadius: 4 }}></div>
                </div>
                <div className="col-6">
                  <div className="skeleton skeleton-button" style={{ width: '100%', height: 32, borderRadius: 4 }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Filters Section Skeleton */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="skeleton skeleton-section-title mb-3" style={{ width: '85%', height: 20, borderRadius: 4 }}></div>
            <div className="searchBar-single-wrap">
              {[1, 2, 3].map((item) => (
                <div className="skeleton skeleton-checkbox mb-2" key={item} style={{ width: '100%', height: 20, borderRadius: 4 }}></div>
              ))}
            </div>
          </div>

          {/* Customer Ratings Section Skeleton */}
          <div className="searchBar-single px-3 py-3 border-bottom">
            <div className="skeleton skeleton-section-title mb-3" style={{ width: '90%', height: 20, borderRadius: 4 }}></div>
            <div className="searchBar-single-wrap">
              {[1, 2, 3].map((item) => (
                <div className="skeleton skeleton-checkbox mb-2" key={item} style={{ width: '100%', height: 20, borderRadius: 4 }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skeleton animation styles */}
      <style>{`
        .skeleton {
          animation: skeleton-loading 1.2s infinite linear alternate;
          background-color: #eee;
        }
        @keyframes skeleton-loading {
          0% { background-color: #eee; }
          100% { background-color: #e0e0e0; }
        }
      `}</style>
    </div>
  );
};

export default Skeleton; 