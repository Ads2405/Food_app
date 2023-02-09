import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand navbar-dark ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 d-flex justify-content-around">
              <li className="nav-item">
                <Link className="nav-link fs-4" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="/Menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" to="/Payment">
                  Payments
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
