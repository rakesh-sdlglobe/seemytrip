const SerchComponent = () => {
    return (
      <div className="py-5 bg-primary position-relative">
        <div className="container">
          {/* Search Form */}
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="search-wrap position-relative">
                <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                  <div className="col-xl-8 col-lg-7 col-md-12">
                    <div className="row gy-3 gx-md-3 gx-sm-2">
                      {/* Leaving From */}
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                        <div className="form-group hdd-arrow mb-0">
                          <label className="text-light text-uppercase opacity-75">Leaving From</label>
                          <select className="leaving form-control fw-bold">
                            <option value>Select</option>
                            <option value="mum">Mumbai</option>
                            <option value="del">Delhi</option>
                            <option value="kol">Kolkata</option>
                            <option value="che">Chennai</option>
                            <option value="ban">Bangalore</option>
                            <option value="hyd">Hyderabad</option>
                            <option value="jai">Jaipur</option>
                            <option value="pun">Pune</option>
                          </select>
                        </div>
                      </div>
                      {/* Going To */}
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="form-group hdd-arrow mb-0">
                          <label className="text-light text-uppercase opacity-75">Going To</label>
                          <select className="goingto form-control fw-bold">
                            <option value>Select</option>
                            <option value="mum">Mumbai</option>
                            <option value="del">Delhi</option>
                            <option value="kol">Kolkata</option>
                            <option value="che">Chennai</option>
                            <option value="ban">Bangalore</option>
                            <option value="hyd">Hyderabad</option>
                            <option value="jai">Jaipur</option>
                            <option value="pun">Pune</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Journey Date */}
                  <div className="col-xl-4 col-lg-5 col-md-12">
                    <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                        <div className="form-group mb-0">
                          <label className="text-light text-uppercase opacity-75">Journey Date</label>
                          <input type="date" className="form-control fw-bold" placeholder="Select Journey Date" id="journeyDate" />
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                        <div className="form-group mb-0">
                          <button type="button" className="btn btn-whites text-primary full-width fw-medium">
                            <i className="fa-solid fa-magnifying-glass me-2" />Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </row> */}
        </div>
      </div>
    );
  };
  
  export default SerchComponent;
  