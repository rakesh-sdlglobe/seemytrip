import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="row align-items-center g-4 mt-0">
        {[1, 2, 3].map((item) => (
            <div key={item} className="col-xl-12 col-lg-12 col-md-12">
            <div className="bg-white rounded-3 p-4" style={{ 
                animation: "pulse 1.5s infinite",
                background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                backgroundSize: "200% 100%",
            }}>
                <div className="row gy-4 align-items-center justify-content-between">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="d-flex align-items-center justify-content-between">
                    <div className="train-name me-4" style={{ width: "200px", height: "80px", background: "#e0e0e0", borderRadius: "8px" }} />
                    <div className="journey-details flex-grow-1 mx-4 p-3" style={{ height: "120px", background: "#e0e0e0", borderRadius: "12px" }} />
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row g-3">
                    {[1, 2, 3, 4].map((box) => (
                        <div key={box} className="col-auto">
                        <div style={{ width: "140px", height: "80px", background: "#e0e0e0", borderRadius: "10px" }} />
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </div>
        ))}
        <style>
            {`
            @keyframes pulse {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
            }
            `}
        </style>
        </div>
    );
};

export default SkeletonLoader;