import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header className="bg-primary text-white " style={{ width: "100vw", height: "20vh", backgroundColor:"#092540", position: "fixed" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Logo Section - 3/12 */}
          <div className="col-3 d-flex align-items-center">
            <img src="/logo.png" alt="Logo" style={{ height: "50px" }} />
          </div>

          {/* Search Bar Section - 3/12 */}
          <div className="col-3">
            <input type="text" className="form-control" placeholder="Search..." />
          </div>

          {/* Menu Items - 6/12 */}
          <div className="col-6">
            <nav>
              <ul className="nav justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link text-white">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white">About</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white">Services</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white">Portfolio</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white">Contact</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white">Tuyển dụng</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
