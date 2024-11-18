import { NavLink } from "react-router-dom";

const TopHeader = () => {
    return (
      <>
        <style>
            {`
            .user-Dashboard-menu .active {
                color: #cd2c22;
                font-weight: bold;
                position: relative;
            }
            `}
        </style>
        <div className="dashboard-menus border-top d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <ul className="user-Dashboard-menu">
                            <li><NavLink to="/my-profile" activeClassName="active"><i className="fa-regular fa-id-card me-2" />My Profile</NavLink></li>
                            <li><NavLink to="/my-booking" activeClassName="active"><i className="fa-solid fa-ticket me-2" />My Booking</NavLink></li>
                            <li><NavLink to="/travelers" activeClassName="active"><i className="fa-solid fa-user-group me-2" />Travelers</NavLink></li>
                            <li><NavLink to="/payment-detail" activeClassName="active"><i className="fa-solid fa-wallet me-2" />Payment Details</NavLink></li>
                            {/* <li><NavLink to="/my-wishlists"><i className="fa-solid fa-shield-heart me-2" />My Wishlist</NavLink></li> */}
                            <li><NavLink to="/settings" activeClassName="active"><i className="fa-solid fa-sliders me-2" />Settings</NavLink></li>
                            {/* <li><NavLink to="/delete-account" activeClassName="active"><i className="fa-solid fa-trash-can me-2" />Delete Profile</NavLink></li> */}
                            {/* <li><NavLink to="/login"><i className="fa-solid fa-power-off me-2" />Sign Out</NavLink></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default TopHeader;
