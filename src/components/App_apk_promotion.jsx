import { Link } from 'react-router-dom';

const AppApk = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div
            className="card rounded-3 border-0 bg-light-primary m-0 appLink-card p-xl-4 p-3"
            style={{ boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="card-body">
              <div className="row align-items-center justify-content-between">
                
                {/* First Column - Logo */}
                <div className="col-lg-3 col-md-3 col-sm-12 text-center">
                  <div className="d-inline-block">
                    <img src={require('../assets/images/train-4 (1).png')} className="img-fluid" width={220} alt="App Logo" />
                  </div>
                </div>
  
                {/* Second Column - Download Now and 3 Points */}
                <div className="col-lg-3 col-md-5 col-sm-12">
                  <h2 className="fw-bold fs-2 mb-1">Download App Now!</h2>
                  <ul className="list-unstyled mt-3">
                    <li><i className="fa-solid fa-check text-success me-2"></i> Get real-time updates</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> Exclusive deals and offers</li>
                    <li><i className="fa-solid fa-check text-success me-2"></i> Easy and secure bookings</li>
                  </ul>
                </div>
  
                {/* Third Column - Rating and App Links */}
                <div className="col-lg-3 col-md-4 col-sm-12">
                  <div className="mb-3">
                    <h5 className="fw-bold">Rated 4.8/5 by 10,000+ users</h5>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    {/* Google Play Link */}
                    <Link to="#" className="d-flex">
                      <div className="cardApp-box bg-dark border-primary py-2 px-3 rounded d-flex align-items-center">
                        <div className="cardApp-icon"><i className="fa-brands fa-google-play text-light fs-4" /></div>
                        <div className="cardApp-caption text-start ps-2">
                          <p className="text-light opacity-75 text-uppercase m-0">Get It On</p>
                          <h6 className="fw-bold text-light m-0">Google Play</h6>
                        </div>
                      </div>
                    </Link>
                    {/* App Store Link */}
                    <Link to="#" className="d-flex">
                      <div className="cardApp-box bg-primary py-2 px-3 rounded d-flex align-items-center">
                        <div className="cardApp-icon"><i className="fa-brands fa-apple text-light fs-4" /></div>
                        <div className="cardApp-caption text-start ps-2">
                          <p className="text-light opacity-75 text-uppercase m-0">Download On</p>
                          <h6 className="fw-bold text-light m-0">App Store</h6>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
  
                {/* Fourth Column - QR Code */}
                <div className="col-lg-2 col-md-3 col-sm-12 text-center">
                  <div className="qr-code">
                    <img src={require('../assets/images/QRCode.png')} className="img-fluid" width={180} alt="QR Code" />
                    <p className="mt-2">Scan to Download</p>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppApk;
