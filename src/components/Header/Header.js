import React from "react";
import "../../reset.css";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <h3 className="header-title-sm">React & Node</h3>
        <h1 className="header-title-lg">Blog</h1>
      </div>
      <img
        src="https://data.webnhiepanh.com/wp-content/uploads/2020/11/21105453/phong-canh-1.jpg"
        alt=""
        className="header-img"
      />
    </div>
  );
}
export default Header;
