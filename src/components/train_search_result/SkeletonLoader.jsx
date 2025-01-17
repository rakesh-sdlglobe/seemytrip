import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="row align-items-center g-4 mt-0">
            {/* <div style={{ width: "100%", height: "80px", background: "#EAF5E9", borderRadius: "10px" }}/> */}
        {[1, 2].map((item) => (
            <div key={item} className="col-xl-12 col-lg-12 col-md-12">
            <div className="bg-white rounded-3 p-4" style={{ 
                animation: "pulse 1.5s infinite",
                background: "linear-gradient(90deg,rgb(247, 251, 255) 25%,rgb(254, 247, 248) 50%,rgb(242, 248, 243) 75%)", // Light green and pink gradient
                backgroundSize: "200% 100%",
            }}>
                <div className="row gy-4 align-items-center justify-content-between">
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="d-flex align-items-center justify-content-between">
                    <div className="train-name me-4" style={{ width: "200px", height: "7rem", background: "#EAF5FE", borderRadius: "8px" }} />
                    <div className="journey-details flex-grow-1 mx-4 p-3" style={{ height: "120px", background: "#EAF5FF", borderRadius: "12px" }} />
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row g-3">
                    {[1, 2, 3, 4].map((box) => (
                        <div key={box} className="col-auto">
                        <div style={{ width: "140px", height: "80px", background: "#EAF5E9", borderRadius: "10px", border:'1px solid rgb(197, 254, 205)'  }} />
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