import React from 'react';
import Header02 from '../header02';
import Footer from '../footer';

const InsuranceListSkeleton = () => {
  return (
    <>
      <Header02 />
      <div className="container-xl mt-4">
        <div className="row">
          {/* Left Sidebar - Search Criteria Skeleton */}
          <div className="col-md-3">
            <div className="card shadow-sm border-0 sticky-top" style={{top: '20px'}}>
              <div className="card-header bg-white border-0 pb-0">
                <div className="d-flex align-items-center mb-0 pb-3 border-bottom border-2 border-primary">
                  <div className="skeleton-icon me-2" style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#e9ecef',
                    borderRadius: '4px'
                  }}></div>
                  <div className="skeleton-text" style={{
                    width: '120px',
                    height: '20px',
                    backgroundColor: '#e9ecef',
                    borderRadius: '4px'
                  }}></div>
                </div>
              </div>
               
              <div className="card-body">
                {/* Search criteria skeleton items */}
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="d-flex align-items-center mb-3">
                    <div className="skeleton-icon me-2" style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#e9ecef',
                      borderRadius: '4px'
                    }}></div>
                    <div className="skeleton-text" style={{
                      width: `${Math.random() * 100 + 80}px`,
                      height: '16px',
                      backgroundColor: '#e9ecef',
                      borderRadius: '4px'
                    }}></div>
                  </div>
                ))}
                
                <div className="skeleton-button mt-3" style={{
                  width: '100%',
                  height: '40px',
                  backgroundColor: '#e9ecef',
                  borderRadius: '6px'
                }}></div>
              </div>
            </div>
          </div>

          {/* Right Section - Insurance Plans Skeleton */}
          <div className="col-md-9">
            {/* Header with Email Button Skeleton */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="skeleton-text" style={{
                width: '200px',
                height: '20px',
                backgroundColor: '#e9ecef',
                borderRadius: '4px'
              }}></div>
              <div className="skeleton-button" style={{
                width: '180px',
                height: '36px',
                backgroundColor: '#e9ecef',
                borderRadius: '6px'
              }}></div>
            </div>

            {/* Insurance Plans List Skeleton */}
            <div className="d-flex flex-column gap-3">
              {[1, 2, 3, 4, 5, 6].map((planIndex) => (
                <div key={planIndex} className="border rounded p-3 mb-3 bg-white" style={{ borderColor: "#007bff" }}>
                  <div className="d-flex justify-content-between align-items-start flex-wrap position-relative">
                    {/* Top Section Skeleton */}
                    <div className="flex" style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}>
                      <div>
                        <div className="skeleton-text mb-1" style={{
                          width: '200px',
                          height: '24px',
                          backgroundColor: '#e9ecef',
                          borderRadius: '4px'
                        }}></div>
                        <div className="skeleton-text mb-2" style={{
                          width: '300px',
                          height: '16px',
                          backgroundColor: '#e9ecef',
                          borderRadius: '4px'
                        }}></div>
                      </div>
                      <div className="skeleton-text" style={{
                        width: '80px',
                        height: '32px',
                        backgroundColor: '#e9ecef',
                        borderRadius: '4px'
                      }}></div>
                    </div>

                    {/* Middle Section - Duration and Dates Skeleton */}
                    <div className="middle-section">
                      <div className="text-center me-4">
                        <div className="skeleton-text mb-1" style={{
                          width: '60px',
                          height: '16px',
                          backgroundColor: '#e9ecef',
                          borderRadius: '4px',
                          margin: '0 auto'
                        }}></div>
                        <div className="skeleton-text" style={{
                          width: '40px',
                          height: '14px',
                          backgroundColor: '#e9ecef',
                          borderRadius: '4px',
                          margin: '0 auto'
                        }}></div>
                      </div>
                      <div className="text-center mx-3">
                        <div className="skeleton-text" style={{
                          width: '60px',
                          height: '16px',
                          backgroundColor: '#e9ecef',
                          borderRadius: '4px',
                          margin: '0 auto'
                        }}></div>
                      </div>
                      <div className="text-center ms-4">
                        <div className="skeleton-text mb-1" style={{
                          width: '60px',
                          height: '16px',
                          backgroundColor: '#e9ecef',
                          borderRadius: '4px',
                          margin: '0 auto'
                        }}></div>
                        <div className="skeleton-text" style={{
                          width: '40px',
                          height: '14px',
                          backgroundColor: '#e9ecef',
                          borderRadius: '4px',
                          margin: '0 auto'
                        }}></div>
                      </div>
                    </div>

                    {/* Bottom Section Skeleton */}
                    <div className="d-flex justify-content-between w-100">
                      <div>
                        <div className="skeleton-button" style={{
                          width: '150px',
                          height: '28px',
                          backgroundColor: '#e9ecef',
                          borderRadius: '4px'
                        }}></div>
                      </div>

                      <div>
                        <div className="skeleton-text mb-2" style={{
                          width: '80px',
                          height: '14px',
                          backgroundColor: '#e9ecef',
                          borderRadius: '4px'
                        }}></div>
                        <div className="d-flex gap-2">
                          <div className="d-flex align-items-center gap-2">
                            <div className="skeleton-checkbox" style={{
                              width: '18px',
                              height: '18px',
                              backgroundColor: '#e9ecef',
                              borderRadius: '4px'
                            }}></div>
                            <div className="skeleton-text" style={{
                              width: '40px',
                              height: '14px',
                              backgroundColor: '#e9ecef',
                              borderRadius: '4px'
                            }}></div>
                          </div>
                          <div className="skeleton-button" style={{
                            width: '100px',
                            height: '32px',
                            backgroundColor: '#e9ecef',
                            borderRadius: '4px'
                          }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Links Skeleton */}
                  <div className="d-flex justify-content-center gap-4 mt-3 pt-3 border-top">
                    <div className="skeleton-text" style={{
                      width: '80px',
                      height: '16px',
                      backgroundColor: '#e9ecef',
                      borderRadius: '4px'
                    }}></div>
                    <div className="skeleton-text" style={{
                      width: '1px',
                      height: '16px',
                      backgroundColor: '#e9ecef',
                      borderRadius: '4px'
                    }}></div>
                    <div className="skeleton-text" style={{
                      width: '90px',
                      height: '16px',
                      backgroundColor: '#e9ecef',
                      borderRadius: '4px'
                    }}></div>
                    <div className="skeleton-text" style={{
                      width: '1px',
                      height: '16px',
                      backgroundColor: '#e9ecef',
                      borderRadius: '4px'
                    }}></div>
                    <div className="skeleton-text" style={{
                      width: '100px',
                      height: '16px',
                      backgroundColor: '#e9ecef',
                      borderRadius: '4px'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Skeleton */}
            <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
              <div className="skeleton-text" style={{
                width: '80px',
                height: '16px',
                backgroundColor: '#e9ecef',
                borderRadius: '4px'
              }}></div>
              <div className="d-flex gap-2">
                <div className="skeleton-button" style={{
                  width: '80px',
                  height: '32px',
                  backgroundColor: '#e9ecef',
                  borderRadius: '4px'
                }}></div>
                <div className="skeleton-button" style={{
                  width: '60px',
                  height: '32px',
                  backgroundColor: '#e9ecef',
                  borderRadius: '4px'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skeleton-text, .skeleton-button, .skeleton-icon, .skeleton-checkbox {
          animation: skeleton-loading 1.5s ease-in-out infinite alternate;
        }

        @keyframes skeleton-loading {
          0% {
            background-color: #e9ecef;
          }
          100% {
            background-color: #f8f9fa;
          }
        }

        .middle-section {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          position: absolute;
          top: 50%;
          bottom: 50%;
        }

        /* When screen is between 600px and 1200px → absolute */
        @media (max-width: 560px) {
          .middle-section {
            position: static;
            margin-bottom: 10px;
          }
        }
        
        @media (max-width: 768px) {
          .d-flex.justify-content-between.align-items-center.flex-wrap {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }
      `}</style>
      
      <Footer />
    </>
  );
};

export default InsuranceListSkeleton;
