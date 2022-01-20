import React from "react";
import { Link } from "react-router-dom";
import "../../reset.css";
import "./Navbar.css";
function Navbar() {
  const user = true;
  return (
    <div className="navbar">
      <div className="topLeft">
        <i className="navbar-icons fab fa-facebook-square"></i>
        <i className="navbar-icons fab fa-twitter-square"></i>
        <i className="navbar-icons  fab fa-pinterest-square"></i>
        <i className="navbar-icons  fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="menu">
          <li className="menu-item">
            <Link to="/home" className="link">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/home" className="link">
              About
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/home" className="link">
              Contact
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/setting" className="link">
              Setting
            </Link>
          </li>

          <li className="menu-item">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            src="https://gudlogo.com/wp-content/uploads/2019/05/logo-con-cho-soi-17.jpg"
            alt="user-img"
            className="navbar-img"
          />
        ) : (
          <ul className="menu">
            <li className="menu-item">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="menu-item">
              <Link className="link" to="/resgister">
                Resgister
              </Link>
            </li>
          </ul>
        )}
        <i className="search-icon fas fa-search"></i>
      </div>
    </div>
  );
}
export default Navbar;
