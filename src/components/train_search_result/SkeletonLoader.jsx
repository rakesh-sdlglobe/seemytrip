import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="row align-items-center g-4 mt-0">
            {[1, 2].map((item) => (
                <div key={item} className="col-xl-12 col-lg-12 col-md-12">
                    <div className="skeleton-card">
                        <div className="row gy-4 align-items-center justify-content-between">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="train-info-skeleton">
                                        <div className="train-number shimmer"></div>
                                        <div className="train-name shimmer"></div>
                                        <div className="train-type shimmer"></div>
                                    </div>
                                    <div className="journey-details-skeleton">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="time-station">
                                                <div className="time shimmer"></div>
                                                <div className="station shimmer"></div>
                                            </div>
                                            <div className="journey-duration shimmer"></div>
                                            <div className="time-station">
                                                <div className="time shimmer"></div>
                                                <div className="station shimmer"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <div className="class-boxes">
                                    {[1, 2, 3, 4].map((box) => (
                                        <div key={box} className="class-box shimmer"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <style>
                {`
                    .skeleton-card {
                        background: #ffffff;
                        border-radius: 16px;
                        padding: 24px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                        margin-bottom: 20px;
                    }

                    .train-info-skeleton {
                        width: 200px;
                        padding: 16px;
                    }

                    .train-number {
                        height: 20px;
                        width: 60%;
                        margin-bottom: 12px;
                        border-radius: 4px;
                    }

                    .train-name {
                        height: 24px;
                        width: 90%;
                        margin-bottom: 12px;
                        border-radius: 4px;
                    }

                    .train-type {
                        height: 18px;
                        width: 40%;
                        border-radius: 4px;
                    }

                    .journey-details-skeleton {
                        flex-grow: 1;
                        margin: 0 24px;
                        padding: 20px;
                        background: #f8f9fa;
                        border-radius: 12px;
                    }

                    .time-station {
                        width: 120px;
                    }

                    .time {
                        height: 24px;
                        width: 80%;
                        margin-bottom: 8px;
                        border-radius: 4px;
                    }

                    .station {
                        height: 18px;
                        width: 100%;
                        border-radius: 4px;
                    }

                    .journey-duration {
                        height: 32px;
                        width: 100px;
                        border-radius: 16px;
                    }

                    .class-boxes {
                        display: flex;
                        gap: 16px;
                        margin-top: 16px;
                    }

                    .class-box {
                        width: 140px;
                        height: 80px;
                        border-radius: 12px;
                        background: #f8f9fa;
                    }

                    .shimmer {
                        background: linear-gradient(
                            90deg,
                            #f0f0f0 0%,
                            #f8f8f8 50%,
                            #f0f0f0 100%
                        );
                        background-size: 200% 100%;
                        animation: shimmer 2s infinite linear;
                    }

                    @keyframes shimmer {
                        0% {
                            background-position: 200% 0;
                        }
                        100% {
                            background-position: -200% 0;
                        }
                    }

                    @media (max-width: 768px) {
                        .journey-details-skeleton {
                            margin: 16px 0;
                        }
                        
                        .class-boxes {
                            flex-wrap: wrap;
                        }
                        
                        .class-box {
                            width: calc(50% - 8px);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default SkeletonLoader;