import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <h3 className="sidebar-title">ABOUT ME</h3>
        <img
          src="https://topshare.vn/wp-content/uploads/2021/02/Hinh-soi-3D-sieu-dep-ngau-va-chat-nhat-1-edited.gif"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vestibulum, purus non feugiat congue, odio nisi eleifend arcu, sed
          tincidunt ex lectus vel tellus.
        </p>
      </div>
      <div className="sidebar-item">
        <h3 className="sidebar-title">CATEGORIES</h3>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">History</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Sports</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <h3 className="sidebar-title">FOLLOW US</h3>
        <div className="sidebar-socials">
          <i className="sidebar-icons fab fa-facebook-square"></i>
          <i className="sidebar-icons fab fa-twitter-square"></i>
          <i className="sidebar-icons  fab fa-pinterest-square"></i>
          <i className="sidebar-icons  fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
