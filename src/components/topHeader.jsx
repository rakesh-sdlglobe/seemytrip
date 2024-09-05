import { Link } from "react-router-dom";

const TopHeader = () => {
    return (
        <div className="dashboard-menus border-top d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <ul className="user-Dashboard-menu">
                            <li className="active"><Link to="/my-profile"><i className="fa-regular fa-id-card me-2" />My Profile</Link></li>
                            <li><Link to="/my-booking"><i className="fa-solid fa-ticket me-2" />My Booking</Link></li>
                            <li><Link to="/travelers"><i className="fa-solid fa-user-group me-2" />Travelers</Link></li>
                            <li><Link to="/payment-detail"><i className="fa-solid fa-wallet me-2" />Payment Details</Link></li>
                            <li><Link to="/my-wishlists"><i className="fa-solid fa-shield-heart me-2" />My Wishlist</Link></li>
                            <li><Link to="/settings"><i className="fa-solid fa-sliders me-2" />Settings</Link></li>
                            <li><Link to="/delete-account"><i className="fa-solid fa-trash-can me-2" />Delete Profile</Link></li>
                            <li><Link to="/login"><i className="fa-solid fa-power-off me-2" />Sign Out</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader