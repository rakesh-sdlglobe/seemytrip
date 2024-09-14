import React from 'react'

export const TopFilter = () => {
  return (
    <div className="row align-items-center justify-content-between">
                      <div className="col-xl-4 col-lg-4 col-md-4">
                        <h5 className="fw-bold fs-6 mb-lg-0 mb-3">Showing 280 Search Results</h5>
                      </div>
                      <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="d-flex align-items-center justify-content-start justify-content-lg-end flex-wrap">
                          <div className="flsx-first me-2">
                            <div className="bg-white rounded py-2 px-3">
                              <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="mapoption" />
                                <label className="form-check-label ms-1" htmlFor="mapoption">Map</label>
                              </div>
                            </div>
                          </div>
                          <div className="flsx-first mt-sm-0 mt-2">
                            <ul className="nav nav-pills nav-fill p-1 small lights blukker bg-primary rounded-3 shadow-sm" id="filtersblocks" role="tablist">
                              <li className="nav-item" role="presentation">
                                <button className="nav-link active rounded-3" id="trending" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Our Trending</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button className="nav-link rounded-3" id="mostpopular" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Most Popular</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                <button className="nav-link rounded-3" id="lowprice" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Lowest Price</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
  )
}
