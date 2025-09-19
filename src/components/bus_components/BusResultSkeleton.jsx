import React from 'react';

const BusResultSkeleton = () => {
  return (
    <div className="col-xl-9 col-lg-8 col-md-12">
      {/* Search Bar Skeleton */}
      <div className="d-flex flex-column mt-2 border rounded gap-2 align-items-center w-100 bg-white p-3">
        {/* Search input skeleton */}
        <div className="skeleton skeleton-input w-100" style={{ height: 40, borderRadius: 4 }}></div>

        {/* Results count and sort options skeleton */}
        <div className="d-flex justify-content-between flex-wrap gap-2 align-items-center w-100">
          <div className="skeleton skeleton-text" style={{ width: 120, height: 20, borderRadius: 4 }}></div>
          <div className="d-flex align-items-center justify-content-center overflow-auto">
            <div className="skeleton skeleton-text me-3" style={{ width: 60, height: 16, borderRadius: 4 }}></div>
            <div className="d-flex align-items-center justify-content-center overflow-auto py-2 scroll-container" style={{width: "100%", scrollbarWidth: "thin", scrollbarColor: " #dc3545 #f8d7da"}}>
              <div className="btn-group" role="group" style={{width: "100%", minWidth: 0}}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="skeleton skeleton-button" style={{ width: 80, height: 32, margin: "0 2px", borderRadius: 4 }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bus Results Skeleton */}
      <div className="row align-items-center g-2 mt-2">
        {[1, 2, 3, 4].map((item) => (
          <div className="col-xl-12" key={item}>
            <div className="border rounded p-3 mb-3 bg-white" style={{ borderColor: "#007bff" }}>
              <div className="d-flex justify-content-between align-items-start flex-wrap position-relative">
                {/* Top section - Travel name and price */}
                <div className="flex w-100" style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}>
                  <div className="top-section">
                    <div className="skeleton skeleton-title mb-2" style={{ width: "60%", height: 28, borderRadius: 4 }}></div>
                    <div className="skeleton skeleton-subtitle" style={{ width: "40%", height: 18, borderRadius: 4 }}></div>
                  </div>
                  <div className="skeleton skeleton-price" style={{ width: 80, height: 32, borderRadius: 4 }}></div>
                </div>

                {/* Middle section - Departure, Duration, Arrival */}
                <div className="middle-section">
                  <div className="text-center me-4">
                    <div className="skeleton skeleton-time mb-1" style={{ width: 60, height: 24, borderRadius: 4 }}></div>
                    <div className="skeleton skeleton-date" style={{ width: 40, height: 16, borderRadius: 4 }}></div>
                  </div>
                  <div className="text-center mx-3">
                    <div className="skeleton skeleton-duration" style={{ width: 80, height: 20, borderRadius: 4 }}></div>
                  </div>
                  <div className="text-center ms-4">
                    <div className="skeleton skeleton-time mb-1" style={{ width: 60, height: 24, borderRadius: 4 }}></div>
                    <div className="skeleton skeleton-date" style={{ width: 40, height: 16, borderRadius: 4 }}></div>
                  </div>
                </div>

                {/* Bottom section - Rating, reviews, and button */}
                <div className="d-flex justify-content-between w-100">
                  <div>
                    <div className="d-flex align-items-center mb-2">
                      <div className="skeleton skeleton-rating me-2" style={{ width: 50, height: 24, borderRadius: 12 }}></div>
                      <div className="skeleton skeleton-reviews" style={{ width: 80, height: 16, borderRadius: 4 }}></div>
                    </div>
                    <div className="skeleton skeleton-button-small" style={{ width: 70, height: 28, borderRadius: 4 }}></div>
                  </div>

                  <div>
                    <div className="skeleton skeleton-seats mb-2" style={{ width: 100, height: 16, borderRadius: 4 }}></div>
                    <div className="skeleton skeleton-button-large" style={{ width: 120, height: 40, borderRadius: 4 }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
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

          .top-section{
          display: flex;
          flex-direction: column;
          width: 60%;
          top: 50%;
          bottom: 50%;
          margin-bottom: 10px;
        }
        
        .middle-section{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          position: absolute;
          top: 50%;
          bottom: 50%;
        }
        
        /* Responsive styles for middle section */
        @media (max-width: 560px) {
          .middle-section {
            position: static;
            margin-bottom: 10px;
            flex-direction: column;
            gap: 8px;
          }
          
          .middle-section > div {
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BusResultSkeleton;
