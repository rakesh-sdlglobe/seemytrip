import React from "react";

export default function HotelDetailsSkeleton() {
  return (
    <div className="skeleton-hotel-details" style={{ background: "#f8f9fa", minHeight: "100vh", padding: 0, margin: 0 }}>
      {/* Skeleton Navbar */}
      <div className="skeleton-navbar" style={{ width: "100%", height: 64, background: "#fff", marginBottom: 8, display: "flex", alignItems: "center", padding: "0 24px", gap:40 }}>
        <div className="skeleton" style={{ width: 120, height: 32, borderRadius: 8, marginRight: 24 }} />
        <div className="skeleton" style={{ width: 80, height: 24, borderRadius: 8, marginRight: 16 }} />
        <div className="skeleton" style={{ width: 80, height: 24, borderRadius: 8, marginRight: 16 }} />
        <div className="skeleton" style={{ width: 80, height: 24, borderRadius: 8, marginRight: 16 }} />
        <div className="skeleton" style={{ width: 80, height: 24, borderRadius: 8, marginRight: 16 }} />
        <div className="skeleton" style={{ width: 80, height: 24, borderRadius: 8, marginRight: 16 }} />
        <div className="skeleton" style={{ width: 80, height: 24, borderRadius: 8, marginRight: 16 }} />
        <div className="skeleton" style={{ width: 40, height: 40, borderRadius: "50%", marginLeft: "auto" }} />
      </div>
      {/* Skeleton Searchbar */}
      <div style={{ width: "100%", height: 56, background: "#fff", marginBottom: 16, display: "flex", alignItems: "center", padding: "0 24px", gap:60 }}>
        <div className="skeleton" style={{ width: 300, height: 32, borderRadius: 8 }} />
        <div className="skeleton" style={{ width: 130, height: 32, borderRadius: 8 }} />
        <div className="skeleton" style={{ width: 130, height: 32, borderRadius: 8 }} />
        <div className="skeleton" style={{ width: 300, height: 32, borderRadius: 8 }} />
        <div className="skeleton" style={{ width: 100, height: 32, borderRadius: 8 }} />
      </div>
      {/* Main Container */}
      <div className="container py-1" style={{ border: "1px solid #dee2e6", borderRadius: "1rem", background: "#fff", padding: "10px", maxWidth: 1120 }}>
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            {/* Title Skeleton */}
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <div className="skeleton" style={{ width: 300, height: 32, borderRadius: 8, marginBottom: 8 }} />
                <div className="skeleton" style={{ width: 200, height: 20, borderRadius: 8, marginBottom: 8 }} />
                <div className="d-flex align-items-center">
                  <div className="skeleton" style={{ width: 100, height: 20, borderRadius: 8, marginRight: 16 }} />
                  <div className="skeleton" style={{ width: 80, height: 20, borderRadius: 8 }} />
                </div>
              </div>
            </div>
            {/* Image Carousel Skeleton */}
            <div className="position-relative mb-4">
              <div className="skeleton" style={{ width: "100%", height: 300, borderRadius: 16 }} />
              <div style={{ position: "absolute", bottom: 16, left: 16, display: "flex", gap: 8 }}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="skeleton" style={{ width: 16, height: 16, borderRadius: "50%" }} />
                ))}
              </div>
            </div>
            {/* Tabs Skeleton */}
            <div className="card mb-4 p-0" style={{ minWidth: 900, maxWidth: 1120, borderRadius: "1rem" }}>
              <div style={{ display: "flex", gap: 16, padding: 16 }}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="skeleton" style={{ width: 80, height: 32, borderRadius: 8 }} />
                ))}
              </div>
              {/* Tab Content Skeleton */}
              <div style={{ padding: 24 }}>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="skeleton" style={{ width: "100%", height: 32, borderRadius: 8, marginBottom: 16 }} />
                ))}
                <div className="skeleton" style={{ width: "80%", height: 24, borderRadius: 8, marginBottom: 8 }} />
                <div className="skeleton" style={{ width: "60%", height: 24, borderRadius: 8, marginBottom: 8 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skeleton Animation Style */}
      <style>
        {`
          .skeleton {
            background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
            background-size: 200% 100%;
            animation: skeleton-loading 1.2s infinite linear;
          }
          @keyframes skeleton-loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}
      </style>
    </div>
  );
}
