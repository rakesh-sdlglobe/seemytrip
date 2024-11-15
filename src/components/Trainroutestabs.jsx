import React from 'react';

function TrainRoutesTabs() {
  return (
    <div className="container" >
      <div className="card shadow-sm p-4 custom-card">
        <ul className="nav nav-underline mb-3" id="trainRoutesTab" role="tablist">
          <li className="nav-item">
          
            <a
              className="nav-link active custom-link"
              id="popular-routes-tab"
              data-bs-toggle="tab"
              href="#popularRoutes"
              role="tab"
              aria-controls="popularRoutes"
              aria-selected="true"
            >
              Popular Train Routes
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link custom-link"
              id="top-routes-tab"
              data-bs-toggle="tab"
              href="#topRoutes"
              role="tab"
              aria-controls="topRoutes"
            >
              Top Train Routes
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link custom-link"
              id="trending-routes-tab"
              data-bs-toggle="tab"
              href="#trendingRoutes"
              role="tab"
              aria-controls="trendingRoutes"
            >
              Trending Train Routes
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link custom-link"
              id="top-irctc-tab"
              data-bs-toggle="tab"
              href="#topIrctc"
              role="tab"
              aria-controls="topIrctc"
            >
              Top IRCTC Trains
            </a>
          </li>
        </ul>

        <div className="tab-content" id="trainRoutesTabContent">
          {/* Tab 1: Popular Train Routes */}
          <div
            className="tab-pane fade show active"
            id="popularRoutes"
            role="tabpanel"
            aria-labelledby="popular-routes-tab"
          >
            <ul className="list-unstyled" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              <li>New Delhi - Mumbai</li>
              <li>Bangalore - Chennai</li>
              <li>Hyderabad - Pune</li>
              <li>Kolkata - Patna</li>
              <li>Ahmedabad - Jaipur</li>
            </ul>
          </div>

          {/* Tab 2: Top Train Routes */}
          <div
            className="tab-pane fade"
            id="topRoutes"
            role="tabpanel"
            aria-labelledby="top-routes-tab"
          >
            <ul className="list-unstyled" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              <li>Delhi - Agra</li>
              <li>Mumbai - Goa</li>
              <li>Chennai - Coimbatore</li>
              <li>Jaipur - Udaipur</li>
              <li>Lucknow - Varanasi</li>
            </ul>
          </div>

          {/* Tab 3: Trending Train Routes */}
          <div
            className="tab-pane fade"
            id="trendingRoutes"
            role="tabpanel"
            aria-labelledby="trending-routes-tab"
          >
            <ul className="list-unstyled" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              <li>Delhi - Chandigarh</li>
              <li>Pune - Bangalore</li>
              <li>Kolkata - Bhubaneswar</li>
              <li>Mumbai - Ahmedabad</li>
              <li>Chennai - Madurai</li>
            </ul>
          </div>

          {/* Tab 4: Top IRCTC Trains */}
          <div
            className="tab-pane fade"
            id="topIrctc"
            role="tabpanel"
            aria-labelledby="top-irctc-tab"
          >
            <ul className="list-unstyled" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              <li>Rajdhani Express</li>
              <li>Shatabdi Express</li>
              <li>Duronto Express</li>
              <li>Gatimaan Express</li>
              <li>Tejas Express</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Internal CSS */}
      <style jsx>{`
        .custom-card {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1) !important;
          border-radius: 8px;
        }
        .custom-link {
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
}

export default TrainRoutesTabs;
